import MainForm from "../Components/MainForm";

console.log(process.env.SQUARE_SECRET);

export default function Register() {
  return (
    <main className="flex flex-col gap-10 bg-stone-200 text-2xl items-center justify-center min-h-full">
      <h2 className="text-4xl flex">
        Join
        <span className="bg-gradient-to-r indent-2 font-bold from-black to-ws-pink bg-clip-text text-transparent">
          Wedding Salon
        </span>
      </h2>
      <section className="flex shadow-md shadow-ws-green gap-2 w-[880px] bg-white rounded-lg">
        <div className="rounded  w-3/4 p-4">
          <MainForm />
        </div>
        <div className="p-4 border-l-4 text-left pl-8">marketing asdadsda</div>
      </section>
    </main>
  );
}
