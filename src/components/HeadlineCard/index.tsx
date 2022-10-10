import { PostPayload } from 'types'
import { useEffect, useMemo } from 'react'
import { getHeadline, sanitize } from 'utils'
import { useAppStore } from 'state'
import { useMediaQuery } from 'utils/responsivity'

// o padrão grid se repete a cada 6 posts
const itemGridClassnames = [
  'row-span-1 col-span-1 md:col-span-3 lg:h-64',
  'row-span-1 col-span-1 md:col-span-3 lg:h-64',
  'row-span-1 col-span-1 md:col-span-4 md:col-start-3',
  'row-span-1 col-span-1 md:col-span-3 lg:h-64',
  'row-span-1 col-span-1 md:col-span-3 lg:h-64',
  'row-span-2 col-span-1 md:col-span-4'
]

type HeadlineCardProps = {
  post: PostPayload
  idx: number
}
export default function HeadlineCard(props: HeadlineCardProps) {
  const { post, idx } = props

  const xlScreen = useMediaQuery('xl')
  const lgScreen = useMediaQuery('lg')
  const mdScreen = useMediaQuery('md')

  const headlineSize = useMemo(() => {
    if (xlScreen) return 500
    if (lgScreen) return 100
    return 200
  }, [lgScreen, xlScreen])

  const { setPostId } = useAppStore((state) => state)

  const flexOrder = useMemo(() => {
    if (mdScreen) {
      return [3, 4].includes(idx % 6) ? 1 : 0
    }
    return idx % 2 === 0 ? 1 : 0
  }, [idx, mdScreen])

  const openPost = () => {
    setPostId(post.id)
  }

  useEffect(() => console.log('post #', idx, { title: post.title }))

  return (
    <div className={`flex my-3 bg-white ${itemGridClassnames[idx % 6]}`}>
      <img
        src={post.imageUrl}
        className={`w-1/2 ${flexOrder === 1 ? 'order-1' : ''}`}
        alt="post-img"
      />
      <div className="pt-1 pl-1 relative flex flex-col">
        <p className="mx-1">{sanitize(post.author)}</p>
        <h2 className="my-auto lg:my-6 mx-1">{sanitize(post.title)}</h2>
        <p className="hidden lg:block lg:m-2 text-ellipsis">
          {sanitize(getHeadline(post.article, headlineSize))}
        </p>
        <button
          className="text-base absolute bottom-3 right-3"
          onClick={openPost}
        >
          {'>>'}
        </button>
      </div>
    </div>
  )
}
