import { useField } from 'react-form'

const validateNewPost = (post: string) => {
  if (!post) {
    return 'A post is required'
  }
  return false
}

export default function PostField() {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps
  } = useField('post', {
    validate: validateNewPost
  })

  return (
    <>
      <textarea
        rows={3}
        className="border"
        placeholder="Post..."
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
