import axios from "axios";
import { useRouter } from "next/router";
import { PrivacySummary } from "../components/PrivacySummary";

export default async function PrivacyInputResultsPage() {
  const router = useRouter();
  const result = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/pp?text=${router.query.data}`
  );

  return (
    <div className="w-screen bg-white h-screen">
      <PrivacySummary data={result.data} />
    </div>
  );
}
