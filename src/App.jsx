import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { off, onValue, ref } from "firebase/database";
import { auth, database } from "./misc/firebase";
import { setSaveRecipes, setIsloading, setUser} from "./slice/userSlice";
import { useDispatch } from "react-redux";
import { getRandomRecipes } from "./api/api";
import { setCakeRecipes, setChickenRecipes, setRandomRecipes } from "./slice/recipesSlice";
import SavedRecipes from "./pages/SavedRecipes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";

// This file is used for displaying content according to url

const App = () => {

  const dispatch = useDispatch();
  
  // check user is log in 
  useEffect(() => {
    let userRef;
    let userFavouriteRef;
    const authUnsub = onAuthStateChanged(auth, async authObj => {
      setIsloading(true)
      if (authObj) {
        userRef = ref(database, `/profiles/${authObj.uid}`);
        userFavouriteRef = ref(database, `/profiles/${authObj.uid}/savedRecipes`);

        onValue(userRef, snap => {
          const { name, createdAt, avatar } = snap.val();

          const data = {
            name,
            createdAt,
            avatar,
            uid: authObj.uid,
            email: authObj.email,
          };

          dispatch(setUser(data))
          dispatch(setIsloading(false));
        });

        onValue(userFavouriteRef, snap => {
          if (snap.val()) {
            const data = snap.val()
            const savedRecipes = Object.keys(data).map(favId => {
              return { ...data[favId], favId };
            });
            dispatch(setSaveRecipes(savedRecipes));
          } else {
            dispatch(setSaveRecipes(null));
          }
        })

      } else {

        if (userRef) {
          off(userRef);        
        }

        if (userFavouriteRef) {
          off(userFavouriteRef);
        }

        dispatch(setUser(null))
        dispatch(setSaveRecipes(null))
        dispatch(setIsloading(false))
      }
    });


    const getData = async () => {
      try {
        const cake = await getRandomRecipes("cake");
        const chicken = await getRandomRecipes("chicken");
        const random = await getRandomRecipes("vegetarian", 50);
        dispatch(setCakeRecipes(cake.data.recipes));
        dispatch(setChickenRecipes(chicken.data.recipes));
        dispatch(setRandomRecipes(random.data.recipes));
      } catch (error) {
      }
    }
    
    getData()

    return () => {
      if (userRef) {
        off(userRef);        
      }

      if (userFavouriteRef) {
        off(userFavouriteRef);
      }

      authUnsub();
    };
  },[])

  return (
    <>
      <BrowserRouter basename="/recipe-book">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/recipe/:id" element={<Recipe/>} />
          <Route path="/saved-recipes/" element={<SavedRecipes/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
