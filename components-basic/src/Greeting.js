import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";

const Greeting = function (props) {
    return (
        <div>
            { props.isLoggedIn ? <UserGreeting name={props.name} /> : <GuestGreeting /> }
        </div>
    )
}

export default Greeting;