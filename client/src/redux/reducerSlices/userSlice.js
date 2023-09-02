import { createSlice } from "@reduxjs/toolkit";
 
export const initialState = {
 userDetails: {},
 isLoggedIn: false,
};

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserDetails: (state, actions) => {
            return{
             ...state,
             token: actions.payload.token,
             isLoggedIn: actions.payload.success,
             userDetails: actions.payload.userDetails
            }
          },
        handleLogout: (state, actions) => {
            
        },
    }
})
 
export const {setUserDetails} = UserSlice.actions;
export default UserSlice.reducer;