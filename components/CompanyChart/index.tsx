import { LoadingIndicator } from "../Loading";
import "chart.js/auto";

import { Radar } from "react-chartjs-2";
import useSWR from "swr";
export const fetcher = async (...args: Parameters<typeof fetch>) => {
  const res = await fetch(...args);
  if (!res.ok) {
    throw { status: res.status, statusText: res.statusText };
  }
  return res.json();
};
export const CompanyChart = () => {
  const { data, error } = useSWR("api/companyprivacysummary/", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <LoadingIndicator />;
  console.log(data);

  return (
    <div className="flex flex-wrap -mx-2">
      <div className="w-full md:w-3/4 lg:w-3/4 lg:h-3/4 px-2">
        <div className="relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full bg-white border-2 border-primary ">
          <div className="flex items-center content-between px-4 py-4 border-b border-solid border-primary bg-primary ">
            {data.title} {data.subtitle}
          </div>
          <div className="relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full bg-white">
            <Radar
              data={data.data}
              height={data.height}
              options={data.options}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
