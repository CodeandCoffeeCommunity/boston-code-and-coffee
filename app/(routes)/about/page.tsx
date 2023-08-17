import "@/app/globals.css";
import Wrapper from "@/components/layout/Wrapper";
import Button from "@/components/shared/Button"

const buttons = [
  {
    id: 1,
    title: "What is Code and Coffee?",
    link: "/about/info",
    color: "bg-yellow-400",
  },
  {
    id: 2,
    title: "Community Principals",
    link: "/about/principals",
    color: "bg-green-600",
  },
  {
    id: 3,
    title: "Frequently Asked Questions",
    link: "/about/faqs",
    color: "bg-[#A73C93]",
  }
];


export default function AboutIndex() {
  return (
    <div className="mx-auto max-w-7xl px-4 min-w-full">
      <div className="my-2 flex flex-col justify-evenly">
        {buttons.map(({ id, link, color, title }) => (
          <Button key={id} title={title} link={link} color={color} />
        ))}
      </div>
    </div>
  )
}
