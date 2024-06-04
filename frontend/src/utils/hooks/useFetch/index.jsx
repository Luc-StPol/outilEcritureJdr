import { useEffect, useState } from 'react';

export default function useFetch(url, request) {
  const [data, setData] = useState({});
  const [dataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState(false);
  const [update, setUpdate] = useState(1);

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      try {
        const response = await fetch(url, request);
        const responseJson = await response.json();

        setData(responseJson);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    setDataLoading(true);
    fetchData();
  }, [url, request, update]);
  return { dataLoading, data, setData, error, update, setUpdate };
}
