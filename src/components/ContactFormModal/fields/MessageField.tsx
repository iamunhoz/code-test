import { useField } from 'react-form'

const validateMessage = (message: string) => {
  if (!message) {
    return 'A message is required'
  }
  return false
}

export default function MessageField() {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps
  } = useField('message', {
    validate: validateMessage
  })

  return (
    <>
      <textarea
        rows={3}
        className="border"
        placeholder="Hello..."
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
