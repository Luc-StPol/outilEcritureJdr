import useFetch from '../../utils/hooks/useFetch';
import '../../styles/jdrStyle.scss';

export default function JdrHome() {
  const jdrId = sessionStorage.getItem('jdrId');

  const url = `http://localhost:4200/api/jdr/${jdrId}`;
  const { data } = useFetch(url);

  return (
    <div className="jdrHome">
      <h1>{data.jdrTitle}</h1>
      <img src={data.mapImg} alt="" />
    </div>
  );
}
