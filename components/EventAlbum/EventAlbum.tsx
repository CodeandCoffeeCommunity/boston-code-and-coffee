import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ 
    subsets: ['latin'],
    weight: ['700'],
})


const parseDate = (dateString:String) => {
    
  let monthNames : String[] = ["", "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let day = dateString.split("-")[2];
  let month = monthNames[parseInt(dateString.split("-")[1])];
  let year = dateString.split("-")[0];

  return {month, day, year};

}

/*
This photo album component is designed specifically for the Previous events section 
Parameters- 
images : An array of objects containing image links and overlay text 
 */

export default function EventAlbum({ pastEvents }: any) {
  
  return (
    <div className="container flex flex-wrap">
      {
        pastEvents.map((meetupEvent: any) => {

        let date = parseDate(meetupEvent.dateTime.split("T")[0]);                   
        
        return (
          <Link key={meetupEvent.id} href='/pastEvents/[eventId]/photoAlbum' as={`/pastEvents/${meetupEvent.id}/photoAlbum?photoCount=${meetupEvent.photoAlbum?.photoCount}`} className="flex w-1/2 px-4 pb-8 flex-wrap">          
            <div className="relative text-center">
              
              <img
                src={`${meetupEvent.image?.baseUrl}${meetupEvent.image?.id}/676x380.jpg`}
                className="block rounded-xl object-center object-cover w-full h-full aspect-square"
                alt=""
              />

              <h1 className={`absolute text-2xl text-white w-full top-1/2 -translate-y-1/2 ${inter.className}`}>
                {`${date.month} ${date.day}, ${date.year}`}
              </h1>              

            </div>        
          </Link>
        );
      })}
    </div>
  );
}
