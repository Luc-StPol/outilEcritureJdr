import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  function logoutJdr() {
    sessionStorage.removeItem('jdrId');
    navigate('/');
    window.location.reload(false);
  }
  return (
    <div className="header">
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/histoire">Histoire</Link>
        <Link to="/carte">Carte</Link>
        <Link to="/pnj">PNJ</Link>
        <Link to="quetes">Quêtes</Link>
      </div>
      <Button onClick={logoutJdr}>Changer de Jdr</Button>
    </div>
  );
}
