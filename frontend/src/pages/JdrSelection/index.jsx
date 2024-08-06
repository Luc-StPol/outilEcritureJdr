import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JdrSelectionBox from '../../components/JdrSelectionBox';
import '../../styles/jdrStyle.scss';

import { Spinner } from 'react-bootstrap';
import useFetch from '../../utils/hooks/useFetch';

export default function JdrSelection() {
  const { data, dataLoading } = useFetch(`http://localhost:4200/api/jdr/`);

  return (
    <div className="jdrSelection">
      {dataLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          {' '}
          {data ? (
            <div>
              {data.map((jdr) => (
                <JdrSelectionBox jdr={jdr} key={jdr._id} />
              ))}
            </div>
          ) : null}
        </div>
      )}
      <div>
        <Link to={'/addjdr'}>Créer un nouveau Jdr</Link>
      </div>
    </div>
  );
}
