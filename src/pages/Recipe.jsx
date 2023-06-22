import { useSelector } from "react-redux"
import { Bookmark, CloseOne, ShareOne } from "@icon-park/react"
import Loading from "./Loading"
import { child, push, ref, remove} from 'firebase/database';
import { database } from "../misc/firebase"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getRecipeInfo } from "../api/api"
import RecipeCard from "../components/Recipes/RecipeCard"
import Modal from "../components/Modal/Modal"
import Auth from "../components/Modal/Auth"

const Recipe = () => {

    const isLoading = useSelector(state => state.user.isLoading);
    const save = useSelector(state => state.user.savedRecipes);
    const user = useSelector(state => state.user.info);
    const recipes = useSelector(state => state.recipes.randomRecipes);
    const [data, setData] = useState(null);
    const [isSaved, setIsSaved] = useState(null);
    const [isOpen, setIsOpen] = useState(null);
    const { id } = useParams();


    useEffect(() => {

        document.documentElement.scrollTop = 0;
        
        const getData = async () => {
            const res = await getRecipeInfo(id);
            if (res) {
                setData(res.data)
            }
        }
        
        const checkLike = () => {
            if (save) {
                let isSaved = false
                save.forEach((val) => {
                    if (val.id.toString() === id) {
                        isSaved = true;
                        setIsSaved(val);
                        setData(val);
                        return;
                    }
                })

                if (!isSaved) {
                    setIsSaved(null)
                    getData();
                }
            } else {
                getData()
            }
        }
        
        checkLike();
    },[save, id])
    
    const handleLike = async () => {

        if (!user) {
            setIsOpen(true);
            return;
        }
        
        const favouriteRef = child(ref(database, `profiles/${user.uid}`), 'savedRecipes')
        if (isSaved) {
            remove(ref(database, `profiles/${user.uid}/savedRecipes/${isSaved.favId}`));
            setIsSaved(null)
        } else {
           await push(favouriteRef, data).catch(err => console.log(err));
        }

    }

    const onShare = async () => {
        try {
            await navigator.share({ url: window.location.herf });
        } catch (error) {
            console.log(error)
        }
    }

    return isLoading || !data ? <Loading/> :
        <>
            
            <div className="flex flex-col mx-auto max-w-7xl">
                <div className="relative flex flex-col m-2 p-6 md:p-0 md:my-12">
                    <span className="text-3xl font-bold my-5">{data.title}</span>
                    <hr/>
                    <p className="my-5" dangerouslySetInnerHTML={{ __html: data.summary }}></p>
                    <img src={`https://spoonacular.com/recipeImages/${id}-636x393.jpg`} alt='' className="md:h-sm md:mx-20 md:object-cover" />
                    <span className=" flex absolute right-1 gap-4">
                        <ShareOne size={24} onClick={onShare}/>
                        <Bookmark size={24} onClick={handleLike} theme='two-tone' fill={['#000', `${isSaved ? '#ff642f' : '#fff'}`]}/>   
                    </span>
                </div>
                <div className="flex flex-col md:flex-row md:divide-x-2 gap-10 my-2">
                    <div className="flex flex-col flex-1 mx-8">
                        <div className="flex divide-x-2 gap-2 ">
                            <span className="flex flex-col px-4 justify-between text-[#7F7F7F]">PREP TIME<span className="text-black font-medium justify-center">{data.readyInMinutes && data.readyInMinutes > 0 ? data.readyInMinutes+" min" : <CloseOne/>}</span></span>
                            <span className="flex flex-col px-4 justify-between text-[#7F7F7F]">SERVINGS<span className="text-black font-medium justify-center">{data.servings && data.servings > 0 ? data.servings : <CloseOne/>}</span></span>
                            <span className="flex flex-col px-4 justify-between text-[#7F7F7F]">HEALTH SCORE<span className="text-black font-medium justify-center">{data.healthScore && data.healthScore > 0 ? data.healthScore+"/100" : <CloseOne/>}</span></span>
                        </div>
                        <div className="flex flex-col my-4">
                            <span className="font-medium text-3xl">Ingredients</span>
                            <ol className="px-6 list-decimal my-2 space-y-4">
                                {data.extendedIngredients && data.extendedIngredients.map((data) => (
                                    <li key={data.id} className="fl ex flex-col tracking-wider capitalize">
                                        <span className="font-semibold">{data.nameClean}</span>
                                        <span className="flex gap-4">
                                            {data.amount && <span>Amount: {data.amount}</span>}
                                            {data.unit && <span>Unit: {data.unit}</span>}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-medium text-3xl my-4">Instructions</span>
                            <div className="flex flex-col">
                                {data.analyzedInstructions && data.analyzedInstructions[0].steps.map((data) => (
                                    <div key={data.number} className="flex gap-2 py-2">
                                        <span className="bg-[#FF642F] text-white rounded-full h-8 w-8 flex items-center justify-center p-4 font-medium">{data.number}</span>
                                        <span className="text-lg">{data.step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-[#E8E8E8] mx-5 rounded-lg">
                            <span className="font-medium text-3xl my-4 p-8">Nutritions Facts</span>
                            <div className="flex flex-col divide-x-2">
                                {data.nutrition.nutrients && data.nutrition.nutrients.map((data, key) => (
                                    <span className="flex py-2 px-2 justify-between" key={key}>{data.name}<span className="font-medium">{data.amount} {data.unit}</span></span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           {recipes && <div className="flex flex-col mx-auto max-w-7xl">
                <span className="font-medium text-3xl mx-4 my-4">More recipes</span>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 mx-4">
                    {recipes.slice(15,31).map((data, i) => <RecipeCard key={i} id={data.id} name={data.title}/>)}  
                </div>
            </div>}
            <Modal isOpen={isOpen}><Auth close={()=>setIsOpen(false)} /></Modal>
        </>
}

export default Recipe