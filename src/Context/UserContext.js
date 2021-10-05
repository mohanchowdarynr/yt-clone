import React, { createContext, useContext, useReducer} from "react";
import { userStatus } from "./actions";
import reducer from './UserReducer';
const UserContext = createContext();

const initialState = {
    logged : false
} 
export function UserProvider ({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleUser = () => {
        dispatch({type:userStatus})
    }

return(
    <UserContext.Provider value={{logged:state.logged,handleUser}}>
        {children}
    </UserContext.Provider>
)
}
export function useUserProvider(){
    return useContext(UserContext);
}