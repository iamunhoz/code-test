import { useField } from 'react-form'

const validateTitle = (title: string) => {
  if (!title) {
    return 'A title is required'
  }
  return false
}

export default function TitleField() {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps
  } = useField('title', {
    validate: validateTitle
  })

  return (
    <>
      <input
        className="border"
        placeholder="Fill the title"
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
