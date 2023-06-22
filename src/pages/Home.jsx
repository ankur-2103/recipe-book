import Recipes from "../components/Recipes/Recipes"
import LatestRecipes from "../components/Recipes/LatestRecipes"
import Slider from "../components/Slider/Slider"
import { useSelector } from "react-redux"
import Loading from "./Loading"

// This file is used for displaying home page

const Home = () => {
    const isLoading = useSelector(state => state.user.isLoading);
    return isLoading ? <Loading/> :
        <>
            <Slider/>
            <Recipes title={"Cakes"}/>
            <Recipes title={"Chicken Special"} />
            <LatestRecipes />
        </>
    
}

export default Home