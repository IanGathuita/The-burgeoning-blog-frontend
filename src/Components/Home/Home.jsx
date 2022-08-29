import { Login } from '../Login/Login';
import { SignUp } from '../SignUp/SignUp';
import { BlogPreview } from '../BlogPreview/BlogPreview';
import './Home.css'
export const Home = () => {


    const switchTab = (e) => {
        /*ToDo : improve finding elems when loaded*/
        const clickedElementId = e.target.id;
        const loginForm = document.getElementById('login-form');
        const signUpForm = document.getElementById('signup-form');

        if (clickedElementId === 'login-tab') {
            loginForm.hidden = false;
            signUpForm.hidden = true;
        }
        if (clickedElementId === 'signup-tab') {
            loginForm.hidden = true;
            signUpForm.hidden = false;
        }

    }
    return (
        <>
            <section>
                <div>
                    <h3>Welcome to the  number #1 blog site in Kenya</h3>
                </div>
            </section>
            <section>
                <div className="login-signup">
                    <div className="login-signup-tabs">
                        <h3 id='login-tab' onClick={(e) => switchTab(e)}>Log in</h3>
                        <h3 id='signup-tab' onClick={(e) => switchTab(e)}>Sign up</h3>
                    </div>
                    <Login></Login>
                    <SignUp></SignUp>
                </div>
            </section>
            <section>
                <div>
                    <h2>Top stories</h2>
                    <BlogPreview/>
                    <BlogPreview/>
                    <BlogPreview/>
                </div>                
            </section>
        </>
    );
}