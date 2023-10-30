import './nav.css'
import knuLogo from './knuLogo.png'

const Nav = () => {
    return(
        <nav className='nav'> 
            <div>
                <img className='knuLogo' src={knuLogo} alt='강남대 로고'></img>
            </div>
        </nav>
    )
}

export default Nav;