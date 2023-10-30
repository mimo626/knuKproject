import './header.css'
import knuImage from './kangnamImage.png'

const Header = () => {
    return (
        <header className='header'>
            <div>
                <img className='knuImage' src={knuImage} alt='강남대 이미지'></img>
            </div>
        </header>
    );
}

export default Header;
