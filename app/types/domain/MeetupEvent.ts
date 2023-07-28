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
  
  image?: Image | null;
  photoAlbum?: EventPhotoAlbum | null;
};