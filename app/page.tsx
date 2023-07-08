import Button from "@/components/shared/Button";

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
    link: "/chapters",
    color: "bg-rose-600",
  },
  {
    id: 4,
    title: "Join our Discord",
    link: "https://www.codeandcoffee.chat",
    color: "bg-purple-600",
  },
  {
    id: 5,
    title: "About",
    link: "/about",
    color: "bg-blue-500",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4">
      <div className="my-2 h-full flex flex-col justify-evenly">
        {buttons.map(({ id, link, color, title }) => (
          <Button key={id} title={title} link={link} color={color} />
        ))}
      </div>
    </main>
  );
}
