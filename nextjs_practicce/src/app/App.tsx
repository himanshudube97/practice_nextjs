import { Test } from "./components/test";
import { Home } from "./Home/Home";


export const App = () => {


    return (
        <div>
        <h1 className={"bg-red-600"}>App</h1>
        <Home/>
        <Test/>
        </div>
    );
    }