// import Categories from "../components/Categories/Categories"
import Collections from "../components/Collections/Collections"
import NavBar from "../components/Navbar"
import Recipes from "../components/Recipes/Recipes"
import LatestRecipes from "../components/Recipes/LatestRecipes"
import Slider from "../components/Slider/Slider"
import Footer from "../components/Footer"
import { useSelector } from "react-redux"
import Loading from "./Loading"

const Home = () => {
    const isLoading = useSelector(state => state.user.isLoading);
    return isLoading ? <Loading/> :
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
    
}

export default Home