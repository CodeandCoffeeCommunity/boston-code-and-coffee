import Link from 'next/link';
import { parseDate } from '@/app/util/DateTime';
import { MeetupEvent } from '@/app/types/domain/MeetupEvent';
import { getEventPhotoAlbum } from '@/app/service/meetup/MeetupService';
/*
This photo album component is designed specifically for the Previous events section 
Parameters- 
images : An array of objects containing image links and overlay text 
 */



export default function EventAlbum({ pastEvents }: any) {  

  const  getCoverImage = async (meetupEvent: any) => {
    
    const stockImage = "https://secure-content.meetupstatic.com/images/classic-events/513011027/676x380.jpg";    
    const eventPhotoAlbum = await getEventPhotoAlbum(meetupEvent.id, parseInt(meetupEvent.photoAlbum?.photoCount));
    
    // If there is only one image, return a stock image
    if (meetupEvent.photoAlbum?.photoCount && meetupEvent.photoAlbum?.photoCount < 2) {

      return(
        <img
          src={stockImage}
          className="block rounded-xl object-center object-cover w-full h-full aspect-square"
          alt=""
        />
      );

    }    
        
    let coverImage = `${eventPhotoAlbum?.photoAlbum?.photoSample[0]?.baseUrl}${eventPhotoAlbum?.photoAlbum?.photoSample[0]?.id}` + '/676x380.jpg';
          
    if (meetupEvent.image?.id != eventPhotoAlbum?.photoAlbum?.photoSample[0]?.id) {
      
      return(

        <img
          src={coverImage}
          className="block rounded-xl object-center object-cover w-full h-full aspect-square"
          alt=""
        />
      )
    }

    // The first image is the album cover. Choosing the second image
    coverImage = `${eventPhotoAlbum?.photoAlbum?.photoSample[1]?.baseUrl}${eventPhotoAlbum?.photoAlbum?.photoSample[1]?.id}` + '/676x380.jpg';    
    return(
      <img
        src={coverImage}
        className="block rounded-xl object-center object-cover w-full h-full aspect-square"
        alt=""
      />
    )
  }

  return (
    <div className="container flex flex-wrap">
      {
        pastEvents.map((meetupEvent: any) => {

        let date = parseDate(meetupEvent.dateTime.split("T")[0]);                   
        
        return (
          <Link key={meetupEvent.id} 
          href='/pastEvents/[eventId]/photoAlbum' 
          as={`/pastEvents/${meetupEvent.id}/photoAlbum?photoCount=${meetupEvent.photoAlbum?.photoCount}`} 
          className="flex w-1/2 px-4 pb-8 flex-wrap">
            <div className="relative text-center">
              {              
                getCoverImage(meetupEvent)
              }
              <h1 className={`font-bold absolute drop-shadow-md text-2xl text-white w-full top-1/2 -translate-y-1/2`}>
                {`${date.month} ${date.day}, ${date.year}`}
              </h1>                            
              <h1 className={`font-bold absolute drop-shadow-md text-2xl text-white w-full top-1/2 translate-y-1/4`}>
                  {`${meetupEvent.photoAlbum?.photoCount}`} photo(s)
              </h1>
            </div>        
          </Link>
        );
      })}
    </div>
  );
}
