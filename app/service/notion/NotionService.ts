import { Client } from "@notionhq/client";

import { configuration } from "@/app/constants/Configuration";
import PLACEHOLDER_IMAGE from '@/assets/images/placeholder-avatar.png';
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: configuration.NOTION_API_KEY });
const databaseId = configuration.NOTION_API_DATABASE;

// this function fetches data from The Notion Database(Table). 
const fetchDataFromNotion = async () => {
    let response: QueryDatabaseResponse;
    try {
        response = await notion.databases.query({ database_id: databaseId! });
    } catch (error) {
        return [];
    }

    // we map through the array of object to pull out the properties that we need for rendering.
    const teamResults = response.results.map((page: any) => {
        return {
            id: page.id,
            name: page.properties.Name.title[0]?.plain_text,
            role: page.properties.Role.multi_select.map((role: any) => role.name).toString(),
            // team: page.properties.Teams.rich_text[0]?.plain_text,
            imageUrl: page.properties.Image.files[0]?.file.url || PLACEHOLDER_IMAGE.src,
            linkedInUrl: page.properties.LinkedIn.rich_text[0]?.plain_text,
            notionId: page.properties.NotionId.rich_text[0]?.plain_text
        };
    });

    //this function sorts the array by NotionId property that we set in the Notion table
    teamResults.sort((a, b) => {
        return parseInt(a.notionId) - parseInt(b.notionId);
    });
    return teamResults;
};

export default fetchDataFromNotion;