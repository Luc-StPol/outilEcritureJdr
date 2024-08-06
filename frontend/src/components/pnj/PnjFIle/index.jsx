export default function PnjFile(props) {
  const pnj = props.pnj;

  return (
    <div>
      <p>Nom: {pnj.nom}</p>
      <p>Âge: {pnj.age}</p>
      <p>Race: {pnj.race} </p>
      <p>Classe: {pnj.classe} </p>
      <p>Métier: {pnj.metier} </p>
      <p>Description: {pnj.description} </p>
    </div>
  );
}
