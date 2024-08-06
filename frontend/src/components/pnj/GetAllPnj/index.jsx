import { WaitingScrean } from '../../../utils/commun';
import useFetch from '../../../utils/hooks/useFetch';
import PnjCard from '../PnjCard';

export default function GetAllPnj(props) {
  const { data, dataLoading } = useFetch(`http://localhost:4200/api/pnj/all/${props.jdrId} `);

  return (
    <>
      <div>
        {dataLoading ? (
          WaitingScrean
        ) : (
          <ul>
            {data.map((pnj) => (
              <PnjCard pnj={pnj} key={pnj._id} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
