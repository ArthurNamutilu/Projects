import logo from '../assets/react-logo.png'
export default function Navbar(){
    return(
        <header className="nav-header">
            <nav>
                <img src={logo} alt="React Logo" className="logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}