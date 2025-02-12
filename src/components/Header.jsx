// header 
export default function Header() {
    return (

        <header>
            <div className="header-logo">
                <img src="/img/dc-logo.png" alt="Logo Dc" />
            </div>
            <div className="navigation">
                <nav>
                    <ul>
                        <li><a href="#">CHARACTERS</a></li>
                        <li><a href="#">COMICS</a></li>
                        <li><a href="#">MOVIES</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">GAMES</a></li>
                        <li><a href="#">COLLECTIBLES</a></li>
                        <li><a href="#">VIDEOS</a></li>
                        <li><a href="#">FANS</a></li>
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">SHOP</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}