import { useState } from "react" ;
import { useDispatch } from 'react-redux' ;
import { addUser } from '../app/features/users/usersSlice' ;


function AddUser() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const dispatch = useDispatch();

    const handleAddUser = () => {
        dispatch( addUser({id: Math.random(), firstName, lastName }) );

        setFirstName('');
        setLastName('');
    }


    return (
        <div className="add-user">
            <h3>Add User</h3>
            <input 
                className="input-first-name"
                type='text'
                placeholder="first name"
                value={ firstName }
                onChange={ e => setFirstName( e.target.value ) }
            />
            <br />
            <input 
                className="input-last-name"
                type='text'
                placeholder="last name"
                value={ lastName}
                onChange={ e => setLastName(e.target.value) }
            />
            <br />

            <button className="add-user" onClick={ handleAddUser }>Add</button>
        </div>
    );
}



export default  AddUser ;