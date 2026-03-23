import { useEffect, useState } from "react";

export const useHooks = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("response is not ok");
        }
        const rData = await res.json();
        setdata(rData);
        setLoading(false);
      } catch (e) {
        setError(true);
      } finally {
        setError(false);
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return { data, loading, error };
};
