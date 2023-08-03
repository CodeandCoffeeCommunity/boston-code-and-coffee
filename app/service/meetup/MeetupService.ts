
import { RequestOptions, request } from '@/app/util/RequestUtil';
import { configuration } from '@/app/constants/Configuration';
import { MeetupEvent } from '@/app/types/domain/MeetupEvent';

import GroupPastEventsFragment from './graphql/fragments/GroupPastEventsFragment';
import EventPhotoAlbumFragment from './graphql/fragments/EventPhotoAlbumFragment';
import GroupUpcomingEventsFragment from './graphql/fragments/GroupUpcomingEventsFragment';

const requestOptions: RequestOptions = {
  url: `${configuration.MEETUP_API_BASE_URL}/gql`,
  headers: { 'Content-Type': 'application/json' },
  name: 'Meetup Event',
  method: 'POST'
}

/**
 * Get list of past Meetup events by group name
 * 
 * @param groupUrlName the Meetup group url name (e.g. boston-code-and-coffee)
 * @returns list of past Meetup events
 */
export const getGroupPastEvents = async (groupUrlName: string): Promise<MeetupEvent[]> => {
  const query = `
    query {
      groupPastEvents: groupByUrlname(urlname: "${groupUrlName}") {
        ...GroupPastEventsFragment
      }
    }
    ${GroupPastEventsFragment}
  `;

  type GroupPastEventsQueryResponse = {
    data: Record<string,
      {
        id: number;
        pastEvents: {
          edges: Array<{ node: MeetupEvent }>;
        };
      } | null
    >;
  };

  let response: GroupPastEventsQueryResponse;
  try {
    response = await request<GroupPastEventsQueryResponse>({
      ...requestOptions,
      body: { query }
    }) as GroupPastEventsQueryResponse;
  } catch (error) {
    return [];
  }

  const result: MeetupEvent[] = [];
  if (response.data.groupPastEvents?.pastEvents.edges) {
    for (const event of response.data.groupPastEvents.pastEvents.edges) {
      result.push(event.node);
    }
  }

  return result;
}

/**
 * Get Meetup Event with photoAlbum
 * 
 * @param eventId the Meetup Event ID
 * @param photoCount the count of photos to query
 * @returns Meetup Event with photoAlbum
 */
export const getEventPhotoAlbum = async (eventId: string, photoCount: number): Promise<MeetupEvent | null> => {
  const query = `
      query ($eventId: ID, $photoCount: Int!) {
        eventPhotoAlbum: event(id: $eventId) {
          ...EventPhotoAlbumFragment
        }
      }
    ${EventPhotoAlbumFragment}
  `;
  const variables = {
    eventId,
    photoCount
  }

  type GroupPastEventsQueryResponse = {
    data: Record<string,
      {
        id: string;
        title: string;
        dateTime: string;
        photoAlbum: {
          photoSample: {
            id: string;
            baseUrl: string;
          }[]
        }
      } | null
    >;
  };

  let response: GroupPastEventsQueryResponse;
  try {
    response = await request<GroupPastEventsQueryResponse>({
      ...requestOptions,
      body: { query, variables }
    }) as GroupPastEventsQueryResponse;
  } catch (error) {
    return null;
  }

  return response.data.eventPhotoAlbum as MeetupEvent;
}

/**
 * Get list of upcoming Meetup events by group name
 * 
 * @param groupUrlNames the list of Meetup group url names (e.g. ['boston-code-and-coffee', 'new-york-code-coffee'])
 * @returns list of upcoming Meetup events for the given Meetup group names
 */
export const getGroupsUpcomingEvents = async (groupUrlNames: string[]): Promise<MeetupEvent[]> => {
  let query = 'query {';
  for (const i in groupUrlNames) {
    query += `
      result${i}:groupByUrlname(urlname: "${groupUrlNames[i]}") { 
        ...GroupUpcomingEventsFragment
      }`;
  }
  query += '} ' + GroupUpcomingEventsFragment;

  type GroupUpcomingEventsQueryResponse = {
    data: Record<string,
      {
        id: number;
        upcomingEvents: {
          edges: Array<{ node: MeetupEvent }>;
        };
      } | null
    >;
  };

  let response: GroupUpcomingEventsQueryResponse;
  try {
    response = await request<GroupUpcomingEventsQueryResponse>({
      ...requestOptions,
      body: { query }
    }) as GroupUpcomingEventsQueryResponse;
  } catch (error) {
    return [];
  }

  const result: MeetupEvent[] = [];
  for (const group of Object.values(response.data)) {
    if (group) {
      for (const event of group.upcomingEvents.edges) {
        result.push(event.node);
      }
    }
  }

  return result;
}