import Button from "@/components/shared/Button";
import Link from "next/link";
import Image from "next/image";
import Discord from "@/assets/images/Discord.svg";
import LinkedIn from "@/assets/images/LinkedIn.svg";

const buttons = [
  {
    id: 1,
    title: "Feature Sign Up",
    link: "/features",
    color: "bg-yellow-400",
  },
  {
    id: 2,
    title: "Organizers",
    link: "/organizers",
    color: "bg-green-600",
  },
  {
    id: 3,
    title: "Code & Coffee Chapters",
    link: "https://codeandcoffee.org/",
    color: "bg-rose-600",
  },
  {
    id: 4,
    title: "Photos from past events",
    link: "/pastEvents",
    color: "bg-cyan-500",
  },
  {
    id: 5,
    title: "About",
    link: "/about",
    color: "bg-[#EA891D]",
  },
];

const social_media = [
  {
    id : 1,
    title: "Discord",
    link: "https://www.codeandcoffee.chat",
    image: Discord,
  },
  {
    id : 2,
    title: "LinkedIn",
    link: "https://www.linkedin.com/company/boston-code-and-coffee",
    image: LinkedIn,
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 min-w-full">
      <div className="my-2 flex flex-col justify-evenly">
        {buttons.map(({ id, link, color, title }) => (
          <Button key={id} title={title} link={link} color={color} />
        ))}
      </div>
      <div className="flex my-2 justify-center">
        {
          social_media.map(({id, title, link, image})=>(            
            <Link className="me-2" href={link} key={id}> 
              <Image src={image} alt={title} width="40" height="40"/>
            </Link>            
          ))
        }
      </div>
    </main>
  );
}
