import { Container } from 'components/elements'

import { postsReadSelector } from './state'
import { useAsyncRecoilValue } from './hooks'

interface PostPageProps {
  className?: string
  slug: string
}

const Post = ({ title, html } : { title: string, html: string }) =>
  <>
    <h2 className="mb-4 text-3xl font-bold text-center sm:leading-none lg:text-4xl xl:text-5xl">
      {title}
    </h2>
    <div dangerouslySetInnerHTML={{ __html: html}} />
  </>

export const PostPage = ({ className, slug } : PostPageProps) => {
  const { loading, error, value: post } = useAsyncRecoilValue(postsReadSelector, [slug])

  return (
    <Container className={className}>
      {loading && <div>Loading...</div>}

      {!loading && <Post title={post.title} html={post.html} />}
    </Container>
  )
}
