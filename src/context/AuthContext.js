import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [Loading, setLoading] = useState(true)

    function token(token) {
        auth.signInWithCustomToken(token)
    }

    function signup(email, password) {
        auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {

        const unsubcribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubcribe
    }, [])


    const value = {
        currentUser,
        login,
        signup,
        logout,
        token,
        resetPassword,
        updateEmail,
        updatePassword,
    }

    return (
        <AuthContext.Provider value={value}>
            {!Loading && children}
        </AuthContext.Provider>
    )
}
