import { useAuth } from "./security/AuthContext";

const LogoutComponent = () => {

  
    return (
        <div className='LogoutComponent'>
          <h1>You are logged out!</h1>
          <div>
            Thank you for using our app.
          </div>
        </div>
    )
}

export default LogoutComponent