import Accordion from 'react-bootstrap/Accordion';
import ModifyChapter from '../ModifyChapter';
import DeleteChapter from '../DeleteChapter';

import '../../../styles/componentStyle.scss';

export default function ShowChapter(props) {
  const data = props.data;
  const dataLoading = props.dataLoading;
  return (
    <div className="showChapter">
      {dataLoading ? (
        <div>Spinner</div>
      ) : (
        <Accordion defaultActiveKey={['1']} alwaysOpen>
          {data
            .sort((a, b) => (a.chapNumber > b.chapNumber ? 1 : -1))
            .map((chap, i) => (
              <Accordion.Item key={chap._id} eventKey={i}>
                <Accordion.Header bsClass="accordionHeader">
                  <div className="accordionTitle">
                    <div>
                      Chapitre : <ModifyChapter chapId={chap._id} chapContent={chap.chapNumber} body={'chapNumber'} />
                      <div className="chapTitle">
                        <ModifyChapter chapId={chap._id} chapContent={chap.chapTitle} body={'chapTitle'} />
                      </div>
                    </div>
                    <div>
                      <DeleteChapter chapId={chap._id} update={props.update} setUpdate={props.setUpdate} />
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
