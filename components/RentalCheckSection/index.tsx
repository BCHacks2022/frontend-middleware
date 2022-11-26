import { FileUpload } from "../FileUpload";
import { SelectProvince } from "../SelectProvince";

export const RentalCheckSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-40 md:flex-row flex-col items-center my-auto  ">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <FileUpload />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Upload your Rental Agreement
          </h1>
          <p className="mb-3 leading-relaxed">
            And get a free rental contract analysis and see if you are missing
            clauses, or if your rights are being violated.
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 mb-3 lg:w-full xl:w-1/2 w-2/4">
              <SelectProvince />
            </div>
          </div>

          <button className="inline-flex text-white bg-accent rounded-lg border-0 py-2 px-6 focus:outline-none hover:bg-opacity-80 text-lg">
            Analyze my contract
          </button>
        </div>
      </div>
    </section>
  );
};
