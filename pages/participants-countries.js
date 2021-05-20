import Image from 'next/image'
import Header_page from "../components/Header-page";
const Participants_countries = () => {
    return (
        <>
        <Header_page/>
            <div className="participants-wrapper">
            <h1>OFFICIAL TEAMS</h1>
            <div className="participants-grid">

                <div className="participant-country">
                    Albania (ALB)
                    <Image
        src="/countries/alb.png"
        alt="Picture of the author"
         width={300}
        height={190}
      /></div>
                <div className="participant-country">
                    Bosnia and Herzegovina (BIH)
                    <Image
        src="/countries/bih.png"
        alt="Picture of the author"
        width={300}
        height={190}
      /></div>
                <div className="participant-country">
                    Bulgaria (BUL)
                    <Image
        src="/countries/bul.png"
        alt="Picture of the author"
        width={300}
        height={190}
      /></div>
                <div className="participant-country">
                    Cyprus (CYP)
                    <Image
        src="/countries/cyp.png"
        alt="Picture of the author"
        width={300}
        height={190}
      /></div>
                <div className="participant-country">
                    Greece (HEL)
                    <Image
        src="/countries/hel.png"
        alt="Picture of the author"
        width={300}
        height={190}
      /></div>
                <div className="participant-country">
                    North Macedonia (MKD)
                    <Image
        src="/countries/mkd.png"
        alt="Picture of the author"
        width={300}
        height={190}
      /></div>
                <div className="participant-country">
                    Montenegro (MNE)
                    <Image
        src="/countries/mne.png"
        alt="Picture of the author"
        width={300}
        height={190}
      /></div>
                <div className="participant-country">
                    Republic of Moldova (MDA)
                    <Image
        src="/countries/mda.png"
        alt="Picture of the author"
        width={300}
        height={190}
      /></div>
                <div className="participant-country">
                    Romania (ROU)
                    <Image
        src="/countries/rou.png"
        alt="Picture of the author"
        width={300}
        height={190}
      /></div>
                <div className="participant-country">
                    Serbia (SRB)
                    <Image
        src="/countries/srb.png"
        alt="Picture of the author"
        width={300}
        height={190}
      /></div>
                <div className="participant-country">
                    Turkey (TUR)
                    <Image
        src="/countries/tur.png"
        alt="Picture of the author"
        width={300}
        height={190}
      /></div>
            </div>
            </div>
            </>
    )
}
export default Participants_countries