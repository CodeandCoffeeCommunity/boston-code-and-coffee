import Link from "next/link";

export default function AboutPrinciples() {
  return (
    <div className="px-7">
      <h4 className="text-xl pb-4 font-bold leading-none tracking-tight text-gray-900">
        Our Community Principles
      </h4>
      <h5 className="text-base font-bold leading-none tracking-tight text-gray-900">
        Belonging
      </h5>
        <p>
          We strive for everyone to feel welcomed, valued, and connected.
          We believe in encouraging belonging through conscious diversity and inclusion, 
          especially amongst underrepresented groups in tech. Check out our <Link href={"/organizers"} className="font-bold underline">organizers</Link> page!
        </p>
      <h5 className="text-base pt-4 font-bold leading-none tracking-tight text-gray-900">
        Safety
      </h5>
        <p>
          We believe in building trust and maintaining a secure environment in our community.
          We take safety seriously and expect all participants to abide by our <Link href={"https://codeandcoffee.org/code-of-conduct"} className="font-bold underline">Code of Conduct</Link>.
        </p>
      <h5 className="text-base pt-4 font-bold leading-none tracking-tight text-gray-900">
        Trust
      </h5>
        <p>
          We strive to foster trust and build relationships by creating a community based on honesty, reliability, and integrity.
        </p>
      <h5 className="text-base pt-4 font-bold leading-none tracking-tight text-gray-900">
        Choose-Your-Own-Adventure
      </h5>
        <p>
          We won’t trap you in a boring talk or a virtual conference. 
          Or force you to do anything that goes against what you want to do. 
          You are free to come, sip some coffee, and go off on your own adventure.
        </p>
        <h5 className="text-base pt-4 font-bold leading-none tracking-tight text-gray-900">
        Open
      </h5>
        <p>
          We believe in community-led communities where every voice is heard and respected—embracing authenticity and transparency in our community.
        </p>
        <h5 className="text-base pt-4 font-bold leading-none tracking-tight text-gray-900">
        Consistent
      </h5>
        <p>
        We strive for consistency in all we do—providing a dependable experience for our community. We aim for 1 or 2 events per month, depending on organizers and venue availability.
        </p>
        <h5 className="text-base pt-4 font-bold leading-none tracking-tight text-gray-900">
        Local Autonomy
      </h5>
        <p>
        We support giving voice to the unique needs of each geographically local community.
        </p>
        <h5 className="text-base pt-4 font-bold leading-none tracking-tight text-gray-900">
        Fun In Everything we do
      </h5>
        <p>
        we aim to stay true to the human-spirit of connection. We strive for our events to be a fun place to make friends and grow!
        </p>
    </div>
  )
}