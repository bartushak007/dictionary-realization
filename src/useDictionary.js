import { useState } from "react";

const useDictionary = () => {
  const [dictionary, setDictionary] = useState({});

  const insert = (key, value) => setDictionary({ ...dictionary, [key]: value });

  const values = () => ({ ...dictionary });

  const keyExist = key => dictionary.hasOwnProperty(key);

  const valueExist = key => {
    console.log(dictionary[key]);
    if (keyExist(key)) {
      return (
        dictionary[key] !== undefined &&
        dictionary[key] !== null &&
        dictionary[key] !== ""
      );
    }

    throw new Error("Key is not exist");
  };

  const retrieve = key => {
    if (keyExist(key)) {
      return dictionary[key];
    }

    throw new Error("Key is not exist");
  };

  const remove = key => {
    const removeProperty = (object, removeKey) => {
      return Object.entries(object).reduce((result, [key, value]) => {
        return key !== removeKey ? { ...result, [key]: value } : { ...result };
      }, {});
    };

    if (keyExist(key)) {
      setDictionary(removeProperty(dictionary, key));
    } else {
      throw new Error("Key is not exist");
    }
  };

  return {
    insert,
    retrieve,
    keyExist,
    valueExist,
    values,
    remove
  };
};

export default useDictionary;
