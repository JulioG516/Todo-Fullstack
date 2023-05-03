import {useParams, Link} from 'react-router-dom'
import { useState } from 'react'
import {  retrieveHelloWorldPathVariable } from './api/HelloWorldApiService'
import { useAuth } from './security/AuthContext'

const WelcomeComponent = () => {
    const {username} = useParams()

    const [message, setMessage] = useState(null)

    const authContext = useAuth();
    const token = authContext.token;

 

    // function callHelloWorldRestApi()  {

    //     retrieveHelloWorldPathVariable("Julio", token)
    //         .then((response) => sucessfulResponseBean(response))    // OK - 200
    //         .catch((error) => errorResponse(error))
    //         .finally(() => console.log("cleanup"))

    // }

    // function sucessfulResponse(response) {
    //     console.log(response)
    //     setMessage(response.data)
    // }

    function sucessfulResponseBean(response) {
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }

    return (
        <div className='WelcomeComponent'>
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
  
            <div className="text-info">{message}</div>
        </div>
    )
}

export default WelcomeComponent