import useFetch from '../../../utils/hooks/useFetch';
import GetAllPnj from '../GetAllPnj';
import PnjCard from '../PnjCard';

export default function ResearchPnj(props) {
  const pnjName = props.pnjName;
  const jdrId = sessionStorage.getItem('jdrId');

  const url = `http://localhost:4200/api/pnj/research?name=${pnjName}&jdrId=${jdrId}`;

  const { data, dataLoading } = useFetch(url);

  if (!pnjName || pnjName === '') {
    return <GetAllPnj jdrId={jdrId} />;
  }

  return (
    <>
      <div>
        {dataLoading ? (
          <p></p>
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
