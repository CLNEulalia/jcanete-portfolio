import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

export default function Projects() {
    return (
        <>
        <Card>
            <Image src='https://i.imgur.com/cJQONhP.png' fluid/>
            <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <br />
        <Card>
            <Image src='https://i.imgur.com/TtncVgV.png' fluid/>
            <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <br />
        <Card>
            <Image src='https://i.imgur.com/kJuwYmx.png' fluid/>
            <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <br />
        <Card>
            <Image src='https://i.imgur.com/NIL0F1V.png' fluid/>
            <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <br />
        </>
    )
}