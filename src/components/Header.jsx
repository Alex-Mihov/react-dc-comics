// importo il logo e navbar
import Logo from "./Logo"
import Navbar from "./Navbar"


// header 
export default function Header() {

    const navLinks = [
        { id: 1, text: "CHARACTERS", url: "#" },
        { id: 2, text: "COMICS", url: "#" },
        { id: 3, text: "MOVIES", url: "#" },
        { id: 4, text: "TV", url: "#" },
        { id: 5, text: "GAMES", url: "#" },
        { id: 6, text: "COLLECTIBLES", url: "#" },
        { id: 7, text: "VIDEOS", url: "#" },
        { id: 8, text: "FANS", url: "#" },
        { id: 9, text: "NEWS", url: "#" },
        { id: 10, text: "SHOP", url: "#" }
    ];

    return (


        <header>
            <div className="container-header">
                <div className="logo">
                    <Logo />
                </div>
                <div>
                    <nav>
                        <Navbar links={navLinks} />
                    </nav>

                </div>
            </div>
        </header >
    )
}