import useSWR from "swr";
import { LoadingIndicator } from "../Loading";
import { TimelineTile } from "./TimelineTile";

export const fetcher = async (...args: Parameters<typeof fetch>) => {
  const res = await fetch(...args);
  if (!res.ok) {
    throw { status: res.status, statusText: res.statusText };
  }
  return res.json();
};

export const PrivacyTimeline = () => {
  //   const { data, error } = useSWR(`/api/companytimeline`, fetcher);
  //   if (error) return <div>Failed to load</div>;
  //   if (!data) return <LoadingIndicator />;

  return (
    <div className="ml-10">
      <h3 className="text-2xl text-gray-700 font-bold mb-6 -ml-3">
        Timeline of Privacy Policy Changes
      </h3>

      <ol className="border-l-2 border-primary border-opacity-0.6">
        <TimelineTile
          title="Privacy Policy is now in many different places"
          desc="Now instead of reading everything from one place, you have to visit each and every component manually and figure out what has changed in those components."
          date="10 / 07 / 2022"
        />
        <TimelineTile
          title="Control Over Posts"
          desc="Meta says the changes won't allow it to 'collect, use or share your data in new ways'. Now the company may disable or terminate accounts, and extra details about what happens when an account is deleted."
          date="26 / 05 / 2022"
        />
        <TimelineTile
          title="You can stop Facebook from targeting ads"
          desc="You can also limit who can see all your information and posts shared on Facebook in the past and turn off Face Recognition for photos and videos"
          date="23 / 09 / 2021"
        />
      </ol>
    </div>
  );
};
