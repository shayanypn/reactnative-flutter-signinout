import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

function SubmitButton({ title, type }) {
  const { handleSubmit } = useFormikContext();

  return <Button title={title} type={type} onPress={handleSubmit} />;
}

export default SubmitButton;
