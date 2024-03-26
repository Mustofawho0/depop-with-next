"use client";

import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Footer() {
  const router = useRouter();
  return (
    <>
      <div
        className={`${
          router.asPath === "/signup" || router.asPath === "/register"
            ? "hidden"
            : "block"
        }`}
      >
        <div className="bg-gray-100 h-[360px] z-10">
          <div className="grid grid-cols-4 px-36 py-5 tracking-wider">
            <div>
              <span className="font-bold font-sans">Depop</span>
              <ul className="py-7 w-[20%]">
                <li className="py-3 hover:text-red-500">
                  <a href="#">About</a>
                </li>
                <li className="py-3 hover:text-red-500">
                  <a href="#">Careers</a>
                </li>
                <li className="py-3 hover:text-red-500">
                  <a href="#">Blog</a>
                </li>
                <li className="py-3 hover:text-red-500">
                  <a href="#">News</a>
                </li>
                <li className="py-3 hover:text-red-500">
                  <a href="#">Impact</a>
                </li>
              </ul>
            </div>
            <div>
              <span className="font-bold font-sans">Sell</span>
              <ul className="py-7 w-[44%]">
                <li className="py-3 hover:text-red-500">
                  <a href="#">Sell on Depop</a>
                </li>
                <li className="py-3 hover:text-red-500">
                  <a href="#">Depop Amplified</a>
                </li>
              </ul>
            </div>
            <div>
              <span className="font-bold font-sans">Help</span>
              <ul className="py-7  w-[35%]">
                <li className="py-3 hover:text-red-500">
                  <a href="#">Help Centre</a>
                </li>
                <li className="py-3 hover:text-red-500">
                  <a href="#">Safety Centre</a>
                </li>
              </ul>
            </div>
            <div className="flex justify-end place-items-end px-5 gap-6">
              <a href="#">
                <FaXTwitter size={30} className="hover:text-red-500" />
              </a>
              <a href="#">
                <FaInstagram size={30} className="hover:text-red-500" />
              </a>
              <a href="#">
                <FaTiktok size={30} className="hover:text-red-500" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 h-[80px] px-28 py-2 flex items-center">
          <div className=" pl-6">
            <select
              className="w-[140px] h-[40px] text-sm font-sans tracking-wide bg-transparent hover:bg-white hover:border-none outline-none"
              name=""
              id=""
              defaultValue="United Kingdom"
            >
              <option value="">United States</option>
              <option value="">Indonesia</option>
              <option value="">United Kingdom</option>
              <option value="">Japan</option>
            </select>
          </div>
          <div className="pl-2 flex-1">
            <select
              className="w-[100px] h-[40px] text-sm font-sans tracking-wide bg-transparent hover:bg-white hover:border-none outline-none"
              name=""
              id=""
              defaultValue="English"
            >
              <option value="">English</option>
              <option value="">Francais</option>
              <option value="">Deutsch</option>
              <option value="">Italiano</option>
            </select>
          </div>
          <div className="flex gap-10 px-14 tracking-wide">
            <span className="hover:text-red-500">
              <a href="#">Sitmaps</a>
            </span>
            <span className="hover:text-red-500">
              <a href="#">Terms and Conditions</a>
            </span>
            <span className="hover:text-red-500">
              <a href="#">Privacy</a>
            </span>
            <span className="hover:text-red-500">
              <a href="#">Cookies</a>
            </span>
          </div>
        </div>
        {/* Div Kondisi */}
      </div>
    </>
  );
}
