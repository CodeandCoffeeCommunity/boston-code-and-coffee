import "@/app/globals.css";
import Wrapper from "@/components/layout/Wrapper";

const team = [
  {
    name: <a href="https://www.linkedin.com/in/kapper/">Daniel Kapper</a>,
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
    name: <a href="https://www.linkedin.com/in/antonxdev/">Anton Shelkovnikov</a>,
    role: "Co-Organizer",
    // teamLead: 'Team Lead:',
    team: 'Volunteer Onboarding',
    imageUrl:
      "https://media.licdn.com/dms/image/C4E03AQHKGkWJ9knk4A/profile-displayphoto-shrink_400_400/0/1652227805550?e=1694044800&v=beta&t=FxfNvYBDkdkeTIl2SlBYJK4UWvhcY3GWBrzxbA64hsE"
  },
  {
    name: <a href="https://www.linkedin.com/in/alexpereira7/">Alex Pereira</a>,
    role: "Volunteer",
    // teamLead: 'Team Lead:',
    team: 'Website',
    imageUrl:
      "https://media.licdn.com/dms/image/C4D03AQEQyicXIvVy7A/profile-displayphoto-shrink_200_200/0/1598730872972?e=1695254400&v=beta&t=ahPUkwrpSxlZJVKnDH-zfXAN_ckCHuIMrGDq9dPlD5Y"
  },
  {
    name: <a href="https://www.linkedin.com/in/cedric-jean-philippe/">Cedric Jean-Philippe</a>,
    role: "Volunteer",
    // teamLead: 'Team Lead:',
    team: 'Website',
    imageUrl:
      "https://media.discordapp.net/attachments/1129423864502427748/1137149639762657321/IMG_8182.jpg"
  },
  {
    name: <a href="https://www.linkedin.com/in/david-venegas-m/">David Venegas</a>,
    role: "Volunteer",
    // teamLead: 'Team Lead:',
    team: '',
    imageUrl:
      "https://media.licdn.com/dms/image/D4E03AQFads4XHD4SUw/profile-displayphoto-shrink_200_200/0/1688920899517?e=1695254400&v=beta&t=uzUkKWBZnDz1f86sIkYN_9VRAXaXWP4gHTyV1miJKNU"
  },
  {
    name: <a href="https://www.linkedin.com/in/parthasarathydhruv/">Dhruv Parthasarathy</a>,
    role: "Volunteer",
    // teamLead: 'Team Lead:',
    team: '',
    imageUrl:
      "https://media.licdn.com/dms/image/C5603AQEotDJSBtAHjw/profile-displayphoto-shrink_200_200/0/1599589394348?e=1695254400&v=beta&t=RDeglWmH9uNW72xR1JgZyoaSHAF5OhJ_qsRFGteeZOQ"
  },
  {
    name: <a href="https://www.linkedin.com/in/hitomiabiko/">Hitomi Abiko</a>,
    role: "Volunteer",
    // teamLead: 'Team Lead:',
    team: '',
    imageUrl:
      "https://media.licdn.com/dms/image/D4E03AQHQ9HHXm8xKXQ/profile-displayphoto-shrink_200_200/0/1687606492253?e=1695254400&v=beta&t=RS2kaDkP2IU2gHdZfKLHhWlqrhj7RhMbc9DKBf3AK-M"
  },
  {
    name: <a href="https://www.linkedin.com/in/jarrodkohl/">Jarrod Kohl</a>,
    role: "Volunteer",
    // teamLead: 'Team Lead:',
    team: 'Features',
    imageUrl:
      "https://media.licdn.com/dms/image/D4E03AQHQ8rT5p0b8hQ/profile-displayphoto-shrink_200_200/0/1687527128902?e=1695254400&v=beta&t=2m2jtGGibeFC64K2HGRLp98QZYm8q7iWrooMPZSz69U"
  },
  {
    name: <a href="https://www.linkedin.com/in/jingyinghuang/">Jingying Huang</a>,
    role: "Volunteer",
    // teamLead: 'Team Lead:',
    team: 'Social Media',
    imageUrl:
      "https://media.licdn.com/dms/image/C4E03AQFuDEdSgOJPBw/profile-displayphoto-shrink_200_200/0/1571248783675?e=1695254400&v=beta&t=n2dFY1bI2U2iGFcItLaB3C8-4YcaCNQJ9X1ttYNoHJA"
  },
  {
    name: <a href="https://www.linkedin.com/in/nicole-lyu/">Nicole Lyu</a>,
    role: "Volunteer",
    // teamLead: 'Team Lead:',
    team: 'Social Media',
    imageUrl:
      "https://media.licdn.com/dms/image/C4E03AQG7_VeBySraNQ/profile-displayphoto-shrink_200_200/0/1661273766047?e=1695254400&v=beta&t=udWGSp3_7cOzvYqcelI1-yOPAom2MaO-20B591E9qeI"
  },

  {
    name: <a href="https://www.linkedin.com/in/sergio-terrero-34045a11b/">Sergio Terrero</a>,
    role: "Volunteer",
    // teamLead: 'Team Lead:',
    team: '',
    imageUrl:
      "https://media.licdn.com/dms/image/D4E03AQH2PwcKtDoGAg/profile-displayphoto-shrink_200_200/0/1670726619198?e=1695254400&v=beta&t=pbrUCiZcFNtqf6pavxPvcCiYmAezxWbYABuOCnTrymQ"
  },
  {
    name: <a href="https://www.linkedin.com/in/shirly-spikes-725a413b/">Shirly Spikes</a>,
    role: "Volunteer",
    // teamLead: 'Team Lead:',
    team: 'Features',
    imageUrl:
      "https://media.licdn.com/dms/image/C4D03AQF3qK7KUlfxHQ/profile-displayphoto-shrink_200_200/0/1609945840249?e=1695254400&v=beta&t=0WlFasb-0atWKFhlY4_XqyYP2W7CE1zAuE7z0WnK2h0"
  },
  {
    name: <a href="https://www.linkedin.com/in/dutt-sai/">Sai Dutt</a>,
    role: "Volunteer",
    // teamLead: 'Team Lead:',
    team: '',
    imageUrl:
      "https://media.discordapp.net/attachments/1130964544706056303/1133814348565975050/PXL_20230101_190254075_2.jpg?width=756&height=920"
  },
  {
    name: <a href="https://www.linkedin.com/in/seancdaly/">Sean Daly</a>,
    role: "Volunteer",
    // teamLead: 'Team Lead:',
    team: '',
    imageUrl:
      "https://media.licdn.com/dms/image/D5603AQEo8O0zmNabkA/profile-displayphoto-shrink_200_200/0/1689400196234?e=1695254400&v=beta&t=CIQJ7UX5cwpPA0mMQ7WyzsQ3TMKzbZ00CVNX59I--Z8"
  },
  {
    name: <a href="https://www.linkedin.com/in/claudioolmedo-com/">Claudio Olmedo</a>,
    role: "Volunteer",
    // teamLead: 'Team Lead:',
    team: '',
    imageUrl:
      "https://media.licdn.com/dms/image/D4E03AQE6q5fDJj5zcA/profile-displayphoto-shrink_200_200/0/1685118707659?e=1695254400&v=beta&t=MTVN3lH51OFLr27bpGGep401OW3RffbA8vNeANqZGZY"
  },



];

export default function Organizers() {
  return (

    <Wrapper title="Team" description="Meet our Organizers!">
      <ul
        className="grid grid-cols-2 md:grid-cols-3 gap-2 justify-center flex-auto mt-10 text-center"
      >
        {team.map(({ name, imageUrl, team, role }) => (
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
            {/* <p className="text-sm leading-6 text-gray-600">{teamLead}</p> */}
            <p className="text-sm leading-6 text-gray-600">{team}</p>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
