import {userStatus} from './actions';

const userReducer = (state,{type}) => {
    switch (type) {
        case userStatus: {
          return {
            logged: !state.logged
          };
        }
          default:
              return state
    }
}
export default userReducer;