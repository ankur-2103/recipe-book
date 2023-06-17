import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Search from "./pages/Search";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { off, onValue, ref } from "firebase/database";
import { auth, database } from "./misc/firebase";
import { setIsloading, setUser } from "./slice/userSlice";
import { useDispatch } from "react-redux";

const App = () => {

  let userRef;
  const dispatch = useDispatch();

  useEffect(() => {
    const authUnsub = onAuthStateChanged(auth, async authObj => {
      setIsloading(true)
      if (authObj) {
        userRef = ref(database, `/profiles/${authObj.uid}`);

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

      } else {

        if (userRef) {
          off(userRef);        
        }

        dispatch(setUser(null))
        dispatch(setIsloading(false))
      }
    });

    return () => {
      if (userRef) {
        off(userRef);        
      }

      authUnsub();
    };
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/recipe/:id" element={<Recipe/>} />
        <Route path="/faviorites/:id" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
