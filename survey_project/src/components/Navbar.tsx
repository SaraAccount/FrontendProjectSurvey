
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '10px' }}>home</Link>
      <Link to="/login" style={{ marginRight: '10px' }}>login</Link>
      <Link to="/surveys" style={{ marginRight: '10px' }}>surveys</Link>
      <Link to="/personalArea" style={{ marginRight: '10px' }}>peraonal area</Link>
    </nav>
  );
};

export default Navbar;