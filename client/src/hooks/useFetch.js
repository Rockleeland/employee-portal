import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = method => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("http://localhost:3500/api/employees");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        console.log("result", result);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url, method]);
  return [{ data, isLoading, isError }, setUrl];
};

export default useFetch;
