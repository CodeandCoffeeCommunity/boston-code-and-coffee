import "@/app/globals.css";
import Wrapper from "@/components/layout/wrapper";

const chapters = [
  {
    name: "Boston, MA",
    email: "leslie.alexander@example.com",
  },
  {
    name: "New York, NY",
    email: "dries.vincent@example.com",
    href: "#",
  },
  {
    name: "St. Louis, MO",
    href: "#",
  },
];

export default function Chapters() {
  return (
    <Wrapper title="Chapters" description="Describe what this is about.">
      <ul role="list" className="divide-y divide-gray-100">
        {chapters.map((chapter) => (
          <li
            key={chapter.email}
            className="flex items-center justify-between gap-x-6 py-5"
          >
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {chapter.name}
                </p>
              </div>
            </div>
            <a
              href={chapter.href}
              className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              RSVP
            </a>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
