import MainButton from "@/components/home/MainButton";

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
    title: "Code & Coffee global network",
    link: "/chapters",
    color: "bg-rose-600",
  },
  {
    id: 4,
    title: "Join our Discord",
    link: "/discord",
    color: "bg-purple-600",
  },
  {
    id: 5,
    title: "Photos from our events",
    link: "/events",
    color: "bg-blue-500",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4">
      <div className="my-2 h-full flex flex-col justify-evenly">
        {buttons.map((button) => (
          <div className="my-2" key={button.id}>
            <MainButton
              title={button.title}
              link={button.link}
              color={button.color}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
