import "@/app/globals.css";
import Wrapper from "@/components/layout/Wrapper";

const data = [
  { id: 0, name: 'Organizers', value: '3'}, 
  { id: 1, name: 'Volunteer', value: '8' },
  { id: 1, name: 'Members', value: '1500' },
  { id: 2, name: 'Meetups', value: '16' },
  { id: 3, name: 'Sponsors', value: '2' },
]


export default function Example() {
  return (
    <Wrapper title="About" description="Describe what this is about.">
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {data.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
    </Wrapper>

  )
}
