import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-1 h-8 my-4 bg-blue-500 rounded-full"></div>

      <div className="flex flex-col items-center justify-center w-full gap-2 py-4 bg-white lg:flex-row bg-opacity-35 backdrop-blur-md lg:justify-between">
        <div className="flex items-center justify-center lg:w-1/2">
          <Image
            src="/logo.png"
            alt="Krém logo"
            width={150}
            height={75}
            className="w-auto h-auto"
            priority
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full gap-4 lg:flex-row lg:w-1/2">
          <FooterMenu title="Ajánlataink">
            <FooterMenuElement element="Nyomtatható étlap (pdf)" href="/" />
          </FooterMenu>

          <FooterMenu title="A Krém Pizzéria">
            <FooterMenuElement element="Kapcsolat" href="/kapcsolat" />
            <FooterMenuElement element="Etlap" href="/etlap" />
            <FooterMenuElement
              element="Rendelés / Foglalás"
              href="/rendles-foglalas"
            />
          </FooterMenu>

          <FooterMenu title="Social Média">
            <FooterMenuElement element="Facebook" href="/" />
            <FooterMenuElement element="Instagram" href="/" />
          </FooterMenu>
        </div>
      </div>
      <p className="w-full py-2 text-sm font-medium text-center bg-white bg-opacity-35 backdrop-blur-md">
        © 2024 Krém Pizzéria. Minden jog fenntartva.
      </p>
    </footer>
  );
}

export function FooterMenu({ children, title }) {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center lg:justify-start lg:items-start">
      <h3 className="w-1/2 mb-1 text-base text-center text-gray-700 border-b border-blue-500 border-opacity-50 lg:w-full lg:text-left">
        {title}
      </h3>
      <ul className="flex flex-col gap-1 lg:items-start lg:justify-start">
        {children}
      </ul>
    </div>
  );
}

export function FooterMenuElement({ element, href }) {
  return (
    <li className="text-sm font-medium text-gray-600">
      <Link href={href} className="hover:text-blue-600">
        {element}
      </Link>
    </li>
  );
}
