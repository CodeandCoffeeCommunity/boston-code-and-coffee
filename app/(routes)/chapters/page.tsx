import Wrapper from '@/components/layout/Wrapper';
import { getCodeCoffeeChapters } from '@/app/service/settings/SettingsService';
import { getGroupsUpcomingEvents } from '@/app/service/meetup/MeetupService';
import UpcomingMeetupEvent from '@/components/chapters/UpcomingMeetupEvent';

export default async function Chapters() {
  const codeCoffeeChapters = await getCodeCoffeeChapters();
  const meetupGroupNames = codeCoffeeChapters.map(ccc => ccc.meetupGroupUrlName);
  const meetupGroupsUpcomingEvents = await getGroupsUpcomingEvents(meetupGroupNames);

  return (
    <Wrapper title='Code & Coffee Chapters' description='Upcoming Events'>
      <div className='mb-4' />
      {meetupGroupsUpcomingEvents.map(meetupGroupsUpcomingEvent => (
        // @ts-expect-error Server Component
        <UpcomingMeetupEvent key={meetupGroupsUpcomingEvent.id} meetupEvent={meetupGroupsUpcomingEvent} />
      ))}
    </Wrapper>
  );
}
