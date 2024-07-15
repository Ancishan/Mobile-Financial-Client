import useAuth from "../../Hooks/UseAuth";
import Home from "./Home";
import HomeAnimation from "./HomeAnimation";



const HomePage = () => {
    const {user} = useAuth();
    return (
        <div>
            {
               user? <Home></Home> : <div><HomeAnimation></HomeAnimation></div>
            }
        </div>
    );
};

export default HomePage;