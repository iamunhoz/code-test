import { useAppStore } from 'state'
import { articleParser, getLocaleDate, sanitize } from 'utils'

export default function Post() {
  const { postId, posts } = useAppStore((state) => state)

  const selectedPost = posts.find((post) => post.id === postId)

  if (!selectedPost) return null

  return (
    <div className="bg-white w-5/6 lg:w-4/6 mx-auto mt-12 lg:grid lg:grid-rows-12 lg:grid-cols-12">
      <img
        src={selectedPost.imageUrl}
        className="lg:row-span-6 lg:col-span-6"
      />
      <div className="flex flex-col justify-center gap-8 p-2 lg:row-span-6 lg:col-span-6 4k:row-span-3">
        <p>{getLocaleDate(sanitize(selectedPost.date))}</p>
        <p className="mt-3">{sanitize(selectedPost.author)}</p>
        <h2 className="text-2xl">{sanitize(selectedPost.title)}</h2>
      </div>
      <div className="p-2 lg:row-span-6 lg:col-span-12 4k:row-span-3 4k:col-span-6 lg:mx-24 my-12 4k:ml-0">
        {articleParser(selectedPost.article).map((paragraph) => (
          <p key={paragraph.slice(0, 10)}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}
