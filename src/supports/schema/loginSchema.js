"use client"

import * as Yup from "yup";

export const ValidasiLogin = Yup.object().shape({
  username: Yup.string()
    .min(6, "Username Must Have Minimum 6 Characters")
    .required("Username is Required"),
  password: Yup.string()
    .min(6, "Password Must Have Minimum 6 Characters")
    .required("Password is Required"),
});