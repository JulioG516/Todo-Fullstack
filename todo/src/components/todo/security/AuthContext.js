import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";
import { apiClient } from "../api/ApiClient";

// 1: Create a context
export const AuthContext = createContext()


// Simplify the use hook, by making useAuth return the context
// Simplifica fazendo useAuth retornar o authcontext
export const    useAuth = () => useContext(AuthContext)





// 2: Share the created context with other components
export default function AuthProvider({ children }) {
    
    // 3: Put some state into the context
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)
    


    // function login(username, password) {
    //     if (username === "in28minutes" && password === "dummy") { 
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     }
    //     else {
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    // }

    async function login(username, password) {

        const baToken = 'Basic ' + window.btoa(username + ":" + password)   // Base 64 encoding

        try {
            const response = await executeBasicAuthenticationService(baToken)    

            if (response.status == 200) { 
                setAuthenticated(true)
                setUsername(username)
                setToken(baToken)

                apiClient.interceptors.request.use(     // Adiciona Token de autorização em todos os headers
                    (config) => {
                        console.log("intercepting and adding an token")
                        config.headers.Authorization=baToken
                        return config
                    } 
                )
                return true
            }
            else {
                logout()
                return false
            }
        }
            catch(error) {
                logout()
                return false
            }
    }



    function logout() {
        setAuthenticated(false)
        setUsername(null)
        setToken(null)
    }

    const valueToBeShared = {isAuthenticated, login, logout, username, token}

    return (
        <AuthContext.Provider value={valueToBeShared}>
            {children}
        </AuthContext.Provider>
    )
}
 