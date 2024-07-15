import Spinner from 'react-bootstrap/esm/Spinner';

export function WaitingScrean() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
