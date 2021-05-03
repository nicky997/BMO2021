import Link from 'next/link'
const Nav = () => {
    return(
        <ul>
             <li><Link href="/"> Home</Link></li>
            <li><Link href="/regulations">Regulations</Link></li>
            <li><Link href="/organizers">Organizers, Partners and Supporters</Link></li>
            <li><Link href="/committees">Committees</Link></li>
            <li><Link href="/participants-countries">Participants</Link></li>
            <li><Link href="/programme">Programme</Link></li>
            <li><Link href="/problems-solutions">Problems/Solutions</Link></li>
            <li><Link href="/participants">Results</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/information">Information</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    )
}
export default Nav