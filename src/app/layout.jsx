import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Krém Pizzéria - Ez más tészta!",
  description:
    "A Krém Pizzéria a legjobb pizzák és tészták helye egyenessen Napoi-bol!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body className="text-gray-700 h-dvh bg-[#F3F1E9] pt-16">
        <div className="fixed inset-0 bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat filter -z-50 opacity-30 brightness-50" />
        {/* <div className="fixed inset-0 bg-[#F3F1E9] bg-cover bg-center bg-no-repeat filter -z-50" /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
