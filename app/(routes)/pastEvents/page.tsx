import { getGroupPastEvents } from '@/app/service/meetup/MeetupService';
import { MeetupEvent } from '@/app/types/domain/MeetupEvent';
import Wrapper from '@/components/layout/Wrapper';
import Link from 'next/link';

const removeWithoutPhotos = (event: MeetupEvent) => event.photoAlbum !== null;

export default async function PastEvents() {
  let pastEvents: MeetupEvent[] = await getGroupPastEvents('boston-code-and-coffee');
  // most recent first
  pastEvents.sort((eventA, eventB) => new Date(eventB.dateTime).getTime() - new Date(eventA.dateTime).getTime());
  // remove without events without photos
  pastEvents = pastEvents.filter(removeWithoutPhotos);

  return (
    <Wrapper description='Check out our Previous Events.'>
      <dl className='mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4'>
        {pastEvents.map((meetupEvent) => (
          <Link
            key={meetupEvent.id}
            href='/pastEvents/[eventId]/photoAlbum'
            as={`/pastEvents/${meetupEvent.id}/photoAlbum?photoCount=${meetupEvent.photoAlbum?.photoCount}`}
            >
          <div key={meetupEvent.id} className='flex flex-col bg-gray-400/5 p-8'>
            <dt className='text-sm font-semibold leading-6 text-gray-600'>{meetupEvent.title}</dt>
            <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900'>{meetupEvent.dateTime}</dd>
          </div>
          </Link>
        ))}
      </dl>
    </Wrapper>
  )
}
