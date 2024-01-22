import Image from "next/image";
import data from "../../data/menu.json";

export const metadata = {
  title: "Krém Pizzéria - Étlap",
  description: "A Krém Pizzéria étlapja.",
};

export default function Menu() {
  const trHun = {
    redPizzas: "Vörös pizzák",
    whitePizzas: "Fehér pizzák",
    romanStyles: "Római pizzák",
    homePasta: "Házi tészták",
    salads: "Saláták",
    desserts: "Desszertek",
    drinks: "Italok",
  };

  const trEng = {
    redPizzas: "Red pizzas",
    whitePizzas: "White pizzas",
    romanStyles: "Roman styles",
    homePasta: "Home pasta",
    salads: "Salads",
    desserts: "Desserts",
    drinks: "Drinks",
  };

  return (
    <main className="flex flex-col w-full min-h-full px-4 py-2 text-gray-800 xl:px-32 lg:py-4">
      {Object.keys(data.menu).map((category) => (
        <div
          id={category}
          key={category}
          className="flex flex-col items-center justify-center w-full gap-4">
          <h2 className="sticky z-10 w-full py-2 text-xl font-bold text-center bg-white rounded-full shadow-lg lg:w-1/3 lg:text-2xl lg:top-20 top-16 bg-opacity-35 backdrop-blur-md">
            {trHun[category]}{" "}
            <span className="italic font-medium">({trEng[category]})</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.menu[category].map((item) => (
              <MealCard key={item.nameHun} {...item} />
            ))}
          </div>
          {category !== "drinks" && (
            <div className="flex items-center justify-center w-1 h-8 my-4 bg-blue-500 rounded-full"></div>
          )}
        </div>
      ))}
    </main>
  );
}

export function MealCard({
  image,
  nameHun,
  nameEng,
  price,
  ingredientsHun,
  ingredientsEng,
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 p-4 transition-all duration-300 ease-in-out bg-white rounded-lg shadow-md bg-opacity-35 backdrop-blur-md hover:shadow-2xl">
      <Image
        src={image}
        alt={nameHun}
        width={1920}
        height={1080}
        className="object-cover w-full rounded-lg shadow-md h-1/2"
      />
      <div className="flex flex-col items-center justify-between w-full h-full">
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <div className="flex flex-col items-start justify-start w-full gap-1">
            <h3 className="text-lg font-bold text-gray-800">{nameHun}</h3>
            <p className="text-sm italic">{nameEng ? `(${nameEng})` : ""}</p>
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-1">
            <p className="text-sm font-semibold text-gray-800 capitalize">
              {ingredientsHun.join(", ")}
            </p>
            <p className="text-sm italic capitalize">
              {ingredientsEng.length > 0
                ? `(${ingredientsEng.join(", ")})`
                : ""}
            </p>
          </div>
        </div>
        <div className="flex items-start justify-end w-full gap-2">
          <p className="text-xl font-bold text-gray-800">
            {price > 0 ? `${price} Ft` : "Kérje ajánlatunkat"}
          </p>
        </div>
      </div>
    </div>
  );
}
