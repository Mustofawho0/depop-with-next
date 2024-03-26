"use client"

import { FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
// import { useLocation } from "react-router-dom";

export default function SignUp() {
  // const router = useLocation();
  return (
    <>
      <div className="pt-[120px]">
        <div className="flex justify-center items-center">
          <img
            src="https://assets.depop.com/web/assets/sellerOnboarding/sticker-smile.png"
            alt="logo"
          />
        </div>
        <div className="flex items-center justify-center text-2xl font-sans font-bold tracking-wide pb-4">
          <p>Sign Up</p>
        </div>
        <div className="flex items-center justify-center">
          <p>
            Already got an account?
            <span className="text-blue-600">
              <Link href="/login"> Log in
              </Link>
            </span>
          </p>
        </div>
        <div className="flex justify-center items-center pt-5">
          <button className="btn rounded-none w-[400px] h-[10px] bg-white hover:bg-blue-50">
            <FcGoogle /> Continue with Google
          </button>
        </div>
        <div className="flex justify-center items-center pt-2">
          <button className="btn rounded-none w-[400px] bg-black text-white hover:bg-black">
            <FaApple /> Continue with Apple
          </button>
        </div>
        <Link href="/register">
          <div className="flex justify-center items-center pt-2">
            <button className="btn rounded-none w-[400px] bg-white text-black border border-black hover:border-black">
              Continue with Email
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}

// <div
//   className={`${
//     router.pathname === "/" || router.pathname === "/login"
//       ? "hidden"
//       : "block"
//   }`}
// >
// </div>