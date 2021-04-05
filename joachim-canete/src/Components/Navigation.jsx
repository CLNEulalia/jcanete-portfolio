import './Styles/NavStyles.css';
import { Nav } from 'react-bootstrap';

export default function Navigation () {
    return (
        <div className='nav-row'>
            <Nav as='ul'>
            <Nav.Item as='li'>
                <Nav.Link href='/'>Joachim Canete</Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
                <Nav.Link href='/projects'>Projects</Nav.Link>
            </Nav.Item>
            </Nav>

            <Nav className='justify-content-end' activeKey='/'>
            <Nav.Item>
                <Nav.Link className='justify-content-end' href='/'>Active</Nav.Link>
            </Nav.Item>
            </Nav>
        </div>
    )
}