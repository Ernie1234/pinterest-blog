"use client";

import { CardIcon } from "@/components";
import Link from "next/link";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RiPieChart2Fill } from "react-icons/ri";

function page() {
  return (
    <div className="min-h-screen flex flex-col  w-full">
      <div className="lg:py-40 md:py-28 py-16 bg-green-100">
        <h1 className="text-center lg:text-6xl md:text-4xl text-3xl font-semibold text-slate-900 ">
          Contact
        </h1>
      </div>
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row lg:py-40 md:py-28 py-16">
          <div className="flex-1 flex flex-col justify-center items-center gap-3 md:gap-5 lg:gap-8">
            <h5 className="pt-4 w-4/5 lg:w-3/5 text-center text-xl md:text-3xl lg:text-5xl">
              Press requests
            </h5>
            <p className="font-medium md:text-lg lg:text-xl ">
              Only press-related enquiries and speaker requests will receive a
              response. Visit our{" "}
              <Link
                href="https://pinterest-clone-v2.netlify.app/"
                target="blank"
                className="underline"
              >
                Help Centre
              </Link>
              for all other enquiries.
            </p>
            <p className="font-medium md:text-lg lg:text-xl ">
              <Link
                href="https://pinterest-clone-v2.netlify.app/"
                target="blank"
                className="underline"
              >
                press@pinterest.com
              </Link>
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-3 md:gap-5 lg:gap-8">
            <h5 className="pt-4 w-4/5 lg:w-3/5 text-center text-xl md:text-3xl lg:text-5xl">
              Stay connected
            </h5>
            <p className="font-medium md:text-lg lg:text-xl ">
              Join our RSS feed to stay up to date with the latest news from
              Pinterest.
            </p>
            <p className="font-medium md:text-lg lg:text-xl ">
              <Link
                href="https://pinterest-clone-v2.netlify.app/"
                target="blank"
                className="underline"
              >
                Subscribe via RSS
              </Link>
            </p>
          </div>
        </div>

        {/* Looking for something else */}
        <div className="flex justify-center items-center flex-col mx-auto">
          <h2 className="pt-4 w-4/5 lg:w-3/5 text-center font-medium text-2xl md:text-4xl lg:text-6xl">
            Looking for something else?
          </h2>
          <div className="py-5 mx-auto max-w-screen-xl md:py-10 lg:py-16 grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-24">
            <CardIcon
              icon1={FaSuitcase}
              text="For Business"
              icon2={MdOutlineArrowOutward}
              url="/about"
            />
            <CardIcon
              icon1={BsFillGrid1X2Fill}
              text="For Creators"
              icon2={MdOutlineArrowOutward}
              url="/create"
            />
            <CardIcon
              icon1={RiPieChart2Fill}
              text="For Investors"
              icon2={MdOutlineArrowOutward}
              url="/contact"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
