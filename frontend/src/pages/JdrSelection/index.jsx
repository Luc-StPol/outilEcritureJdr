import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JdrSelectionBox from '../../components/JdrSelectionBox';
import '../../styles/jdrStyle.scss';

import { Spinner } from 'react-bootstrap';

export default function JdrSelection() {
  const [data, setData] = useState({});
  const [dataLoading, setDataLoading] = useState(true);
  const [update, setUpdate] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const url = `http://localhost:4200/api/jdr/`;
      try {
        const response = await fetch(url);
        const responseJson = await response.json();

        setData(responseJson);
      } catch (err) {
        console.log(err);
      } finally {
        setDataLoading(false);
      }
    }
    setDataLoading(true);
    fetchData();
  }, [update]);

  return (
    <div className="jdrSelection">
      {dataLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          {data.map((jdr) => (
            <JdrSelectionBox jdr={jdr} key={jdr._id} update={update} setUpdate={setUpdate} />
          ))}
        </div>
      )}
      <div>
        <Link to={'/addjdr'}>Créer un nouveau Jdr</Link>
      </div>
    </div>
  );
}
