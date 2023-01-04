import { useSelector } from "react-redux" ;
import User from "./User" ;


function Users() {
    const users = useSelector( state => state.users.users );
    

    return (
        <div className="list-users">
            { users.map( user => <User key={ user.id } user={ user } />) }
        </div>
    );
}


export default Users;
