import { MeetupGroup } from "./MeetupGroup";

type Image = {
  id: string;
  baseUrl: string;
}

type EventPhotoAlbum = {
  photoCount: number;
  photoSample: Image[];
}

export type MeetupEvent = {
  id: string;
  title: string;
  dateTime: string;

  description?: string;
  going?: number;
  eventUrl?: string;
  imageUrl?: string;
  
  image?: Image | null;
  photoAlbum?: EventPhotoAlbum | null;
  group?: MeetupGroup;
};