import { useField } from 'react-form'

const validateAuthor = (author: string) => {
  if (!author) {
    return 'A full name for the author is required'
  }

  return false
}

export default function AuthorField() {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps
  } = useField('author', {
    validate: validateAuthor
  })

  return (
    <>
      <input
        className="border"
        placeholder="Fill the author name"
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
