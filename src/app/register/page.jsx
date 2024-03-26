"use client";
// export const metadata = {
//   title: "Register",
//   description: "Generated by create next app",
// };

import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import { ValidasiRegister } from "~/supports/schema/registerSchema";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  // const router = useLocation()
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleRegister = async (value, resetForm) => {
    try {
      setIsLoading(true);
      const findEmail = await axios.get(
        `http://localhost:5000/users?email=${value.email}`
      );
      if (findEmail.data.length) throw new Error("Email Already Exist!");
      const res = await axios.post("http://localhost:5000/users", value);
      toast.success("Register Berhasil!");
      router.push("/login");
      resetForm();
    } catch (error) {
      //   console.log(error);
      toast.error(error.message ? error.message : "Already Exist!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <img
            className="h-[100vh] w-[100vh]"
            src="https://fashionindustrybroadcast.com/wp-content/uploads/2019/11/depop-banner-801x800.jpg"
            alt=""
          />
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
          }}
          validationSchema={ValidasiRegister}
          onSubmit={async (value, { resetForm }) => {
            await handleRegister(value, resetForm);
          }}
        >
          {({ dirty, isValid }) => {
            return (
              <Form>
                <div className="flex flex-col items-center py-[30px] font-sans">
                  <p className="font-bold text-2xl font-sans tracking-wide pb-[5px]">
                    Sign Up
                  </p>
                  <div className="flex flex-row gap-2 ">
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text font-bold">First Name</span>
                      </div>
                      <Field
                        type="text"
                        name="firstName"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs rounded-none border border-gray-300"
                      />
                      <ErrorMessage
                        name="firstName"
                        component={"div"}
                        className="text-sm text-red-500"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text font-bold">Last Name</span>
                      </div>
                      <Field
                        type="text"
                        name="lastName"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs rounded-none border border-gray-300"
                      />
                      <ErrorMessage
                        name="lastName"
                        component={"div"}
                        className="text-sm text-red-500"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col items-center w-[438px] ">
                    <label className="form-control w-auto">
                      <div className="label ">
                        <span className="label-text font-bold w-[428px] ">
                          Email
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="email"
                        placeholder="Type here"
                        className="input input-bordered rounded-none border border-gray-300"
                      />
                      <ErrorMessage
                        name="email"
                        component={"div"}
                        className="text-sm text-red-500"
                      />
                    </label>
                    <label className="form-control w-auto">
                      <div className="label">
                        <span className="label-text font-bold w-[428px]">
                          Username
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="username"
                        placeholder="Type here"
                        className="input input-bordered rounded-none border border-gray-300"
                      />
                      <ErrorMessage
                        name="username"
                        component={"div"}
                        className="text-sm text-red-500"
                      />
                    </label>
                    <label className="form-control w-auto">
                      <div className="label">
                        <span className="label-text font-bold w-[428px]">
                          Password
                        </span>
                      </div>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Type here"
                        className="input input-bordered rounded-none border border-gray-300"
                      />
                      <ErrorMessage
                        name="password"
                        component={"div"}
                        className="text-sm text-red-500"
                      />
                    </label>
                    <label className="form-control w-auto">
                      <div className="label">
                        <span className="label-text font-bold w-[428px]">
                          Location
                        </span>
                      </div>
                      <select
                        className="w-[435px] mx-auto h-[50px] text-base border border-gray-300"
                        name=""
                        id=""
                      >
                        <option value="">Indonesia</option>
                        <option value="">Amerika</option>
                        <option value="">Inggris</option>
                        <option value="">Spanyol</option>
                        <option value="">Jepang</option>
                      </select>
                    </label>
                    <div className="pt-3 w-[428px] ">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-xs"
                        required
                      />
                      <span className="pl-2 text-[13px] text-justify ">
                        Get exclusive offers, trend updates and tips for
                        shopping and selling on Depop
                      </span>
                    </div>
                    <button
                      className="btn bg-gray-700 text-white rounded-none hover:bg-red-400 my-6 w-[428px]"
                      type="submit"
                      disabled={!(dirty && isValid) || isLoading}
                    >
                      Register
                    </button>
                    <span className="w-[428px] pl-2 text-[13px]">
                      By clicking Next you agree to our{" "}
                      <span className="text-blue-500 underline">
                        Terms of Service
                      </span>{" "}
                      and our{" "}
                      <span className="text-blue-500 underline">
                        {" "}
                        Privacy Policy
                      </span>
                      .
                    </span>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
