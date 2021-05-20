import Link from 'next/link'
import Header from '../components/Header'
const Layout = children => <>{children}</>

const Home = () => {
  return (
    <>
        <Header/>
      {/*<Link href="/results">
        <button>To results page</button>
      </Link>
      <Link href="/participants">
        <button className="button">To participants page</button>
      </Link>*/}
    <div className={"infopage"}>
        <h3>Welcome!</h3>

        <p>It is a great pleasure to welcome you to the 25th Junior Balkan Mathematical Olympiad (JBMO 2021).</p>

        <p>The JBMO 2021 is organised by the Ministry of Education, Culture and Research of the Republic of Moldova and the National Agency for Curriculum and Evaluation.</p>

        <p>The JBMO 2021 will be organised during June 23-29, 2021.</p>

        <p>Due to the actual difficult pandemic situation, JBMO 2021 will be organised online in a virtual format.</p>

        <p>The aims of the Junior Balkan Mathematical Olympiad are:
            <ul>

                <li>The challenging, encouragement and development of mathematically gifted school students in all participating member countries;</li>

                <li> The fostering of friendly relations among the students and teachers of the member countries; </li>

                <li>The creation of opportunities for the exchange of information of school syllabuses and practices within the member countries </li>
                </ul>
            </p>
    </div>
    </>
  )
}

Home.Layout = Layout

export default Home