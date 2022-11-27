import { CompanyChart } from "../components/CompanyChart";
import { PrivacySummary } from "../components/PrivacySummary";
import { PrivacyTimeline } from "../components/PrivacyTimeline";

const data = [
  ["Sentence One is a very positive sentence.", "positive"],
  ["Sentence Two is a very negative sentence.", "negative"],
  ["Sentence Three is a decently neutral sentence.", "neutral"],
  ["Sentence Four is a decently neutral sentence.", "neutral"],
  ["Sentence Five is a very negative sentence.", "negative"],
  ["Sentence Five is a very negative sentence.", "negative"],
  ["Sentence Four is a decently neutral sentence.", "neutral"],
  ["Sentence Four is a decently neutral sentence.", "neutral"],
  ["Sentence Four is a decently neutral sentence.", "neutral"],
  ["Sentence Four is a decently neutral sentence.", "neutral"],
];

export default function PrivacyCompanyResultsPage() {
  return (
    <div className="w-screen  bg-white">
      <PrivacySummary data={data} />
      <div className="flex flex-row w-full justify-center px-5 py-10">
        <div className="w-1/2">
          <PrivacyTimeline />
        </div>
        <div className="w-1/2">
          <CompanyChart />{" "}
        </div>
      </div>
    </div>
  );
}
