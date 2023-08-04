const GroupUpcomingEventsFragment = `
  fragment GroupUpcomingEventsFragment on Group {
    upcomingEvents (input: { first: 10 }) {
      edges { 
        node {
          id
          title
          dateTime
          description
          going
          eventUrl
          imageUrl
          
          group {
            id
            name
            city
            state
            urlname
          }
        }
      } 
    } 
  }
`;

export default GroupUpcomingEventsFragment;