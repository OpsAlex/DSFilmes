import { ReactComponent as GithubIcon } from 'assets/img/GitHub.svg'
import './styles.css';


function NavBar() {
    
    return (
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a href="https://github.com/OpsAlex" target="_blank" rel="noreferrer">
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">/OpsAlex</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    )
}

export default NavBar;