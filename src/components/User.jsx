import { useState } from "react";
import { useDispatch } from "react-redux" ;
import { deleteUser, modifyUser } from "../app/features/users/usersSlice" ;

function User({ user }) {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState()

    const handleDeleteUser = id => {
        dispatch( deleteUser(id) );
    }
    const handleModifyUser = ( user ) => {
        dispatch( modifyUser( {...user, firstName } ) );
    }

    return (
        <div className="card-user">
            <h2>{ user.firstName } { user.lastName } </h2>
            <input
                className="modify-input" 
                type='text'
                onChange={ e => setFirstName(e.target.value) }
            />

            <button 
                className="modify-user" 
                onClick={ () => handleModifyUser(user) }
            >
                Modify User
            </button>
            <button 
                className="delete-user" 
                onClick={ () => handleDeleteUser(user.id) }

            >
                Delete User
            </button>
        </div>
    );
}


export default User;
