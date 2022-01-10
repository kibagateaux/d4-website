/* eslint-disable camelcase */
import { format } from 'date-fns'
import { Avatar } from 'primereact/avatar';

interface BlogAuthorProps {
  profile_image: string | undefined | null
  published_at?: string | undefined | null
  name: string | undefined
  reading_time?: number
}

export const BlogAuthor = ({ profile_image, published_at, name, reading_time } : BlogAuthorProps) =>
  <div className='flex p-4 pt-1 gap-2'>
    {profile_image && <Avatar image={profile_image} size="large" shape="circle" />}
    <div className=''>
      { name && <div className='font-bold'>{name.toUpperCase()}</div>}
      <div className='flex'>
        {published_at &&
          <div className=''>{format(new Date(published_at), 'd MMM yyyy').toLowerCase()}</div>}
        {reading_time &&
          <div>
            &nbsp;- {reading_time} min read
          </div>}
      </div>
    </div>
  </div>
