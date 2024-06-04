import useFetch from '../../../utils/hooks/useFetch';
import Accordion from 'react-bootstrap/Accordion';
import ModifyChapter from '../ModifyChapter';
import DeleteChapter from '../DeleteChapter';

import '../../../styles/componentStyle.scss';

export default function ShowChapter(props) {
  const url = `http://localhost:4200/api/jdr/findallchapitre/${props.jdrId}`;
  const { data, dataLoading, update, setUpdate } = useFetch(url);

  return (
    <div className="showChapter">
      {dataLoading ? (
        <div>Spinner</div>
      ) : (
        <Accordion defaultActiveKey={['1']} alwaysOpen>
          {data.map((chap, i) => (
            <Accordion.Item key={chap._id} eventKey={i}>
              <Accordion.Header bsClass="accordionHeader">
                <div className="accordionTitle">
                  <div>
                    Chapitre {i + 1}:
                    <div className="chapTitle">
                      <ModifyChapter chapId={chap._id} chapContent={chap.chapTitle} body={'chapTitle'} />
                    </div>
                  </div>
                  <div>
                    <DeleteChapter chapId={chap._id} update={update} setUpdate={setUpdate} />
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <ModifyChapter chapId={chap._id} chapContent={chap.chapContenu} body={'chapContenu'} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </div>
  );
}
