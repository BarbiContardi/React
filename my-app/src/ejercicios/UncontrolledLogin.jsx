export default function UncontrolledLogin(){
      return(
        <form>
            <h1>My Uncontrolled Form</h1>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <input type="checkbox" name="session"/>
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}