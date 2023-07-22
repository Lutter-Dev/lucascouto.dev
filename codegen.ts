import type { CodegenConfig } from '@graphql-codegen/cli'

const path = require('path')
const fs = require('fs')

const config: CodegenConfig = {
  schema:
    'https://api-sa-east-1.hygraph.com/v2/cljrrag5z0um901t30fhu44r1/master',
  documents: 'src/**/*.graphql',
  generates: {
    'src/api/api.graphql.ts': {
      plugins: [
        {
          add: {
            content: 'import { GraphQLClient, gql } from "graphql-request";\n'
          }
        },
        {
          add: {
            placement: 'append',
            content: buildGetSdk()
          }
        },
        'typescript-operations',
        'typescript'
      ],
      config: {
        namingConvention: './codegenNamingConvention',
        enumsAsTypes: true
      }
    }
  }
}

function buildGetSdk() {
  let fragments = ''
  let queries = 'return {\n'
  let mutations = ''

  const content = fs.readFileSync(
    path.join(__dirname, 'src/api/queries.graphql'),
    'utf-8'
  )

  content.split('\n\n').forEach((block: string) => {
    if (block.startsWith('fragment')) {
      const docName = getDocumentName(block)

      let fragmentFragments = getFragments(block)

      fragments += `const ${docName}FragmentDoc = gql\`
        ${block}
        ${fragmentFragments}
        \`\n
        `
    } else if (block.startsWith('query')) {
      const docName = getDocumentName(block)

      let queryFragments = getFragments(block)

      queries += `${docName}(
            variables?: ${docName}QueryVariables
          ): Promise<${docName}Query> {
            return client.request<${docName}Query>(
              gql\`
                ${block}
                ${queryFragments}
              \`,
              variables
            )
          },
      `
    } else if (block.startsWith('mutation')) {
      const docName = getDocumentName(block)

      let mutationFragments = getFragments(block)

      mutations += `${docName}(
            variables?: ${docName}MutationVariables
          ): Promise<${docName}Mutation> {
            return client.request<${docName}Mutation>(
              gql\`
                ${block}
                ${mutationFragments}
              \`,
              variables
            )
          },
      `
    }
  })

  return `export function getSdk(client: GraphQLClient) {
    ${fragments}
    ${queries}
    ${mutations}
  }
  }`
}

function getIndicesOf(searchStr: string, str: string, caseSensitive?: boolean) {
  var searchStrLen = searchStr.length
  if (searchStrLen == 0) {
    return []
  }
  var startIndex = 0,
    index,
    indices = []
  if (!caseSensitive) {
    str = str.toLowerCase()
    searchStr = searchStr.toLowerCase()
  }
  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    indices.push(index)
    startIndex = index + searchStrLen
  }
  return indices
}

function getDocumentName(block: string) {
  const firstLine = block.split('\n')[0]

  if (firstLine.indexOf('(') >= 0) {
    return firstLine.slice(firstLine.indexOf(' ') + 1, firstLine.indexOf('('))
  }

  return firstLine.split(' ')[1]
}

function getFragments(block: string) {
  const indices = getIndicesOf('...', block)

  let fragments = ''

  if (indices.length > 0) {
    indices.forEach((index) => {
      const temp = block.slice(index + 3)

      fragments += `\${${temp.slice(0, temp.indexOf('\n'))}FragmentDoc}`
    })
  }

  return fragments
}

export default config
