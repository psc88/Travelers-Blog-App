import { useEffect, useState } from "react";

interface State<T> {
  data?: T;
  isLoading: boolean;
  hasError: Error | null | unknown;
}

export const useFetch = <T = unknown>(url: string): State<T> => {
  const [stateDataGet, setStateDataGet] = useState<State<T>>({
    data: undefined,
    isLoading: true,
    hasError: null,
  });

  const fetchData = async () => {
    try {
      setStateDataGet((prevState) => ({
        ...prevState,
        isLoading: true,
        hasError: null,
      }));

      const response = await fetch(url);
      const data = await response.json();

      setStateDataGet({
        data,
        isLoading: false,
        hasError: null,
      });
    } catch (error) {
      setStateDataGet({
        data: undefined,
        isLoading: false,
        hasError: error,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return stateDataGet;
};