type LoadingSpinnerProps = {
  loading: boolean
}
export default function LoadingSpinner(props: LoadingSpinnerProps) {
  const { loading } = props

  if (!loading) return null

  return <div className="spin" />
}
