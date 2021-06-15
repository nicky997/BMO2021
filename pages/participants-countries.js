import Image from 'next/image';
import Link from 'next/link';
import Header_page from "../components/Header-page.js";
const Participants_countries = () => {
    return (
        <>
        <Header_page/>
            <div className="infopage">
            <div className="participants-wrapper">
            <h1>OFFICIAL TEAMS</h1>
            <div className="participants-grid">
            <Link href="/participants-countries/albania">
                <div className="participant-country">
                    Albania (ALB)
                    <Image
        src="/countries/alb.png"
        alt="Albania"
         width={300}
        height={190}
      /></div>
                </Link>
                <Link href="/participants-countries/bosnia_and_herzegovina">
                <div className="participant-country">
                    Bosnia and Herzegovina (BIH)
                    <Image
        src="/countries/bih.png"
        alt="Bosnia and Herzegovina"
        width={300}
        height={190}
      /></div>
                </Link>
                <Link href="/participants-countries/bulgaria">
                <div className="participant-country">
                    Bulgaria (BUL)
                    <Image
        src="/countries/bul.png"
        alt="Bulgaria"
        width={300}
        height={190}
      /></div>
                </Link>
                <div className="participant-country">
                    Cyprus (CYP)
                    <Image
        src="/countries/cyp.png"
        alt="Cyprus"
        width={300}
        height={190}
      /></div>
                <div className="participant-country">
                    Greece (HEL)
                    <Image
        src="/countries/hel.png"
        alt="Greece"
        width={300}
        height={190}
      /></div>
                <div className="participant-country">
                    North Macedonia (MKD)
                    <Image
        src="/countries/mkd.png"
        alt="North Macedonia"
        width={300}
        height={190}
      /></div>
                <div className="participant-country">
                    Montenegro (MNE)
                    <Image
        src="/countries/mne.png"
        alt="Montenegro"
        width={300}
        height={190}
      /></div>
                <div className="participant-country">
                    Republic of Moldova (MDA)
                    <Image
        src="/countries/mda.png"
        alt="Republic of Moldova"
        width={300}
        height={190}
      /></div>
                <div className="participant-country">
                    Romania (ROU)
                    <Image
        src="/countries/rou.png"
        alt="Romania"
        width={300}
        height={190}
      /></div>
                <div className="participant-country">
                    Serbia (SRB)
                    <Image
        src="/countries/srb.png"
        alt="Serbia"
        width={300}
        height={190}
      /></div>
                <div className="participant-country">
                    Turkey (TUR)
                    <Image
        src="/countries/tur.png"
        alt="Turkey"
        width={300}
        height={190}
      /></div>
            </div>
                <h1>GUEST TEAMS</h1>
                <div className="participants-grid">
                    <div className="participant-country">
                        Azerbaijan (AZE)
                        <Image
                            src="/countries/aze.png"
                            alt="Azerbaijan"
                            width={300}
                            height={190}
                            />
                    </div>
                    <div className="participant-country">
                        Croatia (HRV)
                        <Image
                            src="/countries/hrv.png"
                            alt="Croatia"
                            width={300}
                            height={190}
                            />
                    </div>
                    <div className="participant-country">
                        France (FRA)
                        <Image
                            src="/countries/fra.png"
                            alt="France"
                            width={300}
                            height={190}
                            />
                    </div>
                    <div className="participant-country">
                        Indonesia (IDN)
                        <Image
                            src="/countries/idn.png"
                            alt="Indonesia"
                            width={300}
                            height={190}
                            />
                    </div>
                    <div className="participant-country">
                        Kazakhstan (KAZ)
                        <Image
                            src="/countries/kaz.png"
                            alt="Kazakhstan"
                            width={300}
                            height={190}
                            />
                    </div>
                    <div className="participant-country">
                        Kyrgyzstan (KGZ)
                        <Image
                            src="/countries/kyz.png"
                            alt="Kyrgyzstan"
                            width={300}
                            height={190}
                            />
                    </div>
                    <div className="participant-country">
                        Philippines (PHI)
                        <Image
                            src="/countries/phi.png"
                            alt="Philippines"
                            width={300}
                            height={190}
                            />
                    </div>
                    <div className="participant-country">
                        Saudi Arabi (SAU)
                        <Image
                            src="/countries/sau.png"
                            alt="Saudi Arabi"
                            width={300}
                            height={190}
                            />
                    </div>
                    <div className="participant-country">
                        Tajikistan (TJK)
                        <Image
                            src="/countries/tjk.png"
                            alt="Tajikistan"
                            width={300}
                            height={190}
                            />
                    </div>
                    <div className="participant-country">
                        Turkmenistan (TKM)
                        <Image
                            src="/countries/tkm.png"
                            alt="Turkmenistan"
                            width={300}
                            height={190}
                            />
                    </div>
                     <div className="participant-country">
                        Republic of Moldova B (MDA B)
                        <Image
                            src="/countries/mda.png"
                            alt="Moldova"
                            width={300}
                            height={190}
                            />
                    </div>
                </div>
            </div>
                </div>
            </>
    )
}
export default Participants_countries