import { NextPageContext } from 'next';

import Wrapper from '@/components/layout/Wrapper';
import { getEventPhotoAlbum } from '@/app/service/meetup/MeetupService';

export default async function PastEvents(context: NextPageContext) {
  const { params, searchParams } = context;
  const eventId: string | null = params.eventId || null;
  const photoCount: string | null = searchParams.photoCount || null;

  if (eventId === null || photoCount === null) {
    return null;
  }

  const eventPhotoAlbum = await getEventPhotoAlbum(eventId, parseInt(photoCount));

  return (
    <Wrapper description='Check out our Previous Events.'>
      {eventId}
      <dl className='mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4'>
        {JSON.stringify(eventPhotoAlbum)}
      </dl>
    </Wrapper>
  )
}
