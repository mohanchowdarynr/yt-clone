import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUserProvider } from '../Context/UserContext'

const PrivateRoute = ({ children, ...rest }) => {
    const {logged} = useUserProvider();
  return (
    <Route
      {...rest}
      render={() => {
        return logged ? children : <Redirect to='/Error'></Redirect>
      }}
    ></Route>
  )
}
export default PrivateRoute
