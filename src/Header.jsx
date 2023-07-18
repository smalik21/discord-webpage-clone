import Logo from "./Logo"
import Navigation from "./Navigation"

function Header() {

    return (
        <div className="Header">
            <Logo />
            <Navigation />
            <button className="open-discord-button">Open Discord</button>
        </div>
    )
}

export default Header