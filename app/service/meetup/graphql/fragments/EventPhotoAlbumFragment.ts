const EventPhotoAlbumFragment = `
  fragment EventPhotoAlbumFragment on Event {
    id
    title
    dateTime
    photoAlbum {
      photoSample(amount: $photoCount) {
        id
        baseUrl
      }
    }
  }
`;

export default EventPhotoAlbumFragment;