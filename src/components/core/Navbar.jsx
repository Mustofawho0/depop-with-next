"use client";

import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { userContext } from "~/supports/context/useUserContext";
import { cartContext } from "~/supports/context/useCartContext";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import axios from "axios";

export default function Navbar() {
  const router = useRouter();
  const { userData } = useContext(userContext);
  const { setUserData } = useContext(userContext);
  const { userCart, setUserCart } = useContext(cartContext);

  const onHandleNotifCart = async () => {
    try {
      let usersData = localStorage.getItem("dataUser");
      usersData = JSON.parse(usersData);
      const dataCart = await axios.get(
        `http://localhost:5000/carts?userId=${usersData.id}`
      );
      setUserCart(dataCart.data.length);
    } catch (error) {
      console.log(error);
    }
  };
  const handleKeepLogin = async () => {
    try {
      let usersData = localStorage.getItem("dataUser");
      usersData = JSON.parse(usersData);

      const res = await axios.get(
        `http://localhost:5000/users/${usersData.id}`
      );
      setUserData({
        id: res.data.id,
        username: res.data.username,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleKeepLogin();
    onHandleNotifCart();
  }, []);

  const onHandleUserLogout = () => {
    localStorage.removeItem("dataUser");
    setUserData({});
    window.location.reload();
  };
  return (
    <>
      <div
        className={`${router.pathname === "/register" ? "hidden" : "block"}`}
      >
        <div className="fixed w-full bg-white z-10">
          <div className="flex items-center px-10 py-3 bg-base-100">
            <div className="flex-1 flex items-center gap-3">
              <Link href="/">
                <CiMenuBurger className="block lg:hidden" size={30} />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Depop_logo.svg"
                  alt="Logo"
                  className="h-[25px]"
                ></img>
              </Link>
            </div>
            <div
              className={`flex-1 pr-44 hidden ${
                router.pathname === "/login" || router.pathname === "/signup"
                  ? "lg:hidden"
                  : "lg:block"
              }`}
            >
              <div className="flex items-center gap-2 border-2 border-black px-3 py-3 rounded-full">
                <CiSearch />
                <input
                  type="text"
                  placeholder="Search Product"
                  className="focus:outline-none lg:w-auto max-w-fit"
                />
              </div>
            </div>
            <div className="flex-1 gap-5 flex justify-end items-center pr-6">
              <div className="hover:text-red-500">
                <FaRegHeart size={30} />
              </div>
              <div className="hover:text-red-500">
                {/* Taroh disini nanti nya */}
                <div className="indicator">
                  <span className="indicator-item badge badge-error text-[10px]">
                    {userCart}
                  </span>
                  <button className=" h-[40px] bg-transparent">
                    <IoBagOutline size={30} />
                  </button>
                </div>
              </div>
              <button className="btn rounded-none bg-black text-white hover:bg-red-600 hidden lg:block">
                Sell Now
              </button>
              {/* KONDISIONAL */}
              {userData !== null ? (
                // <h1>Hello, {userData}</h1>
                <div className="dropdown dropdown-end border-none pt-2">
                  <div
                    tabIndex={0}
                    role="button"
                    className=" bg-transparent border-none hover:bg-white"
                  >
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-gray-200 text-black"
                  >
                    <div className="card-body bg-gray-200 flex items-center">
                      <div className="avatar flex justify-center items-center">
                        <div className="w-12 rounded-full">
                          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                      <h3 className="card-title ">
                        Hello, {userData.username}
                      </h3>
                      {/* <p>you can use any element as a dropdown.</p> */}
                      <div className="divider bg-black h-auto w-auto-ms my-[1px]"></div>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                      <Link to="/profile">
                        <div className="mx-4">
                          <button className="btn hover:bg-red-400 h-[10px] w-[200px] font-bold text-[16px] tracking-wide font-sans rounded-none">
                            <CgProfile size={20} /> Profile
                          </button>
                        </div>
                      </Link>
                      <div className="mx-4 pt-2">
                        <button
                          onClick={onHandleUserLogout}
                          className="btn hover:bg-red-400 h-[10px] w-[200px] font-bold text-[16px] tracking-wide font-sans rounded-none"
                        >
                          <IoIosLogOut size={20} /> Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <Link href="/signup">
                    <button className="btn rounded-none bg-black text-white hover:bg-gray-500 lg:bg-white border border-black lg:text-black hover:border-black">
                      Sign Up
                    </button>
                  </Link>
                  <Link href="/login">
                    <button className="rounded-none bg-white text-black text-lg font-bold hover:text-red-600 hidden lg:block">
                      Log in
                    </button>
                  </Link>
                </>
              )}
              {/* END KONDISIONAL */}
            </div>
          </div>
          <div>
            {/* <div className="divider pb-10"></div> */}
            <hr />
            <div
              className={`gap-2 flex px-10 bg-base ${
                router.pathname === "/login" || router.pathname === "/signup"
                  ? "hidden"
                  : "block"
              }`}
            >
              <button className="font-bold text-black hover:bg-black hover:text-white h-[40px] w-[100px]">
                Menswear
              </button>
              <button className="font-bold text-black hover:bg-black hover:text-white h-[40px] w-[120px]">
                Womenswear
              </button>
              <button className="font-bold text-black hover:bg-black hover:text-white h-[40px] w-[100px]">
                Brands
              </button>
              <button className="font-bold text-black hover:bg-red-600 hover:text-white h-[40px] w-[100px]">
                Sale
              </button>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
