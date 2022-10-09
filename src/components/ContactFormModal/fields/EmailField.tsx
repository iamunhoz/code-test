import { useField } from 'react-form'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validateEmail = (email: string) => {
  if (!email) {
    return 'An e-mail address is required'
  }

  const emailPattern =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (!email.match(emailPattern)) {
    return 'Please inform a valid e-mail address'
  }

  return false
}

export default function EmailField() {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps
  } = useField('email', {
    validate: validateEmail
  })

  return (
    <>
      <input
        className="border"
        placeholder="Fill a valid e-mail"
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
