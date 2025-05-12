import ButtonLogin from "./components/ButtonLogin";

export default function Home() {
  let isloggedin = true;
  let name = "Icho";
  return (
    <main>
      <section className="bg-base-300">
        <div className="max-w-3xl m-auto flex justify-between items-center px-8 py-2">
          <div className="font-bold">IchoSolutions</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div>
            <ButtonLogin isloggedin={isloggedin} name={name} />
          </div>
        </div>
      </section>

      {/* _______________________________________*/}

      <section className="text-center py-32 px-8 max-w-3xl m-auto">
        <h1 className="text-4xl font-extrabold mb-6">
          Cellect customer feedback to build better products!
        </h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features and build
          products your customers will love.
        </div>
        <ButtonLogin isloggedin={isloggedin} name={name} />
      </section>
    </main>
  );
}
