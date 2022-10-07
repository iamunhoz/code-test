import { PostPayload } from 'types'
import { getHeadline } from 'utils'
import { useAppStore } from 'state'

// o padrão grid se repete a cada 6 posts
const itemGridClassnames = [
  'row-span-1 col-span-3',
  'row-span-1 col-span-3',
  'row-span-2 col-span-4 col-start-3',
  'row-span-1 col-span-3',
  'row-span-1 col-span-3',
  'row-span-2 col-span-4'
]

type HeadlineCardProps = {
  post: PostPayload
  idx: number
}
export default function HeadlineCard(props: HeadlineCardProps) {
  const { post, idx } = props

  const { setPostId } = useAppStore((state) => state)

  const openPost = () => {
    setPostId(post.id)
  }

  return (
    <div
      className={`flex bg-white relative ${itemGridClassnames[idx % 6]}`}
      style={{
        height: idx % 3 === 2 ? 640 : 320
      }}
    >
      <img
        src={post.imageUrl}
        alt="post-img"
        style={{
          width: idx % 3 === 2 ? 640 : 320,
          height: 'auto',
          order: [3, 4].includes(idx % 6) ? 1 : 0
        }}
      />
      <div className="p-9 pr-20">
        <p>{post.author}</p>
        <h2 className="my-3">{post.title}</h2>
        <p>{getHeadline(post.article)}</p>
      </div>

      <button className="text-3xl absolute bottom-3 right-3" onClick={openPost}>
        {'>>'}
      </button>
    </div>
  )
}
