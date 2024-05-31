import React, { useEffect, useState } from 'react';
import { useFetch } from '../../utils/hooks/useFetch';
import JdrSelectionBox from '../../components/JdrSelectionBox';
import '../../styles/jdrStyle.scss';

import { Spinner } from 'react-bootstrap';

export default function JdrSelection() {
  // const [dataLoading, setDataLoading] = useState(false);
  // const [data, setData] = useState();

  // useEffect(() => {
  //   async function fetchData() {
  //     const url = `http://localhost:4200/api/jdr/`;
  //     try {
  //       const response = await fetch(url);
  //       const responseJson = await response.json();
  //       setData({ responseJson });
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       setDataLoading(false);
  //     }
  //   }
  //   setDataLoading(true);
  //   fetchData();
  // }, []);

  const { data, dataLoading } = useFetch();

  return (
    <div>
      {dataLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div className="jdrSelection">
          {data.map((jdr) => (
            <JdrSelectionBox jdr={jdr} key={jdr._id} />
          ))}
        </div>
      )}
    </div>
  );
}
