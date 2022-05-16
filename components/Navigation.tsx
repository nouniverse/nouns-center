import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Nav from "./Nav";
import Link from "next/link";

const Navigation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* Mobile Menu */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 "
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-90" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-[15rem] w-full bg-nouns-bg-darkgrey">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>

              <Nav setSidebarOpen={setSidebarOpen} />
            </div>
          </Transition.Child>

          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      {/* <div className="xs:hidden  md:flex md:w-64 md:flex-col md:fixed md:inset-y-0"> */}
      {/* Sidebar component, swap this element with another sidebar if you like */}
      {/* <Nav setSidebarOpen={setSidebarOpen} />
      </div> */}

      <div className="sm:px-0 flex flex-row flex-1 pt-4 items-center">
        <div className="sticky top-0 xs:pl-2 pt-1 sm:pl-0 sm:pt-0 z-40">
          <button
            type="button"
            className="-mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-white hover:text-gray-500 focus:outline-none "
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="flex w-full justify-center absolute z-30 max-w-screen-2xl	">
          <Link passHref href="/">
            <div className="flex items-center cursor-pointer text-nouns hover:text-nouns-earth-blue transition text-white xs:text-xl sm:text-3xl gap-2">
              <p className="xs:hidden sm:block">Nouns</p>
              {/*  eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/earth.gif"
                alt="earth"
                className="h-12 w-12 flex self-center"
              />
              <p className="xs:hidden sm:block">Center</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
