import { useState } from "react";

const useFormDictionary = () => {
  const [dictionaryForm, setDictionaryForm] = useState({
    key: "key",
    value: "value"
  });

  const handleChange = ({ target: { name, value } }) => {
    setDictionaryForm({ ...dictionaryForm, [name]: value });
  };

  return {
    handleChange,
    formValues: { ...dictionaryForm }
  };
};

export default useFormDictionary;
