import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { companies } from "../components/AddWishListModal/SearchAccordion";
import { CompanyChart } from "../components/CompanyChart";
import { LoadingIndicator } from "../components/Loading";
import { PrivacySummary } from "../components/PrivacySummary";
import { PrivacyTimeline } from "../components/PrivacyTimeline";

const data = companies[0].policyText;

export default function PrivacyCompanyResultsPage() {
  console.log(data);
  return (
    <div className="w-screen  bg-white">
      <h1 className="text-xl font-bold text-primary ml-7 pt-4">
        Analysis of Facebook&apos;s Privacy Policy
      </h1>
      <PrivacySummary
        data={
          JSON.parse(companies[0].policyText as string) as unknown as string[][]
        }
      />
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
