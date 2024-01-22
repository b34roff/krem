import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-start min-h-full gap-6 px-4 py-2 xl:px-32 lg:py-4 ">
      <div className="flex flex-col w-full gap-4 p-4 transition-all duration-300 ease-in-out bg-white rounded-lg shadow-lg lg:grid lg:grid-cols-2 bg-opacity-35 backdrop-blur-md lg:hover:shadow-2xl">
        <div className="flex flex-col items-start justify-start gap-6">
          <h2 className="w-full text-xl font-semibold text-gray-800 border-b-2 border-blue-600 border-opacity-75 lg:w-1/2">
            Székesfehérvári Pizzéria
          </h2>
          <div className="flex flex-col items-start justify-start w-full gap-2">
            <h3 className="flex flex-col text-lg font-semibold text-gray-700">
              E-mail :{" "}
              <span className="text-lg font-normal text-gray-700">
                krempizza@gmail.com
              </span>
            </h3>
            <h3 className="flex flex-col text-lg font-semibold text-gray-700">
              Telefonszám :{" "}
              <span className="text-lg font-normal text-gray-700">
                (+36) 06 20 / 554 4888
              </span>
            </h3>
            <h3 className="flex flex-col text-lg font-semibold text-gray-700">
              Cim :{" "}
              <span className="text-lg font-normal text-gray-700">
                8000 Székesfehérvár Szabadságharcos út 40.
              </span>
            </h3>
            <h3 className="flex flex-col text-lg font-semibold text-gray-700">
              Nyitvatartas :{" "}
              <span className="text-lg font-normal text-gray-700">
                V-Cs: 11:30-21:00 | P-V: 11:30-22:00
              </span>
            </h3>
          </div>
          <div className="flex flex-row items-center justify-center w-full gap-4">
            <Link
              href="/"
              className="flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105 hover:fill-blue-600 fill-gray-800">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105 hover:fill-blue-600 fill-gray-800">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1367.005651761508!2d18.404182758393024!3d47.19529605015141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769f7b2d49d2c63%3A0x9a6959080caf5e70!2zU3rDqWtlc2ZlaMOpcnbDoXIsIFN6YWJhZHPDoWdoYXJjb3Mgw7p0IDQwLCA4MDAw!5e0!3m2!1sfr!2shu!4v1705937493001!5m2!1sfr!2shu"
            width="1100"
            height="375"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </main>
  );
}
