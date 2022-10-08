import React, { useEffect, useState } from "react";

function useLocalStorage(localKey, defaultValue) {
  const [localStorage, setLocalStorage] = useState();

  useEffect(() => {
    let existingValue = window.localStorage.getItem(localKey);

    if (existingValue) {
      setLocalStorage(existingValue);
    } else {
      window.localStorage.setItem(localKey, null);
      setLocalStorage();
    }
  }, [localKey]);

  return [localStorage, setLocalStorage];
}

export default useLocalStorage;
