export const Login = () => {

    const onSubmit = (ev) => {

        if (user.value === 'student' && user.password === `1234abc` ) {
            localStorage.setItem('authenticated', 'true')
        }
    } 

}

return (
    <div>
        <h2>This is Login Page</h2>
        <form onSubmit={onSubmit}>
            <label htmlFor="user"></label>
            <input type='user' name='user' id='user' required />

            <label htmlFor="password"></label>
            <input type='password' name='password' id='password' required />

            <button type='submit'>Log in 🚀</button>
                </form>
    </div>

)