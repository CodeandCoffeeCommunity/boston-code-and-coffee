import Link from "next/link";

export default function MainButton({
  title,
  link,
  color,
}: {
  title: string;
  link: string;
  color: string;
}) {
  return (
    <div className="my-2">
      {link.startsWith("http") ? (
        <a
          href={link}
          className={`${color} flex items-center justify-center inline-block rounded-full w-full h-16 px-4 py-2.5 text-xl font-semibold text-white shadow-sm`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      ) : (
        <Link href={link}>
          <button
            type="button"
            className={`${color} rounded-full w-full h-16 px-4 py-2.5 text-xl font-semibold text-white shadow-sm`}
          >
            {title}
          </button>
        </Link>
      )}
    </div>
  );
}
