import Wrapper from '@/components/layout/Wrapper';
import { getEventPhotoAlbum } from '@/app/service/meetup/MeetupService';
import { Inter } from 'next/font/google'
import Gallery from '@/components/Gallery/Gallery';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['700'],
})

const parseDate = (dateString:String | undefined) => {
  
  if (dateString === undefined) {
    return {};
  }
  let monthNames : String[] = ["", "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let day = dateString.split("-")[2];
  let month = monthNames[parseInt(dateString.split("-")[1])];
  let year = dateString.split("-")[0];

  return {month, day, year};

}

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
        <h1 className={` ${inter.className} text-xl pb-1`}> {`${date?.month} ${date?.day}, ${date?.year}`} </h1>
        <p className='pb-8 text-base'>{eventPhotoAlbum?.title}</p>      
      <Gallery photoAlbum={eventPhotoAlbum?.photoAlbum}/>
    </Wrapper>
  )
}
