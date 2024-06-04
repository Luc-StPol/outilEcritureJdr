import TextareaAutosize from 'react-textarea-autosize';

export default function ModifyChapter(props) {
  function saveChap(e) {
    const data = e.target.value;
    const url = `http://localhost:4200/api/jdr/updatechapitre/${props.chapId}`;
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [props.body]: data }),
    };
    fetch(url, request).catch((err) => console.log(err));
  }

  return (
    <TextareaAutosize onChange={(e) => saveChap(e)} className="modifyChapter">
      {props.chapContent}
    </TextareaAutosize>
  );
}
