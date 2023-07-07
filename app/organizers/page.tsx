import "@/app/globals.css";
import Wrapper from "@/components/layout/Wrapper";

const team = [
  {
    name: "Daniel Kapper",
    role: "Co-Organizer",
    imageUrl:
      "https://res.cloudinary.com/danielkapper-com/image/upload/v1584983915/49256474_10218714097030554_1619941130089005056_o.jpg_szwvwp.jpg",
  },
  {
    name: "Brian Towne",
    role: "Co-Organizer",
    imageUrl:
    "https://media.licdn.com/dms/image/C5603AQF4XNgseUCHyQ/profile-displayphoto-shrink_400_400/0/1655003018441?e=1694044800&v=beta&t=PCruuX2t6f9IkQ92e_z-OdSDIR2Qpf5WOuM7eOQ7KbM"
  },
  {
    name: "Anton Shelkovnikov",
    role: "Co-Organizer",
    imageUrl:
    "https://media.licdn.com/dms/image/C4E03AQHKGkWJ9knk4A/profile-displayphoto-shrink_400_400/0/1652227805550?e=1694044800&v=beta&t=FxfNvYBDkdkeTIl2SlBYJK4UWvhcY3GWBrzxbA64hsE"
  },
];

export default function Organizers() {
  return (

    <Wrapper title="Team" description="Describe what this is about.">
          <ul
            className="flex flex-wrap justify-center flex-auto mt-10 text-center"
          >
            {team.map(({name, imageUrl, role}) => (
              <li key={name} className="m-4">
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
