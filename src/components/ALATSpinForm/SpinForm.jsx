import React from "react";
import flyer from "../../assets/images/pic1.jpeg";
import Logo from "../../assets/images/logo.png";
import { useFormik } from "formik";
import formSchema from "./SpinFormSchema";
// import '../../index.css'

const onSubmit = (values, action) => {
  console.log(values);
  console.log(action);
  console.log("submitted");
};

const SpinForm = () => {
  const { values, errors, handleBlur, touched, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        accountNumber: "",
        acceptedTerms : false
      },
      validationSchema: formSchema,
      onSubmit,
    });
  console.log(errors);
  return (
    <>
      <div>
        <div className="grid grid-cols-2">
          <div className="w-full">
            <img src={flyer} alt="flyer" className="object-fill h-screen obj" />
          </div>
          <div className="items-center justify-center mx-auto">
            <img
              src={Logo}
              alt="logo"
              className="w-[200px] py-20 flex justify-center items-center mx-auto"
            />
            <div>
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <label
                  htmlFor="account-number"
                  className="font-semibold py-4 text-[19px]"
                >
                  Enter your account Number
                </label>
                <input
                  type="number"
                  className={`w-[400px] p-3 rounded-md border border-black ${
                    errors.accountNumber && touched.accountNumber
                      ? "border-red-500"
                      : ""
                  }`}
                  name="accountNumber"
                  placeholder="Enter your account Number"
                  id="accountNumber"
                  value={values.accountNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.accountNumber && touched.accountNumber && (
                  <p className=" text-[12px] text-red-500">{errors.accountNumber}</p>
                )}
                <div className="py-5">
                  <input type="checkbox"  id="acceptedTerms" name="acceptedTerms" value={values.acceptedTerms} onChange={handleChange} onBlur={handleBlur}/>
                  <label htmlFor="agree">
                    {" "}
                    By clicking you agree to our terms and conditions
                  </label>
                  {errors.acceptedTerms && touched.acceptedTerms && <p className="text-[11px] text-red-500">{errors.acceptedTerms}</p>}
                </div>
                <button
                  type="submit"
                  className="w-[400px] bg-purple-900 p-4 text-white rounded-md"
                >
                  Play Now
                </button>
              </form>
            </div>

            <p className="text-[13px] pt-20">
              N.B:
              <span> Ensure your account is funded with atleast 10, 000</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpinForm;
