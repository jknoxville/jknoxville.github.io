import readingTime from 'reading-time'

type Post = {
  title: string
  file: string
  rawContent: () => string
}

export default function getPostData(post: Post): { slug: string|null|undefined; readingTime: string } {
  return {
    slug: post.file.split('/').pop()?.split('.').shift(),
    readingTime: readingTime(post.rawContent()).text,
  }
}
