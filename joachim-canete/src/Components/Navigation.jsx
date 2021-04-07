import './Styles/NavStyles.css';

export default function Navigation () {
    return (
        <>
            <div className='nav-bar'>
                <a className='nav-name' href='/'>Joachim Canete</a>
                <div className='nav-social'>
                    <a href='https://github.com/CLNEulalia'>
                        <img
                            className='social-icon'
                            src='https://i.imgur.com/rgrBHcg.png' alt='gitHub'/>
                    </a>
                    <a href='https://www.linkedin.com/in/joachim-canete/'>
                        <img
                            className='social-icon'
                            src='https://i.imgur.com/5hE6V3W.png' alt='linkedin'/>
                    </a>
                    <a href='mailto:joachimcanete@gmail.com'>
                        <img
                            className='social-icon'
                            src='https://i.imgur.com/oQiH9ek.png' alt='email'/>
                    </a>
                    <a href='https://twitter.com/Eulalia19486588'>
                        <img
                            className='social-icon'
                            src='https://i.imgur.com/Nfs16I2.png' alt='twitter'/>
                    </a>
                </div>
                <a className='nav-resume' href='https://19382163-7a60-4ed3-85a9-51abf6d68295.filesusr.com/ugd/132a6b_586f328265f3434e8b4b7f442edd1664.pdf'>Resume</a>
            </div>
        </>
    )
}
