import { useEffect } from 'react'
import { useField } from 'react-form'
import { useAppStore } from 'state'

const validateURL = (url: string) => {
  if (!url) {
    return 'A url is required'
  }

  return false
}

export default function ImageURLField() {
  const { setNewPostImgURL } = useAppStore((state) => state)

  const {
    meta: { error, isTouched, isValidating },
    getInputProps,
    value
  } = useField('imageUrl', {
    validate: validateURL
  })

  useEffect(() => {
    setNewPostImgURL(value)
  }, [setNewPostImgURL, value])

  return (
    <>
      <input
        className="border"
        placeholder="Fill the image URL"
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
