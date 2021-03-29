import { Navbar, Nav } from 'react-bootstrap';

export default function Navigation () {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <img
                    height={30}
                    width={30}
                    src='https://i.imgur.com/4wQjzCl.jpg'
                    alt='contributing rebel of society'
                />
            <Navbar.Brand href='/'>Joachim Cañete</Navbar.Brand>
                <Nav className="nav-routes">
                    <Nav.Link href='/projects'>Projects</Nav.Link>
                    <Nav.Link href='/jcanete-resume'>Resume</Nav.Link>
                    <Nav.Link href="#pricing">JoachimCanete@gmail.com</Nav.Link>
                    <Nav.Link href="#pricing">GitHub</Nav.Link>
                    <Nav.Link href="#pricing">LinkedIn</Nav.Link>
                    <Nav.Link href="#pricing">Twitter</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}