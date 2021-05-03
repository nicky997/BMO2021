import Image from 'next/image'
import Nav from '../components/Nav'
const Header = () => {
    return(
        <div className={"header-wrapper"}>
            <div className="header-background"></div>
            <div className="header-info">
            <Image
            src="/Flag_of_Moldova.svg"
            alt="Flag of Moldova"
            width={100}
            height={100}
            />
            <div className={"welcome-text"}>Welcome you to the 36th Balkan Mathematical Olympiad</div>
            <Nav/>
            </div>
        </div>
    )
}
export default Header