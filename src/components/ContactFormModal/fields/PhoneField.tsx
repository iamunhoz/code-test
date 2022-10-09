import { useField } from 'react-form'

const validatePhone = (phone: string) => {
  if (!phone) {
    return 'A phone is required'
  }

  const cleanPhone = phone
    .replace('(', '')
    .replace(')', '')
    .replaceAll('-', '')
    .trim()

  if (cleanPhone.length !== 11) {
    return 'Please inform a valid phone number without country code'
  }
  return false
}

export default function PhoneField() {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps
  } = useField('phone', {
    validate: validatePhone
  })

  return (
    <>
      <input
        className="border"
        placeholder="Fill your phone"
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
