import Wrapper from "@/components/layout/Wrapper"
import Button from "@/components/shared/Button"

export default function AboutFaQs() {
  return (
    <Wrapper>
      <h4 className="text-xl mb-4 font-bold leading-none tracking-tight text-gray-900">
        Frequently Asked Questions
      </h4>
      <h5 className="text-base mb-4 font-bold leading-none tracking-tight text-gray-900">
        How can I get involved?
      </h5>
        <p>
          If you wish to volunteer to Boston Code and Coffee lease reach out to us on bostoncodeandcoffee@gmail.com and we will set up an initial call to discuss your participation. 
          You can also volunteer to host a feature
        </p>
        <Button
          title={"Feature Sign Up Page"}
          link={"/features"}
          color={"bg-yellow-400"}
          size={"small"}
        />
      <h5 className="text-base mb-4 font-bold leading-none tracking-tight text-gray-900">
        How can my organization or business I work for help out?
      </h5>
        <p>
          We’re always looking for venue and coffee sponsors.
          Send us an email at sponsor@codeandcoffee.org
        </p>
        <h5 className="text-base mb-4 font-bold leading-none tracking-tight text-gray-900">
        I want to report someone in violation of the Code of Conduct. Where can I report?
      </h5>
        <p>
          Email us at safety@codeandcoffee.org, we strive to get back to you within 24 hours.
        </p>
    </Wrapper>
  )
}