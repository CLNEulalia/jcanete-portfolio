import './Styles/HomeStyles.css';

import Line from './Line';
import Projects from './Projects';

export default function Home () {
    return (
        <>
            <Line/>
            <div className='bio-block'>
                <img
                    className='bio-pic'
                    src='https://i.imgur.com/Foxh5IS.jpg'
                    alt='joachim headshot'
                    />
                <div className='bio-text'>
                <h3>Full-Stack Web-Developer</h3>
                <p>As a full-stack software developer, I strive to curate applications and programs aimed towards engaging and educating our communities. My experiences in serving my community in educational environments have inspired me to communicate effectively in detail-oriented teams on dynamic education programs to serve future generations, being cognizant of diversity and accessibility. My skills in React, JavaScript, and Python allow me to implement full CRUD functionality made possible with RESTful frameworks for the deployment of full-stack web applications.</p>
                </div>
            </div>
            <Line/>
            
            <h3>Projects</h3>

            <Projects/>

            <Line/>
            <footer>
                <h3>JoachimCanete@gmail.com</h3>
                <div className='link-icons'>
                    <a href='https://github.com/CLNEulalia'>
                        <img className='icon' src='https://i.imgur.com/DtSGhqp.png' alt='gitHub'/>
                    </a>
                    <a href='https://www.linkedin.com/in/joachim-canete/'>
                        <img className='icon' src='https://i.imgur.com/Je6zYKb.png' alt='linkedin'/>
                    </a>
                    <a href='https://twitter.com/Eulalia19486588'>
                        <img className='icon' src='https://i.imgur.com/0algVjw.png' alt='twitter'/>
                    </a>
                </div>
                <p className='copyright'>© JCanete</p>
            </footer>
        </>
    )
}