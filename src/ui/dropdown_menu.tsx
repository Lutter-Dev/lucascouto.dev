import { cn } from '@utils/cn'
import { useState } from 'react'

type DropdownMenuProps = {
  items: string[]
  selectedItem: string
  isInline?: boolean
  onItemSelected?: (selectedItem: string) => void
}

export function DropdownMenu({
  items,
  selectedItem,
  isInline = false,
  onItemSelected
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleItemClick = (item: any) => {
    onItemSelected?.(item)
    setIsOpen(false)
  }

  return (
    <div className="dropdown">
      <button className="button" onClick={handleToggle}>
        <h1>{selectedItem}</h1>
        <div className="arrow-dropdown" />
      </button>
      {isOpen && (
        <ul className={cn('dropdown-menu', isInline ? 'inline-menu' : '')}>
          {items.map((item, index) => {
            return (
              <li key={index} onClick={() => handleItemClick(item)}>
                <h1>{item}</h1>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
