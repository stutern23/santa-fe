import type { PropsWithChildren } from "react";
import santa from "../../assets/auth-santa.png";
import treeSm from "../../assets/tree-sm.png";

export function AuthLayout({ children }: PropsWithChildren) {
  return (
    <section className="bg-white">
      <div className="flex justify-center min-h-screen">
        <div className="flex items-center w-full max-w-3xl py-8 px-4 md:p-8 mx-auto lg:px-12 lg:w-2/3">
          <div className="w-full">
            <h1 className="text-3xl font-semibold tracking-wider text-gray-800 capitalize leading-10 font-montserrat">
              SANTA
              <span className="rounded-full bg-red-600 text-white px-1">
                AI
              </span>
            </h1>
            <div className="flex items-center mt-20 mb-11">
              <h1 className="text-3xl sm:text-5xl  whitespace-nowrap font-normal tracking-wider text-gray-800 capitalize leading-10 font-amaranth">
                Experience the <br />
                <span className="font-allison text-red-600 sm:text-6xl font-semibold leading-snug">
                  Magic of Christmas
                </span>
              </h1>

              <img
                src={treeSm}
                alt=""
                className="w-auto h-20 sm:w-36 sm:h-36"
              />
            </div>

            {children}
          </div>
        </div>

        <div className="hidden relative  bg-cover lg:block lg:w-2/6 bg-PRIMARY">
          <div className=" relative overflow-hidden h-full w-full">
            <div className="absolute rounded-full bg-red-600 -top-12 -right-12 h-96 w-96 blur-3xl"></div>
            <div className="absolute rounded-full bg-red-600 -bottom-12 -left-12 h-96 w-96 blur-3xl"></div>
          </div>
          <img
            src={santa}
            className="absolute h-full top-0 -left-[51%] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
