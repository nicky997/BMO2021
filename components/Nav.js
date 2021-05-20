import Link from 'next/link'
const Nav = () => {
    return(
        <div className={"menu-nav"}>
            <a><Link href="/">Home</Link></a>
            <div className="dropdown">
            <a className={"dropbtn"}>About▾</a>

             <div className={"dropdown-content"}>
                 <Link href="/regulations">Regulations</Link>
                 <Link href="/organizers">Organizers, Partners and Supporters</Link>
                 <Link href="/committees">Committees</Link>
                 <Link href="/programme">Programme</Link>
               </div>
                </div>
            <Link href="/participants-countries">Participants</Link>
            <Link href="/problems-solutions">Problems/Solutions</Link>
            <Link href="/participants">Results</Link>
            <div className={"dropdown"} >
         <a className={"dropbtn"}> Information▾</a>
            <div className={"dropdown-content"}>
                <Link href="/contact">Contact</Link>
                <Link href="/gallery">Gallery</Link>
            </div>
            </div>
        </div>
    )
}
export default Nav