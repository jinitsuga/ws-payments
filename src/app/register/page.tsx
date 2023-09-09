import MainForm from "../Components/MainForm";

export default function Register() {
  return (
    <main className="flex flex-col gap-10 bg-stone-200 text-2xl items-center justify-center min-h-full">
      <h2 className="text-4xl flex">
        Join
        <span className="bg-gradient-to-r indent-2 font-bold from-black to-ws-pink bg-clip-text text-transparent">
          Wedding Salon
        </span>
      </h2>
      <section className="flex flex-col md:flex-row shadow-md shadow-ws-green gap-2 max-w-[900px]  bg-white rounded-lg">
        <div className="rounded min-w-[60%] md:max-w-[90%]  max-w-[100%] p-4">
          <MainForm />
        </div>
        {/* <hr className="md:hidden bg-black h-1"></hr>
        <div className="p-4 border-l-4 md:max-w-[30%] max-w-[70%] text-left pl-8">
          <h3 className="text-xl mb-4">
            <strong className="text-ws-green">Every space size </strong>includes
            the following benefits:
          </h3>
          <ul className="text-lg list-disc text-black ">
            <li className="mb-4">Show space</li>
            <li className="mb-4">Database of opted-in guests</li>
            <li className="mb-4">Social media mentions</li>
            <li className="mb-4">Raffle promotions</li>
            <li>Website vendor profile</li>
          </ul>
        </div> */}
      </section>
    </main>
  );
}
