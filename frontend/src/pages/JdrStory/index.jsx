import ShowChapter from '../../components/chapitre/ShowChapter';
import AddChapter from '../../components/chapitre/AddChapter';
import useFetch from '../../utils/hooks/useFetch';

export default function JdrStory() {
  const jdrId = sessionStorage.getItem('jdrId');

  const url = `http://localhost:4200/api/jdr/findallchapitre/${jdrId}`;
  const { data, dataLoading } = useFetch(url);

  return (
    <div>
      <ShowChapter jdrId={jdrId} data={data} dataLoading={dataLoading} />
      <AddChapter jdrId={jdrId} />
    </div>
  );
}
