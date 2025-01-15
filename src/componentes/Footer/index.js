import "./Footer.css"
const Footer = ()=> {
    return <footer className='footer' style={{ backgroundImage: "url(/img/Footer.webp)" }}>
    <div className='redes'>
        <a href='https://www.facebook.com/profile.php?id=100049495984058&mibextid=ZbWKwL'>
            <img src="/img/facebook.png" alt='Facebook' />
        </a>
        <a href='https://www.aluracursos.com/'>
            <img src="/img/twitter.png" alt='twitter' />
        </a>
        <a href='https://www.aluracursos.com/'>
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo (2).png' alt='org' />
    <strong>Desarrollado por Daniela Martínez</strong>
</footer>
}
export default Footer