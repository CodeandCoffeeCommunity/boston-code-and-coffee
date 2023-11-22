
import "@/app/globals.css";
import Wrapper from "@/components/layout/Wrapper";

//import the function that fetches data from Notion
import fetchDataFromNotion from "@/app/service/notion/NotionService"




export default async function Organizers() {
  const teamMembers = await fetchDataFromNotion()
  return (

    <Wrapper title="Team" description="Meet our Organizers!">
      <ul
        className="grid grid-cols-2 md:grid-cols-3 gap-2 justify-center flex-auto mt-10 text-center"
      >
        {teamMembers.map(({ name, imageUrl, role, linkedInUrl }) => (
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
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

