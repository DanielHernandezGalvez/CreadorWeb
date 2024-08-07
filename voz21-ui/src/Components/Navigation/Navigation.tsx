"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavigationItem } from "@/interfaces/NavigationItem";
import Image from "next/image";
import Link from "next/link";

const navigation: NavigationItem[] = [
  { name: "Inicio", href: "/", current: false },
  { name: "Cursos", href: "/talleres", current: false },
  { name: "Catálogo de Voces", href: "/catalogo", current: false },
  { name: "Galería", href: "/galeria", current: false },
  { name: "Nora García", href: "/directora", current: false },
];

function classNames(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

const Navigation: React.FC = () => {
  return (
    <Disclosure as="nav" className=" bg-transparent absolute w-full z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16  items-center justify-between">
              <div className="absolute inset-y-0  left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-yellow-300 hover:bg-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center  justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center ">
                  {/* <Link href="/"> */}
                  <Image
                    className="h-8 w-auto"
                    src="/images/logo.png"
                    alt="Your Company"
                    width={80}
                    height={30}
                  />
                  {/* </Link> */}
                </div>
                <div className="hidden  sm:ml-6 sm:block">
                  <div className="flex  space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-200 text-white"
                            : "text-gray-300 hover:bg-gray-200 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1  px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-200 text-white"
                      : "text-white hover:bg-gray-500 hover:text-gray-800",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
