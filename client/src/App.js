import { React, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter.jsx";
import Loading from "./components/Loading/Loading.jsx";




const App = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
            },

            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <Loading />;
    }

    return(
        
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        )

}

export default App;
