import ButtonLogin from "./components/ButtonLogin";
import FAQListItem from "./components/FAQListItem";
import Image from "next/image";
import productDemo from "./productDemo.jpeg";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  const pricingList = [
    "Cellect Customer Feedback",
    "Unlimited Boards",
    "Admin Dashboard",
    "24/7 Support",
  ];
  return (
    <main>
      {/* header */}
      <section className="bg-base-300">
        <div className="max-w-5xl m-auto flex justify-between items-center px-8 py-2">
          <div className="font-bold">IchoSolutions</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover" href="#pricing">
              Pricing
            </a>
            <a className="link link-hover" href="#faq">
              FAQ
            </a>
          </div>
          <div>
            <ButtonLogin session={session} />
          </div>
        </div>
      </section>

      {/* hero */}

      <section className="text-center lg:text-left items-center lg:items-start py-32 px-8 max-w-5xl m-auto flex flex-col lg:flex-row gap-14">
        <Image
          src={productDemo}
          alt="product demo"
          className="w-96 rounded-xl"
        />

        <div>
          <h1 className="text-4xl font-extrabold mb-6">
            Collect customer feedback to build better products!
          </h1>
          <div className="opacity-90 mb-10">
            Create a feedback board in minutes, prioritize features and build
            products your customers will love.
          </div>
          <ButtonLogin session={session} />
        </div>
      </section>

      {/* pricing */}
      <section className="bg-base-200" id="pricing">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase text-primary font-medium mb-4 text-center">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            A pricing that adapts to your needs
          </h2>
          <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /month
              </div>
            </div>
            <ul className="space-y-2">
              {pricingList.map((item) => (
                <li className="flex gap-2 items-center" key={item}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-green-600 size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <ButtonLogin session={session} extraStyle="w-full" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-base-200" id="faq">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase text-primary font-medium mb-4 text-center">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <ul className="max-w-lg mx-auto">
            {[
              {
                question: "Are you there icho?",
                answer: "You better believe it",
              },
              {
                question: "How do i get a refund?",
                answer: "No money back! this is drarga people buddy!",
              },
              {
                question: "What do i get exactly?",
                answer:
                  "You get your ass handed to you in here! this is Drarga buddy!",
              },
            ].map((qa) => (
              <FAQListItem key={qa.question} qa={qa} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
