import Link from "next/link";

export default function Button({
  title,
  link,
  color,
  size = 'large'
}: {
  title: string;
  link: string;
  color: string;
  size?: 'small' | 'large';
}) {
  const height = size == 'large' ? ' h-16' : 'h-10';
  const padding = size == 'large' ? ' px-4 py-2.5' : 'px-2 py-1.5';

  return (
    <div className="my-2">
        <Link href={link}>
          <button
            type="button"
          className={`${color} rounded-full w-full ${height} ${padding} text-xl font-semibold text-white shadow-sm`}
          >
            {title}
          </button>
        </Link>
    </div>
  );
}