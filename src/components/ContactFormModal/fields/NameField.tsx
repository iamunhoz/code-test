import { useField } from 'react-form'

const validateName = (name: string) => {
  if (!name) {
    return 'A name is required'
  }
  return false
}

export default function NameField() {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps
  } = useField('name', {
    validate: validateName
  })

  return (
    <>
      <input
        className="border"
        placeholder="Fill your full name"
        {...getInputProps()}
      />{' '}
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <em>{error}</em>
      ) : null}
    </>
  )
}
