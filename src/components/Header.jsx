// importo il logo e navbar
import Logo from "./Logo"
import Navbar from "./Navbar"


// header 
export default function Header() {
    return (

        <header>
            <div className="container-header">
                <div className="logo">
                    <Logo />
                </div>
                <div>
                    <Navbar />
                </div>
            </div>
        </header>
    )
}