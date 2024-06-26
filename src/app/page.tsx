"use client";
import Link from "next/link";
import Image from "next/image";
import { BiCheckCircle, BiLinkExternal } from "react-icons/bi";
import screenshot from "../../public/screenshot.png";
import { useForm } from "@formspree/react";

const Home = () => {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORM_ID as string
  );

  return (
    <div className="bg-primary text-white">
      <main className="py-20">
        <section id="hero" className="bg-secondary text-white  py-16">
          <div className="flex flex-col container mx-auto max-w-[1280px] px-4">
            <h2 className="text-4xl font-bold mb-4">
              Effortlessly Organize Your Links
            </h2>
            <p className="text-lg mb-8">
              Link Vault helps you manage and organize your favorite links,
              making browsing simpler and more efficient.
            </p>
            <Link
              href="#features"
              className="bg-white text-primary py-3 px-6 rounded-lg hover:bg-gray-400 transition duration-300 self-start font-medium"
              scroll={true}
            >
              Learn More
            </Link>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4 max-w-[1280px]">
            <h2 className="text-3xl font-bold mb-8">Features</h2>
            <div className="flex flex-col lg:flex-row justify-between lg:gap-8 lg:h-[700px]">
              <div className="max-w-[450px] w-[90vw] lg:h-[700px] relative">
                <Image
                  src={screenshot}
                  alt="screenshot of My Link Vault"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col lg:p-8 max-w-[700px] w-[90vw] gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-secondary">
                    Effortless Link Organization
                  </h3>
                  <p className="text-lg mb-4">
                    Save links with a single click directly from your favorite
                    webpages. Link Vault captures the title and URL
                    automatically.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-secondary">
                    Tag and Categorize with Ease
                  </h3>
                  <p className="text-lg mb-4">
                    Stay organized by adding tags and categories to your links.
                    Easily find what you need, whether it&apos;s work-related,
                    recipes, or travel.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-secondary">
                    Seamless Data Management
                  </h3>
                  <p className="text-lg mb-4">
                    Securely store your link collection with IndexedDB. Your
                    data is safe and accessible, ensuring you never lose your
                    valuable links.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-secondary">
                    Download and Transfer Your Links
                  </h3>
                  <p className="text-lg mb-4">
                    Download your link list as a JSON file for easy transfer and
                    backup. Restore your links effortlessly when switching
                    devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="bg-secondary py-20">
          <div className="flex flex-col container mx-auto px-4 max-w-[1280px]">
            <h2 className="text-3xl font-bold mb-8">Download My Link Vault</h2>
            <div className="flex flex-col lg:flex-row justify-between">
              <p className="text-lg mb-8 max-w-prose">
                Save memory, not just computer memory, but the mental kind
                too—by keeping fewer tabs open with Link Vault. Get started with
                Link Vault today and take control of your browsing experience!
              </p>
              <Link
                href="https://chromewebstore.google.com/detail/my-link-vault/cgnjhdifiiiaepjipolnodmeccccoekk?utm_source=ext_app_menu"
                className="flex items-center gap-4 bg-white text-primary py-3 px-6 rounded-lg hover:bg-gray-400 transition duration-300 self-start font-medium"
                scroll={true}
              >
                Install Now <BiLinkExternal className="font-medium text-xl" />
              </Link>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-primary">
          <div className="container mx-auto px-4 max-w-[1280px]">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            {state.succeeded ? (
              <p className="flex items-center gap-2">
                <BiCheckCircle className="text-green-500 text-2xl" /> Your
                message has been sent! We will be in touch with you soon!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="text"
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-300 text-black"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-300 text-black"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-300 text-black"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-secondary text-black py-3 px-6 rounded-lg hover:bg-gray-400 transition duration-300 font-medium"
                >
                  {state.submitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
