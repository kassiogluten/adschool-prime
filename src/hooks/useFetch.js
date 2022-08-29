/* eslint-disable react-hooks/exhaustive-deps */
import { ArrowUpIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { api } from "../utils/api";

export function useFetch(url, options, reRender) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  async function get() {
    setError(null);
    setData([]);
    setIsFetching(true);
    try {
      const response = await api.get(url, options);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    get();
  }, []);
  return { data, error, isFetching, get };
}
