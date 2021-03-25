import './Styles/HomeStyles.css'
import Button from 'react-bootstrap/Button'

export default function Home () {
    return (
        <div>
            <h1>JOACHIM CAÑETE</h1>
            <h3>Full-Stack Web-Developer</h3>
            <img
                src='https://i.imgur.com/Foxh5IS.jpg'
                alt='joachim headshot'
            />
            <h5>As a full-stack software developer, I strive to curate applications and programs aimed towards engaging and educating our communities. My experiences in serving my community in educational environments have inspired me to communicate effectively in detail-oriented teams on dynamic education programs to serve future generations, being cognizant of diversity and accessibility. My skills in React, JavaScript, and Python allow me to implement full CRUD functionality made possible with RESTful frameworks for the deployment of full-stack web applications.</h5>
            <Button className='to-folio'>My Portfolio</Button>
            <footer>
                <h2>JOACHIM CAÑETE</h2>
                <h3>JoachimCanete@gmail.com</h3>
                <a href='https://github.com/CLNEulalia'>
                    <img src='https://i.imgur.com/RM89tzh.png' alt='gitHub'/>
                </a>
                <a href='https://www.linkedin.com/in/joachim-canete/'>
                    <img src='https://i.imgur.com/4BKqJLz.png' alt='linkedin'/>
                </a>
                <a href='https://twitter.com/Eulalia19486588'>
                    <img src='https://i.imgur.com/2ET9vHb.png' alt='twitter'/>
                </a>
            </footer>
        </div>
    )
}