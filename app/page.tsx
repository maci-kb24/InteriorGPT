import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";

export default function HomePage() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Generating dream rooms{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative">using AI</span>
          </span>{" "}
          for everyone.
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          Take a picture of your room and see how your room looks in different
          themes. 100% free – remodel your room today.
        </h2>
        <Link
          className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
          href="/dream"
        >
          Generate your dream room
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg">Original Room</h3>
                <Image
                  alt="Original photo of a room with roomGPT.io"
                  src="/original-pic.jpg"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg">Generated Room</h3>
                <Image
                  alt="Generated photo of a room with roomGPT.io"
                  width={400}
                  height={400}
                  src="/generated-pic-2.jpg"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                Pricing Plans
              </h2>
              <p className="mt-4 text-xl text-gray-400">
                Simple, transparent pricing for your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Free Plan */}
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white">Free</h3>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-white">$0</span>
                  <span className="text-xl font-medium text-gray-400">/mo</span>
                </div>
                <ul className="mb-8 space-y-4 text-gray-400">
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-blue-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>1 room design</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-blue-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Every design available</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-blue-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Basic support</span>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="block w-full text-center  bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
                >
                  Sign Up
                </Link>
              </div>
              {/* Starter Plan */}
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white">Starter</h3>
                 
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-white">$5</span>
                  <span className="text-xl font-medium text-gray-400">/mo</span>
                </div>
                <ul className="mb-8 space-y-4 text-gray-400">
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-blue-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>100 room designs</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-blue-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Every design available</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-blue-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Standard support</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  Get Started
                </a>
              </div>
              {/* Pro Plan */}
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white">Pro</h3>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-white">$9</span>
                  <span className="text-xl font-medium text-gray-400">/mo</span>
                </div>
                <ul className="mb-8 space-y-4 text-gray-400">
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-blue-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>200 room designs</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-blue-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Every design available</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-blue-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Advanced analytics</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  Get Started
                </a>
              </div>             
            </div>
          </div>
        </main>
        <Footer />
    </div>
  );
}
