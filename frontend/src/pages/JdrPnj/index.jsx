import { useState } from 'react';
import ResearchPnj from '../../components/pnj/ResearchPnj';

import '../../styles/jdrStyle.scss';
import AddPnj from '../../components/pnj/AddPnj';

export default function JdrPnj() {
  const [pnjName, setPnjName] = useState();
  const [refresh, setRefresh] = useState(1);

  return (
    <>
      <div className="jdrPnj">
        <form>
          <input type="text" placeholder="Rechercher un pnj" onChange={(e) => setPnjName(e.target.value)} />
        </form>
        <div>
          <AddPnj />
        </div>
      </div>
      <ResearchPnj pnjName={pnjName} refresh={refresh} />
    </>
  );
}
