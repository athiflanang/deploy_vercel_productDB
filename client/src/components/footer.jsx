import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer class="bg-black shadow dark:bg-gray-900">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <Link to="/">
              <a class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <span class="self-center text-2xl whitespace-nowrap dark:text-white hover:text-red-500 transtion duration-300 ease-in-out font-semibold">
                  The Locker
                </span>
              </a>
            </Link>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="#"
                  class="hover:text-red-500 transtion duration-300 ease-in-out font-semibold me-4 md:me-6"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-red-500 transtion duration-300 ease-in-out font-semibold me-4 md:me-6"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-red-500 transtion duration-300 ease-in-out font-semibold me-4 md:me-6"
                >
                  Licensing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-red-500 transtion duration-300 ease-in-out font-semibold"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-600 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to="/">
              <a href="" class="hover:underline">
                TheLocker™
              </a>
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
