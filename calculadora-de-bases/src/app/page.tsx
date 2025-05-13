import {BaseConverter} from "@/components/BaseConverter";
import {EuclideanAlgorithm} from "@/components/EuclideanAlgorithm";
import {SieveOfEratosthenes} from "@/components/SieveOfEratosthenes";

export default function Home() {
  return (
      <main className="flex flex-col items-center gap-10 w-full">
        <BaseConverter />
        <EuclideanAlgorithm />
        <SieveOfEratosthenes />
      </main>
  );
}
