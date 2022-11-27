export const PrivacySummary = ({ data }: { data: string[][] }) => {
  return (
    <div className="w-screen flex flex-row overflow-x-auto justify-center items-center px-5 py-10">
      <div className="max-w-full">
        {data.map((sentence) => {
          switch (sentence[1]) {
            case "positive":
              return (
                <div
                  key={sentence[0]}
                  className={`text-primary underline decoration-green-500 bg-green-300 rounded-md p-0.5 m-0.5`}
                >
                  <span>{sentence[0]}</span>
                </div>
              );

            case "negative":
              return (
                <div
                  key={sentence[0]}
                  className={`text-primary underline decoration-red-500 bg-red-300 rounded-md p-0.5 m-0.5 `}
                >
                  <span>{sentence[0]}</span>
                </div>
              );
            default:
              return (
                <div key={sentence[0]} className={`text-primary`}>
                  <span>{sentence[0]}</span>
                </div>
              );
          }
        })}
        ;
      </div>
    </div>
  );
};
