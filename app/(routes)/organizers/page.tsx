import "@/app/globals.css";
import Wrapper from "@/components/layout/Wrapper";

const team = [
  {
    name: "Brian Towne",
    role: "Lead Organizer",
    linkedinUrl: "https://www.linkedin.com/in/bjtowne/",
    // teamLead: 'Team Lead:',
    imageUrl:
      "https://media.licdn.com/dms/image/C5603AQF4XNgseUCHyQ/profile-displayphoto-shrink_800_800/0/1655003018852?e=1699488000&v=beta&t=EnLoh_sc-INR88zIc_QUr-7dFqdAb840JFaU1_WxBCE"
  },
  {
    name: "Anton Shelkovnikov",
    role: "Lead Organizer",
    linkedinUrl: "https://www.linkedin.com/in/antonxdev/",
    // teamLead: 'Team Lead:',
    team: 'Volunteer Onboarding',
    imageUrl:
      "https://media.licdn.com/dms/image/C4E03AQHKGkWJ9knk4A/profile-displayphoto-shrink_800_800/0/1652227806029?e=1699488000&v=beta&t=yAWRW-XZhid1AuA7XwFxWJ8E5BuczH0uzI_hpL7XLTw"
  },
  {
    name: "Cedric Jean-Philippe",
    role: "Lead Organizer",
    linkedinUrl: "https://www.linkedin.com/in/cedric-jean-philippe/",
    // teamLead: 'Team Lead:',
    team: 'Website',
    imageUrl:
      "https://media.discordapp.net/attachments/1129423864502427748/1137149639762657321/IMG_8182.jpg"
  },
  {
    name: "Alex Pereira",
    role: "Organizer",
    linkedinUrl: "https://www.linkedin.com/in/alexpereira7/",
    // teamLead: 'Team Lead:',
    team: 'Website',
    imageUrl:
      "https://media.licdn.com/dms/image/C4D03AQEQyicXIvVy7A/profile-displayphoto-shrink_200_200/0/1598730872972?e=1695254400&v=beta&t=ahPUkwrpSxlZJVKnDH-zfXAN_ckCHuIMrGDq9dPlD5Y"
  },
  {
    name: "Daniel Kapper",
    role: "Organizer",
    linkedinUrl: "https://www.linkedin.com/in/kapper/",
    // teamLead: 'Team Lead:',
    imageUrl:
      "https://res.cloudinary.com/danielkapper-com/image/upload/v1584983915/49256474_10218714097030554_1619941130089005056_o.jpg_szwvwp.jpg",
  },
  {
    name: "Dhruv Parthasarathy",
    role: "Organizer",
    linkedinUrl: "https://www.linkedin.com/in/parthasarathydhruv/",
    // teamLead: 'Team Lead:',
    team: '',
    imageUrl:
      "https://media.licdn.com/dms/image/C5603AQEotDJSBtAHjw/profile-displayphoto-shrink_200_200/0/1599589394348?e=1695254400&v=beta&t=RDeglWmH9uNW72xR1JgZyoaSHAF5OhJ_qsRFGteeZOQ"
  },
  {
    name: "Hitomi Abiko",
    role: "Organizer",
    linkedinUrl: "https://www.linkedin.com/in/hitomiabiko/",
    // teamLead: 'Team Lead:',
    team: '',
    imageUrl:
      "https://media.licdn.com/dms/image/D4E03AQHQ9HHXm8xKXQ/profile-displayphoto-shrink_200_200/0/1687606492253?e=1695254400&v=beta&t=RS2kaDkP2IU2gHdZfKLHhWlqrhj7RhMbc9DKBf3AK-M"
  },
  {
    name: "Jarrod Kohl",
    role: "Organizer",
    linkedinUrl: "https://www.linkedin.com/in/jarrodkohl/",
    // teamLead: 'Team Lead:',
    team: 'Features',
    imageUrl:
      "https://media.licdn.com/dms/image/D4E03AQHQ8rT5p0b8hQ/profile-displayphoto-shrink_200_200/0/1687527128902?e=1695254400&v=beta&t=2m2jtGGibeFC64K2HGRLp98QZYm8q7iWrooMPZSz69U"
  },
  {
    name: "Jingying Huang",
    role: "Organizer",
    linkedinUrl: "https://www.linkedin.com/in/jingyinghuang/",
    // teamLead: 'Team Lead:',
    team: 'Social Media',
    imageUrl:
      "https://media.licdn.com/dms/image/C4E03AQFuDEdSgOJPBw/profile-displayphoto-shrink_200_200/0/1571248783675?e=1695254400&v=beta&t=n2dFY1bI2U2iGFcItLaB3C8-4YcaCNQJ9X1ttYNoHJA"
  },
  {
    name: "Nicole Lyu",
    role: "Organizer",
    linkedinUrl: "https://www.linkedin.com/in/nicole-lyu/",
    // teamLead: 'Team Lead:',
    team: 'Social Media',
    imageUrl:
      "https://media.licdn.com/dms/image/D5603AQHCSgPsJzXklg/profile-displayphoto-shrink_200_200/0/1691679645025?e=1698278400&v=beta&t=3h8qyd9yj2wpiCtnIlAwKUPoGsRUgVrD28FzQI2BzfA"
  },
  {
    name: "Sergio Terrero",
    role: "Organizer",
    linkedinUrl: "https://www.linkedin.com/in/sergio-terrero-34045a11b/",
    // teamLead: 'Team Lead:',
    team: '',
    imageUrl:
      "https://media.licdn.com/dms/image/D4E03AQH2PwcKtDoGAg/profile-displayphoto-shrink_200_200/0/1670726619198?e=1695254400&v=beta&t=pbrUCiZcFNtqf6pavxPvcCiYmAezxWbYABuOCnTrymQ"
  },
  {
    name: "Shirly Spikes",
    role: "Organizer",
    linkedinUrl: "https://www.linkedin.com/in/shirly-spikes-725a413b/",
    // teamLead: 'Team Lead:',
    team: 'Features',
    imageUrl:
      "https://media.licdn.com/dms/image/C4D03AQF3qK7KUlfxHQ/profile-displayphoto-shrink_200_200/0/1609945840249?e=1695254400&v=beta&t=0WlFasb-0atWKFhlY4_XqyYP2W7CE1zAuE7z0WnK2h0"
  },
  {
    name: "Sai Dutt",
    role: "Organizer",
    linkedinUrl: "https://www.linkedin.com/in/dutt-sai/",
    // teamLead: 'Team Lead:',
    team: '',
    imageUrl:
      "https://media.discordapp.net/attachments/1130964544706056303/1133814348565975050/PXL_20230101_190254075_2.jpg?width=756&height=920"
  },
  {
    name: "Sean Daly",
    role: "Organizer",
    linkedinUrl: "https://www.linkedin.com/in/seancdaly/",
    // teamLead: 'Team Lead:',
    team: '',
    imageUrl:
      "https://media.licdn.com/dms/image/D5603AQEo8O0zmNabkA/profile-displayphoto-shrink_200_200/0/1689400196234?e=1695254400&v=beta&t=CIQJ7UX5cwpPA0mMQ7WyzsQ3TMKzbZ00CVNX59I--Z8"
  },
  {
    name: "Claudio Olmedo",
    role: "Organizer",
    linkedinUrl: "https://www.linkedin.com/in/claudioolmedo-com/",
    // teamLead: 'Team Lead:',
    team: '',
    imageUrl:
      "https://media.licdn.com/dms/image/D4E03AQE6q5fDJj5zcA/profile-displayphoto-shrink_200_200/0/1685118707659?e=1695254400&v=beta&t=MTVN3lH51OFLr27bpGGep401OW3RffbA8vNeANqZGZY"
  },
  {
    name: "Benjamin Chen",
    role: "Organizer",
    linkedinUrl: "https://www.linkedin.com/in/benjamin-chen-a7a12750/",
    // teamLead: 'Team Lead:',
    team: '',
    imageUrl:
      "https://media.licdn.com/dms/image/C4D03AQEdG-JySQY0FQ/profile-displayphoto-shrink_800_800/0/1593446721248?e=1699488000&v=beta&t=eXADY-r2VoqqJL0cEA3KwsEj7-k2GMYATsEfDbsrhGI"
  },
  {
    name: "Anirban Dutta",
    role: "Organizer",
    linkedinUrl: "https://www.linkedin.com/in/anirbandutta7/",
    // teamLead: 'Team Lead:',
    team: '',
    imageUrl:
      "https://media.licdn.com/dms/image/D4E03AQEeqg9cDqm9gg/profile-displayphoto-shrink_800_800/0/1667252731966?e=1699488000&v=beta&t=NWuVkDGLA1d81WnIQabtPBTrRPiMQoJ7rWPJ_qUiPMU"
  },
  // {
  //   name: "Anmol Vijay Bhatia",
  //   role: "Organizer",
  //   linkedinUrl: "https://www.linkedin.com/in/anmol-vb/",
  //   // teamLead: 'Team Lead:',
  //   team: '',
  //   imageUrl:
  //     "https://media.licdn.com/dms/image/C5603AQGIMDZ25uvPqQ/profile-displayphoto-shrink_800_800/0/1658655544904?e=1699488000&v=beta&t=YvEoffE9F8jPxXDWgi8rhgLGH9j88cunH_b2ud8Jc0g"
  // },



];

export default function Organizers() {
  const leadOrganizers = team.filter(person => person.role === 'Lead Organizer');
  const organizers = team.filter(person => person.role !== 'Lead Organizer');

  return (
    <Wrapper title="" description="">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl "> Meet Our Organizers!</h2>
      <ul
        className="grid grid-cols-2 md:grid-cols-3 gap-2 justify-center flex-auto mt-10 text-center"
      >
        {leadOrganizers.map(({ name, imageUrl, team, role, linkedinUrl }) => (
          <li key={name} className="m-4">
            <a href={linkedinUrl}>
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
            {/* <p className="text-sm leading-6 text-gray-600">{teamLead}</p> */}
            <p className="text-sm leading-6 text-gray-600">{team}</p>
          </li>
        ))}
      </ul>



      {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl "> Meet Our Volunteers!</h2> */}
      <ul
        className="grid grid-cols-2 md:grid-cols-3 gap-2 justify-center flex-auto mt-10 text-center"
      >
        {organizers.map(({ name, imageUrl, team, role, linkedinUrl }) => (
          <li key={name} className="m-4">
            <a href={linkedinUrl}>
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
            {/* <p className="text-sm leading-6 text-gray-600">{teamLead}</p> */}
            <p className="text-sm leading-6 text-gray-600">{team}</p>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
