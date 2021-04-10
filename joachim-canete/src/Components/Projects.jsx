import './Styles/ProjectStyles.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

export default function Projects() {
    return (
        <>
        <br />
        <Card>
            <Image src='https://i.imgur.com/cJQONhP.png' fluid/>
            <Card.Body>
                <Card.Text>
                The Bite-Sized Book Of Itty Bitty Blessings is a project dedicated to a principle in mental health practices known as Mindfulness.
                <br/><br/>
                This project utilizes the technologies of React, JavaScript, CSS, Django, PostgreSQL, and Python.
                </Card.Text>
            <div className='link-buttons'>
                <Button
                    variant="warning"
                    href='https://itty-bitty-blessings.herokuapp.com/'>
                    Web App
                </Button>
                <Button
                    variant="outline-warning"
                    href='https://github.com/Wolfe-Canete'>
                    GitHub
                </Button>
            </div>
            </Card.Body>
        </Card>
        <br />
        <Card>
            <Image src='https://i.imgur.com/TtncVgV.png' fluid/>
            <Card.Body>
                <Card.Text>
                The Dungeons & Dragons Character Creator is a project developed to streamline the creation of player-characters role-played in the popular table-top game Dungeons & Dragons.
                <br/><br/>
                This project utilizes technologies of React, JavaScript, CSS, MongoDB, and Expres
                </Card.Text>
            <div className='link-buttons'>
                <Button
                    variant="warning"
                    href='https://dndcc.herokuapp.com/'>
                    Web App
                </Button>
                <Button
                    variant="outline-warning"
                    href='https://github.com/alisoftengine/dndcc'>
                    GitHub
                </Button>
            </div>
            </Card.Body>
        </Card>
        <br />
        <Card>
            <Image src='https://i.imgur.com/kJuwYmx.png' fluid/>
            <Card.Body>
                <Card.Text>
                    The Pokemon Card Collection is a web application develoed to exercise the use of API fetch calls across several components.
                    <br/><br/>
                    This project utilizes the technologies of React, JavaScript, and CSS.
                </Card.Text>
            <div className='link-buttons'>
                <Button
                    variant="warning"
                    href='http://pokemon-card-collection.surge.sh/'>
                    Web App
                </Button>
                <Button
                    variant="outline-warning"
                    href='https://github.com/CLNEulalia/PokeCards'>
                    GitHub
                </Button>
            </div>
            </Card.Body>
        </Card>
        <br />
        <Card>
            <Image src='https://i.imgur.com/NIL0F1V.png' fluid/>
            <Card.Body>
                <Card.Text>
                    A Game Named Simon is a single-page web application built to learn and experiment with JavaScript functionality.​
                <br/><br/>
                    This project utilizes technologies of HTML, CSS, and JavaScript.
                </Card.Text>
            <div className='link-buttons'>
                <Button
                    variant="warning"
                    href='https://clneulalia.github.io/A-Game-Named-Simon/'>
                    Web App
                </Button>
                <Button
                    variant="outline-warning"
                    href='https://github.com/CLNEulalia/A-Game-Named-Simon'>
                    GitHub
                </Button>
            </div>
            </Card.Body>
        </Card>
        <br />
        </>
    )
}