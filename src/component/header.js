import logo from '../assets/Vector.webp';
import photo1 from '../assets/IMG.webp';
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
        <section className='navbar'>
            <div className="logo">
                <p className='letterK_logo'>K</p>
                <img src={logo} alt="logo Kasa" className='home_logo'/>
                <p className='letter_logo'>s</p>
                <p className='letter_logo'>a</p>
            </div>

            <div>
                <ul className='link'>
                    <li className='link1'><NavLink to="/" className={({isActive}) => (isActive ? "activeLink" : undefined)}>Accueil</NavLink></li>
                    <li><NavLink to="/apropos" className={({isActive}) => (isActive ? "activeLink" : undefined)}>A Propos</NavLink></li>
                </ul>
            </div>
        </section>
        <article>
            <img src={photo1} alt='photo paysage' className='photo_paysage'/>
            <p className='p_paysage'>Chez vous, partout et ailleurs</p>
        </article>
        </>
        
    )
}