const Login = () => {

    const onSubmit = (ev) => {

        ev.preventDefault();

        const user = ev.target.element.user.value;
        const password = ev.target.element.password.value;

        if (user === 'student' && password === `1234abc` ) {
            localStorage.setItem('authenticated', 'true')
        }
    } 

}

return (
    <div>
        <h2>This is Login Page</h2>
        <form onSubmit={onSubmit}>
            <label htmlFor="user"></label>
            <input type='text' name='user' id='user' required />

            <label htmlFor="password"></label>
            <input type='password' name='password' id='password' required />

            <button type='submit'>Log in 🚀</button>
                </form>
    </div>

)

export default Login