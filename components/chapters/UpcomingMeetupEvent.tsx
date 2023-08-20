import Image from 'next/image';
import { HiOutlineUsers } from 'react-icons/hi';

import Button from '@/components/shared/Button';
import { getChapterIcon } from '@/app/service/settings/SettingsService';
import { MeetupEvent } from '@/app/types/domain/MeetupEvent';
import { getLocaleTime, getMonthAbbreviation, getMonthDay, getMonthName, getWeekDay } from '@/app/util/DateTime';

export default async function UpcomingMeetupEvent({ meetupEvent } : { meetupEvent: MeetupEvent }) {
  const chapterIcon = new Buffer(await getChapterIcon(meetupEvent.group?.urlname!)).toString('base64');
  const truncatedDescription = meetupEvent.description!
    // max 240 characters
    .substring(0, 240)
    // without url links
    .replace(/(?:https?):\/\/[\n\S]+/g, '');
  
  return (
    <div className='border-b border-gray-400 p-4 flex flex-row justify-between gap-x-1'>
      <div className='flex items-start flex-col items-center'>
        <div className='flex flex-col items-center mb-4'>
          <p className='font-bold'>{getMonthDay(meetupEvent.dateTime)}</p>
          <p>{getMonthAbbreviation(meetupEvent.dateTime)}</p>
        </div>
        <Image src={`data:image/png;base64,${chapterIcon}`} alt={meetupEvent.group?.name!} width={50} height={50}/>
      </div>
      <div className='flex-1 flex-col'>
        <p className='text-sm text-gray-600'>
          {`${getWeekDay(meetupEvent.dateTime)}, ${getMonthName(meetupEvent.dateTime)} ${getMonthDay(meetupEvent.dateTime)} at ${getLocaleTime(meetupEvent.dateTime)}`}
        </p>
        <h4 className='font-bold tracking-tight text-gray-900 sm:text-2xl pt-2 pb-2'>
          {meetupEvent.title}
        </h4>
        <p className='line-clamp-3 text-gray-700'>
          {truncatedDescription}
        </p>
      </div>
      <div className='flex flex-col items-end'>
        {/* eslint-disable-next-line */}
        <img className='w-[100px] w-100' src={meetupEvent.imageUrl!} alt={meetupEvent.group?.name!} width={50} height={50}/>
        <p className='text-sm'>{`${meetupEvent.group?.city}, ${meetupEvent.group?.state}`}</p>
        <div className='flex flex-row'>
          <HiOutlineUsers size={20} />
          <p><span className='font-bold'>{`${meetupEvent.going} `}</span>{` attendees`}</p>
        </div>
        <Button size='small' title='RSVP' link={meetupEvent.eventUrl!} color='bg-purple-300'/>
      </div>
    </div>
  );
}