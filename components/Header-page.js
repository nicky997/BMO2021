import Image from 'next/Image'
import Nav from '../components/Nav'
const Header_page = () => {
    return(
        <div className={"header-wrapper"}>
            <div className={"header-menu"}>
                <div className={"jbmo-logo"}>
                <Image
        src="/images/logo.png"
        alt="header image"
         width={210}
        height={150}
      />
                </div>
                <Nav/>
            </div>

                <div className="header-info-page">
            <div className={"welcome-text"}>

                <h1><span>JBMO 2021 </span></h1>
                <h2><span>25th Junior Balkan Mathematical Olympiad </span></h2>
                <h3><span>June 23-29, 2021, Chişinău, Republic of Moldova</span></h3>


            </div>

            </div>


        </div>
    )
}
export default Header_page