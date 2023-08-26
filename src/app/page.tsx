import Image from "next/image";
import PwInput from "./Components/PwForm";

export default function Home() {
  return (
    <main className="flex gap-4 flex-col items-center justify-center h-full">
      <h2 className="text-3xl">Register for a showcase</h2>
      <PwInput></PwInput>
    </main>
  );
}
