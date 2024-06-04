import ShowChapter from '../../components/chapitre/ShowChapter';
import AddChapter from '../../components/chapitre/AddChapter';

export default function JdrStory() {
  const jdrId = sessionStorage.getItem('jdrId');

  return (
    <div>
      <ShowChapter jdrId={jdrId} />
      <AddChapter jdrId={jdrId} />
    </div>
  );
}
