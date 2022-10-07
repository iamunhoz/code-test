import { useAppStore } from 'state'
import { articleParser, getLocaleDate } from 'utils'

export default function Post() {
  const { postId, posts } = useAppStore((state) => state)

  const selectedPost = posts.find((post) => post.id === postId)

  if (!selectedPost) return null

  return (
    <div className="bg-white w-4/6 mx-auto mt-12 flex flex-col">
      <div className="flex h-1/3">
        <img src={selectedPost.imageUrl} />
        <div className="flex flex-col justify-between h-3/4">
          <p>{getLocaleDate(selectedPost.date)}</p>
          <p>{selectedPost.author}</p>
          <h2>{selectedPost.title}</h2>
        </div>
      </div>
      <div>
        {articleParser(selectedPost.article).map((paragraph) => (
          <p key={paragraph.slice(0, 10)}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}
