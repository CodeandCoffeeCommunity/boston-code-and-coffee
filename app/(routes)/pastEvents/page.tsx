import { getGroupPastEvents } from '@/app/service/meetup/MeetupService';
import { MeetupEvent } from '@/app/types/domain/MeetupEvent';
import EventAlbum from '@/components/EventAlbum/EventAlbum';
import Wrapper from '@/components/layout/Wrapper';
import { Inter } from 'next/font/google'

const removeWithoutPhotos = (event: MeetupEvent) => event.photoAlbum !== null;

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['700'],
})


export default async function PastEvents() {
  let pastEvents: MeetupEvent[] = await getGroupPastEvents('boston-code-and-coffee');
  // most recent first
  pastEvents.sort((eventA, eventB) => new Date(eventB.dateTime).getTime() - new Date(eventA.dateTime).getTime());
  // remove without events without photos
  pastEvents = pastEvents.filter(removeWithoutPhotos);
  return (
    <Wrapper>      
      <h2 className={`text-2xl pb-8 ${inter.className}`}>Check out our Previous Events</h2>
      <EventAlbum pastEvents={pastEvents}/>
    </Wrapper>
  )
}
