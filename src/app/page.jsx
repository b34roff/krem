import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start gap-6 px-4 py-2 xl:px-32 lg:py-4">
      <div className="flex flex-col gap-6 lg:flex-row">
        <VerticalCard
          title="Mágikus Tészta Varázslat"
          description="Mindegyik tészta egy kis varázslat, melyet gondoskodással és szeretettel készítünk el, hogy a legfinomabb ízeket hozzuk létre."
          image="/image12.jpg"
        />
        <VerticalCard
          title="48 órás Nápolyi Álom"
          description="A nápolyi pizza csodája, 48 órán át érlelt tészta, hogy a valódi ízeket szállíthassa el Nápolyból hozzád!"
          image="/image2.jpg"
        />
        <VerticalCard
          title="Római Mesterművek"
          description="A római taglio pizza, szintén 48 órán át érlelt tészta, hogy elbűvölje az ízlelőbimbókat."
          image="/image12.jpg"
        />
      </div>

      <div className="flex items-center justify-center w-1 h-8 my-2 bg-blue-500 rounded-full lg:my-4"></div>

      <div className="flex flex-col w-full gap-6">
        <div className="flex flex-col w-full transition-all duration-300 ease-in-out bg-white rounded-lg shadow-lg lg:flex-row bg-opacity-35 backdrop-blur-md hover:shadow-2xl">
          <Image
            className="object-cover rounded-t-lg h-1/3 lg:h-auto lg:rounded-l-lg lg:rounded-tr-none lg:w-1/3"
            src="/DSC0774.jpg"
            width={1920}
            height={1080}
            alt="A vendéglátó egység belső tere"
          />
          <div className="flex flex-col justify-start h-full p-6 lg:w-2/3">
            <h5 className="mb-2 text-xl font-semibold">Rólunk</h5>
            <p className="mb-4 text-base font-medium">
              A Krém pizzériában kétféle pizzát{" "}
              <span className="font-semibold text-[#404040]">nápolyi</span> és{" "}
              <span className="font-semibold text-[#404040]">római</span>,
              (taglio, azaz szeletelt) típusút kínálunk. Az alaptésztánk saját
              receptúra alapján,{" "}
              <span className="border-b-2 border-[#404040]">
                minimum 48 órán át tartó kelesztéssel
              </span>{" "}
              készítjük elő, így lesz{" "}
              <span className="font-semibold bg-[#404040] text-slate-200">
                „ez más tészta”
              </span>{" "}
              <br /> <br />A hagyományos olasz alapanyagokat válogatott magyar
              hozzávalókkal egészítjük ki, mindig{" "}
              <span className="font-semibold text-[#404040]">
                szem előtt tartva a minőséget
              </span>
              . A sajtok nagy részét, így a kecskesajtot, illetve a szürkemarha
              termékeket is ennek szellemében szerezzük be. <br /> <br />{" "}
              Küldetésünk, hogy{" "}
              <span className="border-b-2 border-[#404040]">
                kiváló minőségű, ízletes pizzákat és tésztákat készítsünk
              </span>
              . A válogatott alapanyagok, a legmodernebb olasz konyhagépek és
              kemencék, valamint a{" "}
              <span className="text-[#404040] font-semibold">
                nápolyi tanfolyamokon
              </span>{" "}
              szerzett ismeret a kulcsa, hogy minden nap garantálni tudjuk a
              sokak által már jól ismert minőséget. Pizzaszakácsaink a híres
              nápolyi{" "}
              <span className="font-semibold bg-[#404040] text-slate-200">
                Fabio Cristiano{" "}
              </span>
              pizzamestertol sajátították el a pizzakészítés fortélyait.
            </p>

            <Link
              href={"/"}
              className="w-full px-4 py-2 text-lg font-medium text-center transition duration-300 ease-in-out bg-blue-600 border-2 border-transparent rounded-full hover:text-blue-500 text-slate-100 hover:border-blue-500 hover:bg-transparent lg:w-fit">
              Asztal foglalás
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full transition-all duration-300 ease-in-out bg-white rounded-lg shadow-lg lg:flex-row-reverse bg-opacity-35 backdrop-blur-md hover:shadow-2xl">
          <Image
            className="object-cover rounded-t-lg h-1/3 lg:h-auto lg:rounded-r-lg lg:rounded-tl-none lg:w-1/3"
            src="/DSC0450.jpg"
            width={1920}
            height={1080}
            alt="Egy pizzafajta"
          />
          <div className="flex flex-col justify-start h-full p-6 lg:w-2/3">
            <h5 className="mb-2 text-xl font-semibold">Pizzáink</h5>
            <p className="mb-4 text-base font-medium">
              A nápolyi típusú pizzáink{" "}
              <span className="text-[#404040] font-semibold">430-480°C</span>{" "}
              fokos kemencében készülnek. Ez a magas hofok biztosítja a gyors
              sütési időt, és így lesz a{" "}
              <span className="border-b-2 border-[#404040]">
                nápolyi hagyományokra jellemző állagú és minőségű
              </span>{" "}
              az eredmény. <br /> <br />{" "}
              <span className="font-semibold bg-[#404040] text-slate-200">
                A római (taglio) típusú pizzáinkat
              </span>{" "}
              tepsiben sütjük elő, majd a szögletesre vágott pizzaszeleteket a{" "}
              <span className="border-b-2 border-[#404040]">
                fogyasztás előtt 250°C
              </span>{" "}
              fokon a feltétekkel együtt 4-6 perc alatt készre sütjük. A hosszú
              kelesztési időnek köszönhetően lesz{" "}
              <span className="text-[#404040] font-semibold">
                kívül roppanó, belül pedig puha és levegos a tészta
              </span>
              . <br /> <br />{" "}
              <span className="font-semibold bg-[#404040] text-slate-200">
                A római típusú pizza előnye
              </span>
              , hogy elvitel esetén lehetőség van{" "}
              <span className="text-[#404040] font-semibold">
                otthoni körülmények között is a készre sütésre
              </span>
              , így hosszabb ido után is fogyasztható a miniség romlása nélkül,
              ellentétben a nápolyi típussal, amely esetében a legkiválóbb íz
              élményben frissen, nálunk fogyasztva lehet részed. <br /> <br />
              Kóstold meg{" "}
              <span className="border-b-2 border-[#404040]">mindkettőt</span> és
              döntsd el, hogy Neked melyik ízlik legjobban!
            </p>

            <Link
              href={"/etlap"}
              className="w-full px-4 py-2 text-lg font-medium text-center transition duration-300 ease-in-out bg-blue-600 border-2 border-transparent rounded-full hover:text-blue-500 text-slate-100 hover:border-blue-500 hover:bg-transparent lg:w-fit">
              Étlap megtekintése
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-1 h-8 my-2 bg-blue-500 rounded-full lg:my-4"></div>

      <div className="flex flex-col items-center justify-start gap-4 p-4 transition-all duration-300 ease-in-out bg-white rounded-lg shadow-lg bg-opacity-35 backdrop-blur-md hover:shadow-2xl">
        <div className="flex flex-col items-center justify-start">
          <h3 className="text-2xl font-semibold text-blue-600">
            „Il nostro team”
          </h3>
          <p className="text-xl italic font-medium">(Személyzetünk)</p>
        </div>

        <div className="flex flex-col w-full gap-6 lg:flex-row">
          <PersonnalCard
            name="Fabio Cristiano"
            position="Pizzamester"
            image="/image4.jpg"
          />

          <PersonnalCard
            name="Fabio Cristiano"
            position="Pizzamester"
            image="/image5.jpg"
          />

          <PersonnalCard
            name="Fabio Cristiano"
            position="Pizzamester"
            image="/image6.jpg"
          />

          <PersonnalCard
            name="Fabio Cristiano"
            position="Pizzamester"
            image="/image2.jpg"
          />
        </div>
      </div>
    </main>
  );
}

export function VerticalCard({ title, description, image }) {
  return (
    <div className="flex flex-col transition-all duration-300 ease-in-out bg-white rounded-lg shadow-lg bg-opacity-35 backdrop-blur-md lg:hover:shadow-2xl">
      <Image
        className="rounded-t-lg h-[350px] max-h-[1920px] object-cover"
        src={image}
        width={1280}
        height={1920}
        alt="Picture of the author"
      />
      <div className="p-6">
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        <p className="mb-4 text-base font-medium">{description}</p>
      </div>
    </div>
  );
}

export function PersonnalCard({ name, position, image }) {
  return (
    <div className="relative flex flex-col items-center justify-end w-full overflow-hidden transition-all duration-300 ease-in-out rounded-lg shadow-md cursor-pointer lg:hover:shadow-2xl lg:hover:scale-105">
      <Image
        className="object-fill w-auto h-auto rounded-lg"
        src={image}
        width={1280}
        height={1920}
        alt="Picture of the author"
      />
      <div className="absolute flex flex-col items-center justify-end w-full p-6 pt-16 text-center text-white rounded-lg bg-gradient-to-b from-transparent to-black from-0%">
        <h2 className="mb-2 text-3xl font-semibold">{name}</h2>
        <p className="px-4 py-1 text-lg font-medium bg-blue-600 rounded-full">
          {position}
        </p>
      </div>
    </div>
  );
}
