"use client";
import { useEffect, useState } from "react";

const useFetchData = <T, E>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //   const [reset, setReset] = useState<boolean>(false);
  // Crear una opción de reset para resetear la petición si el usuario quiere
  const fetchData = async () => {
    setIsLoading(true);
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setIsLoading(false))
      .catch((err) => {
        setError(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetchData;
