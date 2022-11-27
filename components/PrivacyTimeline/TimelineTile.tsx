export const TimelineTile = ({
  title,
  date,
  desc,
}: {
  title: string;
  date: string;
  desc: string;
}) => {
  return (
    <li>
      <div className="md:flex flex-start">
        <div className="bg-primary bg-opacity-0.6 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            className="text-white w-3 h-3"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
            ></path>
          </svg>
        </div>
        <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
          <div className="flex justify-between mb-4">
            <a
              href="#!"
              className="font-medium text-primary text-opacity-90 hover:text-opacity-100  duration-300 transition ease-in-out text-sm"
            >
              {title}
            </a>
            <a
              href="#!"
              className="font-medium text-primary text-opacity-90 hover:text-opacity-100 duration-300 transition ease-in-out text-sm"
            >
              {date}
            </a>
          </div>
          <p className="text-gray-700 mb-6">{desc}</p>
          <button
            type="button"
            className="inline-block px-4 py-1.5 bg-primary bg-opacity-90 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-opacity-100 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true"
          >
            More Info
          </button>
        </div>
      </div>
    </li>
  );
};
