// import { initializeApp } from "firebase/app";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDGQy6mk2Mo-HA70WCC_B24-Wi3B7kKQYc",
//   authDomain: "react-http-9b6a3.firebaseapp.com",
//   databaseURL: "https://react-http-9b6a3-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "react-http-9b6a3",
//   storageBucket: "react-http-9b6a3.appspot.com",
//   messagingSenderId: "178469505363",
//   appId: "1:178469505363:web:0801a6d259dc945f0ef9a6"
// };
// const app = initializeApp(firebaseConfig);

import React, {useState, useEffect, useCallback} from 'react';
import { createMovie, getMovies} from "./components/api";
import MoviesList from "./components/MoviesList";
import Header from "./components/Header/Header";
import Modal from "./components/UI/Modal/Modal";
import Login from "./components/UI/Login";
import AuthContext from "./components/context/auth-context";
import Error from "./components/UI/Error/Error";
import './App.css';

// import * as fileStack from "filestack-js";
// const client = fileStack.init('AksUv8lF9TuBzMqQ3Ghagz');
// client.on('upload.error', (error) => console.log(error));
// const options = {
//     onFileSelected: file => {
//         if (file.size > 1000 * 1000) {
//             throw new Error('File too big, select something smaller than 1MB');
//         }
//     },
//     onUploadDone: data => {
//
//     },
// };
// // client.picker(options).open();

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const [error, setError] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onCancelModalHandler = () => setIsModal(false);
    const onOpenModalHandler = () => setIsModal(true);

    const receiveMoviesHandler = useCallback(async () => {
        setIsLoading(true);

        const data = await getMovies();
        const loadedMovies = [];
        for (const key in data) {
            loadedMovies.push({
                id: key,
                title: data[key].title,
                openingText: data[key].openingText,
                releaseDate: data[key].releaseDate,
            });
        }
        setMovies(loadedMovies);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        receiveMoviesHandler();
    }, [receiveMoviesHandler]);

    async function addMovieHandler(movie) {
        debugger
        // const response = await createMovie(movie);
        // onCancelModalHandler();
        // if (response.ok) {
        //     receiveMoviesHandler();
        // } else {
        //     setError(true);
        // }
    }

    let content = movies.length > 0 ? <MoviesList movies={movies}/> : <p>Found no movies.</p>;
    if (isLoading) {
        content = <p>Loading...</p>;
    }

    const onLoginHandler = () => setIsLoggedIn(true);
    const onLogoutHandler = () => setIsLoggedIn(false);

    return (
        <AuthContext.Provider  value={{
            isLoggedIn: isLoggedIn,
            onLogout: onLogoutHandler,
            onLogin: onLoginHandler,
        }}>
            <Header/>
            {!isLoggedIn && <Login />}
            {isLoggedIn && (
                <React.Fragment>
                    <button onClick={onOpenModalHandler}>Add movie</button>
                    <section className={"horizontal-section"}>{content}</section>
                </React.Fragment>
            )}
            {isModal && <Modal onAddMovie={addMovieHandler} onCancelModal={onCancelModalHandler}/>}
        </AuthContext.Provider>
    )
}

export default App;
