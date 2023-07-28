import { MeetupEvent } from './MeetupEvent';

export type MeetupGroup = {
  id: string;
  pastEvents: MeetupEvent[] | null;
};