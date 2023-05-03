import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './security/AuthContext'

const  LoginComponent = () => {

    // Use state to storage the user and password
    const [username, setUsername] = useState('achilles')
    const [password, setPassword] = useState('')

    // Show Message for authentication
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate();     // Navigate through other links

    const authContext = useAuth()


    // update the state via the onChange input
    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    async function handleSubmit(event) {
        if (await authContext.login(username, password)) {    
            navigate(`/welcome/${username}`)
        }
        else {
            setShowErrorMessage(true)
        }
    }



    
    return (
        <div className='Login'>
            <h1>Time to Login!</h1>
            {showErrorMessage && <div>Authenticated Failed. Please check your credentials</div>}
            <div className='LoginForm'>
                <div>
                    <label>Username</label>
                                                        {/* // Controlled Component */}
                    <input type='text' name='username' value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type='button' name='login'onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent