import Link from 'next/link'
import { Author } from '@tryghost/content-api';
import { Card } from 'primereact/card';

import { BlogAuthor } from './BlogAuthor'

interface BlogCardProps {
  path?: string
  slug: string
  feature_image?: string | undefined | null
  title?: string | undefined
  published_at?: string | undefined | null
  authors?: Author[] | undefined
  reading_time?: number
}

export const BlogCard = ({
  path = 'blog',
  slug,
  feature_image,
  title,
  published_at,
  authors,
  reading_time
} : BlogCardProps) => {
  const header = (
    feature_image && <img className='border-b' alt={title} src={feature_image} />
  );

  const footer = (
    <BlogAuthor
      name={authors && authors[0].name}
      profile_image={authors && authors[0].profile_image}
      published_at={published_at}
      reading_time={reading_time}
    />
  );

  return (
    <>
      <Link passHref as={`/${path}/${slug}`} href={`/${path}/[slug]`}>
        <a>
          <Card
            className='rounded-md overflow-hidden shadow hover:(shadow-2xl)'
            title={title}
            header={header}
            footer={footer}
          />
        </a>
      </Link>
      <style jsx global>{`
        .p-card .p-card-title {
          padding: 1rem;
          line-height: 1.2;
          font-size: 20px;
          margin-bottom: 0;
        }
      `}</style>
    </>
  )
}

  // <Card
  //   header={feature_image ? <Image src={feature_image} /> : undefined}
  //   headerConfig={{ pad: 'none' }}
  //   footer={
  //     <Link passHref as={`/blog/${slug}`} href='/blog/[slug]'>
  //       <Anchor
  //         alignSelf='end'
  //         label={<Text size='small' color='brand'>{moreText}</Text>}
  //         icon={<Next color='brand' size='small' />}
  //         reverse
  //       />
  //     </Link>
  //   }
  //   footerConfig={{ justify: 'end' }}
  //   round='medium'
  //   overflow='hidden'
  // >
  //   <Box pad='small' gap='small' flex='grow'>
  //     <Link passHref as={`/blog/${slug}`} href='/blog/[slug]'>
  //       <Anchor>
  //         <Title margin='none' alignSelf='start' level='4'>{title}</Title>
  //       </Anchor>
  //     </Link>
  //     {custom_excerpt &&
  //       <Description textAlign='start' size='small'>{custom_excerpt}</Description>}
  //     {authors && Array.isArray(authors) &&
  //       <BlogAuthor
  //         slug={authors[0].slug}
  //         profile_image={authors[0].profile_image}
  //         published_at={published_at}
  //         name={authors[0].name}
  //         time={reading_time}
  //       />}
  //   </Box>
  // </Card>
