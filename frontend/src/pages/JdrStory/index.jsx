import ShowChapter from '../../components/chapitre/ShowChapter';
import AddChapter from '../../components/chapitre/AddChapter';
import useFetch from '../../utils/hooks/useFetch';

export default function JdrStory() {
  const jdrId = sessionStorage.getItem('jdrId');

  const url = `http://localhost:4200/api/jdr/findallchapitre/${jdrId}`;
  const { data, dataLoading, update, setUpdate } = useFetch(url);

  return (
    <div>
      <ShowChapter jdrId={jdrId} data={data} dataLoading={dataLoading} update={update} setUpdate={setUpdate} />
      <AddChapter jdrId={jdrId} update={update} setUpdate={setUpdate} />
    </div>
  );
}
