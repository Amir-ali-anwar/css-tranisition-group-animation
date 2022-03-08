import React from 'react'

const useAuth = (initialstate) => {
    const [isAuth, Setisauth] = React.useState(initialstate)
    function login() {
        setTimeout(() => {
            Setisauth(true)
        }, 1000)
    }
    function logout() {
        setTimeout(() => {
            Setisauth(true)
        }, 1000)
    }
    return [isAuth,login,logout]
}

export default useAuth