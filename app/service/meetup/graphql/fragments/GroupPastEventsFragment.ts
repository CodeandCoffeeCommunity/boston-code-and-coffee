const GroupPastEventsFragment = `
  fragment GroupPastEventsFragment on Group {
    id
    pastEvents (input: { first: 100 }) {
      edges { 
        node { 
          id
          title
          dateTime
          
          image {
            id
            baseUrl
          }
          photoAlbum {
            photoCount
          }
        } 
      } 
    } 
  }
`;

export default GroupPastEventsFragment;