import './Styles/NavStyles.css';
import { Nav } from 'react-bootstrap';

export default function Navigation () {
    return (
        <>
            <div>
                <Nav as='ul'>
                <Nav.Item as='li'>
                    <Nav.Link href='/'>Joachim Canete</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                    <Nav.Link href='/projects'>Projects</Nav.Link>
                </Nav.Item>
                </Nav>
            </div>
            <a href='https://github.com/CLNEulalia'>
                <img src='https://i.imgur.com/rgrBHcg.png' alt='gitHub'/>
            </a>
            <a href='https://www.linkedin.com/in/joachim-canete/'>
                <img src='https://i.imgur.com/5hE6V3W.png' alt='linkedin'/>
            </a>
            <a href='mailto:joachimcanete@gmail.com'>
                <img src='https://i.imgur.com/oQiH9ek.png' alt='email'/>
            </a>
            <a href='https://twitter.com/Eulalia19486588'>
                <img src='https://i.imgur.com/Nfs16I2.png' alt='twitter'/>
            </a>
            <a href='../Assets/jcanete_resume.pdf'>Resume</a>
        </>
    )
}