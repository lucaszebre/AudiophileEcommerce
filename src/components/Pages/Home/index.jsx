
import './Home.css'
import Nav from '../../Nav'
import HeroHome from '../../HeroHome'
import Category from '../../Category'
import HeroSpeaker from '../../HeroSpeaker'
import SeeProduct from '../../SeeProduct'
import EarsPhoneHome from '../../EarsPhoneHome'
import Bottom from '../../Bottom'
import Footer from '../../Footer'
import Modal from '../../Modal'

function Home() {

    return (
    <>
    <Modal />
    <div className="RelativeHome">
        <Nav />
            <HeroHome />
    </div>
    <Category 
    marginTop='22em'
    marginBottom='4em'
    />
    <HeroSpeaker />
    <SeeProduct />
    <EarsPhoneHome />
    <Bottom />
    <Footer />


    </>
    )
}

export default Home
