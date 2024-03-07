import { NavUser } from "@/modules/nav";
import Filters from "./components/Filters";
import Grafic from "./components/Grafic";
import Table from "./components/Table";

export default function Home() {
  return (
    <main className="w-full">
      <NavUser name="Alexander" />
      <div className="px-4 md:px-14 lg:px-28 xl:px-28 w-full h-full bg-[#F6FAFF] pt-[2vh] md:pt-[2vh] lg:pt-[6.54vh] xl:pt-[6.54vh] space-y-4 md:space-y-8 xl:space-y-12 lg:space-y-12">
        <Filters />
        <Grafic />
        <Table />
      </div>
    </main>
  );
}
