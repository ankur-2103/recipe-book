// import Categories from "../components/Categories/Categories"
import Collections from "../components/Collections/Collections"
import NavBar from "../components/Navbar"
import Recipes from "../components/Recipes/Recipes"
import LatestRecipes from "../components/Recipes/LatestRecipes"
import Slider from "../components/Slider/Slider"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <>
            <NavBar />
            <Slider />
            <Recipes title={"Sweet sugar"}/>
            <Recipes title={"Snacks"} />
            {/* <Categories/> */}
            <Collections />
            <LatestRecipes />
            <Footer/>
        </>
    )
}

export default Home