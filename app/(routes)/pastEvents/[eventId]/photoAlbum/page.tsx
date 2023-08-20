import Wrapper from '@/components/layout/Wrapper';
import { getEventPhotoAlbum } from '@/app/service/meetup/MeetupService';
import Gallery from '@/components/Gallery/Gallery';
import {parseDate} from '@/app/util/DateTime';

export default async function PastEvents(context: { params: any; searchParams: any; }) {
  
  const { params, searchParams } = context;
  const eventId: string | null = params.eventId || null;
  const photoCount: string | null = searchParams.photoCount || null;

  if (eventId === null || photoCount === null) {
    return null;
  }

  const eventPhotoAlbum = await getEventPhotoAlbum(eventId, parseInt(photoCount));
  const date = parseDate(eventPhotoAlbum?.dateTime.split("T")[0]);
  
  return (
    <Wrapper>            
        <h1 className={`font-bold text-xl pb-1`}> {`${date?.month} ${date?.day}, ${date?.year}`} </h1>
        <p className='pb-8 text-base'>{eventPhotoAlbum?.title}</p>      
      <Gallery photoAlbum={eventPhotoAlbum?.photoAlbum}/>
    </Wrapper>
  )
}
