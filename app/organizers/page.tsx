import "@/app/globals.css";
import Wrapper from "@/components/layout/wrapper";

const team = [
  {
    name: "Daniel Kapper",
    role: "Co-Organizer",
    imageUrl:
      "https://res.cloudinary.com/danielkapper-com/image/upload/v1584983915/49256474_10218714097030554_1619941130089005056_o.jpg_szwvwp.jpg",
  },
];

export default function Organizers() {
  return (

    <Wrapper title="Team" description="Describe what this is about.">

          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {team.map(({name, imageUrl, role}) => (
              <li key={name}>
                <img
                  className="mx-auto h-24 w-24 rounded-full"
                  src={imageUrl}
                  alt=""
                />
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
