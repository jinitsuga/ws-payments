export default function Register() {
  return (
    <main className="flex flex-col gap-10 text-2xl items-center justify-center h-full">
      <h2 className="text-4xl flex  ">
        Join
        <p className="bg-gradient-to-r font-bold from-ws-pink to-ws-green bg-clip-text text-transparent">
          {"  Wedding Salon"}
        </p>
      </h2>
      <section className="flex gap-2 h-[400px]">
        <div className="rounded  w-3/4 p-4">register form</div>
        <hr className="border-2 border-stone-500 h-full"></hr>
        <div className="p-4 text-left">marketing text</div>
      </section>
    </main>
  );
}
