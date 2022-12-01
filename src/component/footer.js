import logo_footer from '../assets/Vector.webp';
import '../css/footer.css';


export default function Footer () {
    return (
        <>
        <section className='footer'>
            <div className="logo_footer">
                <p className='letterK_logo'>K</p>
                <img src={logo_footer} alt="logo Kasa" className='home_logo_footer'/>
                <p className='letter_logo'>s</p>
                <p className='letter_logo'>a</p>
            </div>
        </section>
        </>
    )
}