import { RefObject } from 'react'

type Props = {
  reference?: RefObject<HTMLInputElement>
  id?: string
  label?: string
}

export function CheckBox({ reference, id, label }: Props) {
  return (
    <div className="custom-checkbox">
      <label className="container">
        <input ref={reference} type="checkbox" id={id} value="true" />
        <span className="checkmark" />
      </label>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
