import { NavUser } from "@/modules/nav";
import Filters from "./components/Filters";
import Grafic from "./components/Grafic";
import Table from "./components/Table";

export default function Home() {
  return (
    <main className="w-full">
      <NavUser name="Alexander" />
      <div className="w-full h-full bg-[#F6FAFF] pt-[6.54vh] px-28 space-y-12">
        <Filters />
        <Grafic />
        <Table />
      </div>
    </main>
  );
}
