import { BasicCategory } from '@api'
import { FlexBox } from '@ui'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

type Props = {
  categories?: BasicCategory[]
}

export function CategoriesSection({ categories }: Props) {
  const { t } = useTranslation()

  return (
    <FlexBox className="categories-section">
      <h1>{t('categories')}</h1>
      <div className="divider" />
      <div className="grid grid-cols-2 grid-flow-row md:grid-cols-4">
        {categories?.map((category) => (
          <div key={category.slug} className="category-link">
            <Link className="link" href={`/blog/category/${category.slug}`}>
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </FlexBox>
  )
}
