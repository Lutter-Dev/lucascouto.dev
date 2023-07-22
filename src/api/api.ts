import { GraphQLClient } from 'graphql-request'
import * as API from './api.graphql'

export function createApi() {
  const client = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT!, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN!}`
    }
  })
  return API.getSdk(client)
}

export type GraphAPI = ReturnType<typeof createApi>
