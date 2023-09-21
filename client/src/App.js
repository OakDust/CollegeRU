import { React, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter.jsx";
import Loading from "./components/Loading/Loading.jsx";




const App = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    // let [userdata, setUserData] = useState(null)
    // const [items, setItems] = useState([]);
    // const [[id, body, title], setRequest] = useState('')
// Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
    useEffect(() => {
        fetch("http://192.168.0.95:9000/")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                // setUserData(result);
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
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
    // let [, sumbitPost] = useState('')
    // useEffect(() => {
    //     fetch("http://localhost:9000/", {method: 'POST', body: JSON.stringify()})
    //     .then((res) => res.json())
    //     .then((data) => setRequest(data.id, data.body, data.title));
    // }, []);
    
//     console.log(items)
//     // console.log(id, body, title)
    // userdata = JSON.stringify(userdata)
    return(
        
            <BrowserRouter>
            {/* <div>
                {userdata}
            </div> */}
                {/* <div>
                    {items.body} {items.id} {items.title}<br/>
                    <form method="POST">
                        <label>
                        Name:
                        <input type="text"  name="name" />
                        </label>
                        <label>
                            Email
                        </label>
                        <input type="text" name="email" />
                        <input type="submit" value="Submit" />
                    </form>
                </div> */}
                <AppRouter />
            </BrowserRouter>
        )

}

export default App;
