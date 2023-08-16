import * as yup from "yup";

// const accountNumberPattern = 10;

const formSchema = yup.object().shape({
  accountNumber: yup
    .number()
    .positive()
    .integer()

    // .max(accountNumberPattern, { message: "Enter a valid account number" })
    .required("Account Number is required"),
  acceptedTerms: yup
    .boolean()
    .oneOf([true], "Please accept the terms of Service").required("Please accept the terms of Service"),
});

export default formSchema;
