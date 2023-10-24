import "@/app/globals.css";
import Wrapper from "@/components/layout/Wrapper";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// this function fetches data from The Notion Database(Table). 
const fetchDataFromNotion = async () => {
  const databaseId = process.env.NOTION_API_DATABASE;
  const response = await notion.databases.query({ database_id: databaseId });

  // we map through the array of object to pull out the properties that we need for rendering.
  const teamResults = response.results.map((page) => {
    return {
      id: page.id,
      name: page.properties.Name.title[0]?.plain_text,
      role: page.properties.Role.multi_select[0].name,
      // team: page.properties.Teams.rich_text[0]?.plain_text,
      imageUrl: page.properties.Image.files[0]?.file.url,
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


export default async function Organizers() {
  const teamMembers = await fetchDataFromNotion()
  return (

    <Wrapper title="Team" description="Meet our Organizers!">
      <ul
        className="grid grid-cols-2 md:grid-cols-3 gap-2 justify-center flex-auto mt-10 text-center"
      >
        {teamMembers.map(({ name, imageUrl, team, role, linkedInUrl }) => (
          <li key={name} className="m-4">
            <a href={linkedInUrl}>
              <img
                className="mx-auto h-24 w-24 rounded-full"
                src={imageUrl}
                alt={name}
              />
            </a>
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
              {name}
            </h3>
            <p className="text-sm leading-6 text-gray-600">{role}</p>
            <p className="text-sm leading-6 text-gray-600">{team}</p>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

