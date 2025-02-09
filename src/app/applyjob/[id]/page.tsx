"use client"
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setJob } from "@/store/jobSlice";
import { useParams, useRouter } from "next/navigation";

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  graduationYear: string;
};

const validationSchema = Yup.object({
  fullName: Yup.string()
    .required("Full Name is required")
    .min(3, "Full Name must be at least 3 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone Number is required"),
  graduationYear: Yup.string()
    .matches(/^\d{4}$/, "Graduation Year must be a valid year")
    .required("Graduation Year is required"),
});

const ApplicationForm: React.FC = () => {

  const jobData = useSelector((state: RootState) => state.job.data);

  const { id } = useParams()
  const dispatch = useDispatch()
  const router = useRouter()

  const formik = useFormik<FormData>({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      graduationYear: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data Submitted:", values);
      const numericId = Number(id)

      let foundId = false
      jobData.map((e) => {
        if (e == numericId) {
          foundId = true
        }
      })
      if (foundId) {
        toast.error("You have already apply for this job")
        setTimeout(() => {
          router.push("/")
        }, 3000)
        return
      }
      dispatch(setJob({ id: numericId }))
      toast.success("You have successfully applied for this job")
      setTimeout(() => {
        router.push("/")
      }, 3000)
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Application Form</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.touched.fullName && formik.errors.fullName
              ? "border-red-500 focus:ring-red-500"
              : "focus:ring-blue-500"
              }`}
            placeholder="John Doe"
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.fullName}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.touched.email && formik.errors.email
              ? "border-red-500 focus:ring-red-500"
              : "focus:ring-blue-500"
              }`}
            placeholder="john.doe@example.com"
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.touched.phoneNumber && formik.errors.phoneNumber
              ? "border-red-500 focus:ring-red-500"
              : "focus:ring-blue-500"
              }`}
            placeholder="123-456-7890"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.phoneNumber}</p>
          ) : null}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="graduationYear">
            Graduation Year
          </label>
          <input
            type="number"
            id="graduationYear"
            name="graduationYear"
            value={formik.values.graduationYear}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.touched.graduationYear && formik.errors.graduationYear
              ? "border-red-500 focus:ring-red-500"
              : "focus:ring-blue-500"
              }`}
            placeholder="2023"
          />
          {formik.touched.graduationYear && formik.errors.graduationYear ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.graduationYear}</p>
          ) : null}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;