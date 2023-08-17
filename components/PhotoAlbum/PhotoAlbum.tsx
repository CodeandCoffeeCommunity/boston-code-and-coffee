import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ 
    subsets: ['latin'],
    weight: ['700'],
})

/*
This photo album component is designed specifically for the Previous events section 
Parameters- 
images : An array of objects containing image links and overlay text 
 */
export default function PhotoAlbum({ pastEvents }: any) {
  
  let date: Date = new Date();
  let monthNames : String[] = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return (
    <div className="container flex flex-wrap">
      {pastEvents.map((meetupEvent: any) => {
        date = new Date(meetupEvent.dateTime.split("T")[0]);
        console.log("Date", meetupEvent.dateTime.split("T")[0]);
        return (
          <Link key={meetupEvent.id} href='/pastEvents/[eventId]/photoAlbum' as={`/pastEvents/${meetupEvent.id}/photoAlbum?photoCount=${meetupEvent.photoAlbum?.photoCount}`} className="flex w-1/2 px-4 pb-8 flex-wrap">          
            <div className="relative text-center">
              <img
                src={`${meetupEvent.image?.baseUrl}${meetupEvent.image?.id}/676x380.jpg`}
                className="block rounded-xl object-center object-cover w-full h-full aspect-square"
                alt=""
              />
              <h1 className={`absolute text-2xl text-white w-full top-1/2 -translate-y-1/2 ${inter.className}`}>{`${monthNames[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`}</h1>              
            </div>        
          </Link>
        );
      })}
    </div>
  );
}
