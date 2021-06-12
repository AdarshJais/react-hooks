import { useState } from "react";

export const useCustomHook = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};
