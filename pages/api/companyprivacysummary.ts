import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json(privacyData);
  return;
}

const privacyCriteria = {
  labels: [
    "Security",
    "Access",
    "Retention",
    "Disclosure",
    "Use",
    "Collection",
    "Contact person",
  ],
  datasets: [
    {
      label: "Facebook",
      backgroundColor: "rgb(29, 53, 87, 0.05)",
      borderColor: "rgba(29, 53, 87, 1)",
      pointBackgroundColor: "rgba(29, 53, 87, 1)",
      pointBorderColor: "#fff",
      data: [28, 48, 40, 19, 96, 60, 100],
    },
  ],
};

const height = 200;

const privacyData = {
  type: "radar",
  title: "Facebook",
  subtitle: "Privacy Policy Breakdown",
  data: privacyCriteria,
  height: height,
  options: {
    borderWidth: 3,
    pointRadius: 3,
    pointBorderWidth: 1,
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: false,
    },
  },
};
