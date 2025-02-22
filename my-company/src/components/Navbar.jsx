import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav style={{ padding: '10px', backgroundColor: '#2C3E50', color: 'white' }}></nav>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', justifyContent: 'center' }}>
                <li><Link to="/" style={{ color: '1909E2', textDecoration: 'none', fontSize: '18px' }}>Home</Link></li>
                <li><Link to="/about" style={{ color: '1909E2', textDecoration: 'none', fontSize: '18px' }}>About</Link></li>
                <li><Link to="/services" style={{ color: '1909E2', textDecoration: 'none', fontSize: '18px' }}>Services</Link></li>
                <li><Link to="/contact" style={{ color: '1909E2', textDecoration: 'none', fontSize: '18px' }}>Contact</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;