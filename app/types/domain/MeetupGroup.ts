import { MeetupEvent } from './MeetupEvent';

export type MeetupGroup = {
  id: string;
  name?: string;
  city?: string;
  state?: string;
  urlname?: string;

  pastEvents: MeetupEvent[] | null;
  upcomingEvents: MeetupEvent[] | null;
};