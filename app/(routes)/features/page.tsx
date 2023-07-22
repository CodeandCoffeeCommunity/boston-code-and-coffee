import "@/app/globals.css";
import Wrapper from "@/components/layout/Wrapper";
import Button from "@/components/shared/Button";

const googleFormLink = 'https://docs.google.com/forms/d/1kFX40O9xX-OHcRWtk29KzVaqVaq1hoFfDr9kuLAidZA';

export default function FeatureSignUp() {
  return (
    <Wrapper>
      <h1 className="text-2xl mb-4 font-extrabold leading-none tracking-tight text-gray-900">
        What are features?
      </h1>

      <p className="mb-4 text-gray-900">
        {"We believe that everyone has something unique and valuable to share, which is why we encourage all members to host a feature at our events! Whether it's a new hobby you've picked up, a personal passion project, or just something you find interesting, we want to hear about it."}
      </p>

      <p className="mb-4 text-gray-900">
        {"Don't worry if you're not an expert - we value personal experiences and engaging storytelling. We want to hear about your perspective on the matter!"}
      </p>

      <p className="mb-4 text-gray-900">
        {"If you want to partner with someone else to make your feature even more special, that's great too!"}
      </p>

      <p className="mb-12 text-gray-900">
        {"We can't wait to see what kind of features our members come up with."}
      </p>

      <Button 
        title={'Host a feature!'}
        link={googleFormLink}
        color={'bg-yellow-400'}
        size='small'
        />
    </Wrapper>
  );
}
