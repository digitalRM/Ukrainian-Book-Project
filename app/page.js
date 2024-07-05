import Footer from "@/components/footer";
import Heading from "@/components/heading";
import Hero from "@/components/1-hero";
import Publications from "@/components/2-publications";
import People from "@/components/3-people";
import Image from "next/image";
import Why from "@/components/4-why";
import Resources from "@/components/5-resources";

export default function Home() {
  return (
    <div className="flex-col flex bg-[#f3f1e9]  w-screen overflow-x-hidden scroll-smooth">
      <div className=" w-full mx-auto overflow-hidden max-h-[1024px] scroll-smooth">
        <Hero />
      </div>
      <Publications />
      <People />
      <Why />
      <Resources /> 
      <Footer />
    </div>
  );
}
