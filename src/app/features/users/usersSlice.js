import { createSlice } from "@reduxjs/toolkit" ;


const initialState = {
    users: [
        {id:1, firstName:'Rami', lastName:"Ahmed"},
        {id:2, firstName:'Kamali', lastName:"Ali"},
        {id:3, firstName:'Fahmi', lastName:"Brahim"}        
    ]
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        deleteUser: (state, action) => {
            return {
                ...state,
                users: state.users.filter( user => user.id !== action.payload )
            }
        },
        modifyUser: (state, action) => {
            return {
                ...state,
                users: state.users.map( user => user.id === action.payload.id ? {...user, firstName: action.payload.firstName } : user)
            }
        }
        
    }

});


export const { addUser, deleteUser, modifyUser } = usersSlice.actions;

export default usersSlice.reducer;
