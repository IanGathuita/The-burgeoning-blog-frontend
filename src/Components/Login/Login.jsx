import { useState } from "react";
export const Login = () => {

    let loginObject = {
        'email' : {value: '', valid:false},
        'password': {value: '', valid:false}
    }

    const patterns = {
        email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        password: /^[\w@#]{8,16}$/
    }

    const [loginState,setLoginState] = useState(loginObject);

    const handleInput = ({target}) => {
        const id = target.id;
        switch(id){
            case 'reader-email' : {
                let newEmail = {...loginState.email,value:target.value}
                let newLoginState = {...loginState, email:newEmail};
                setLoginState(newLoginState);
                break;
            };
            case 'reader-password' : {
                let newPassword = {...loginState.password, value:target.value}
                let newLoginState = {...loginState, password:newPassword};
                setLoginState(newLoginState);
                break;
            }
            default: return;
        }
        console.log(loginState);
    }

    const validateInput = ({target},pattern) => {
        const id = target.id;
        const input = target.value;
        const stateName = id.substr(7);
        if(pattern.test(input)){
            target.style.borderColor = 'green';
            target.style.outlineColor = 'green';
            target.nextElementSibling.style.display = 'none';
            let valid = {...loginState[`${stateName}`], valid: true};
            setLoginState({...loginState, [stateName] : valid});
        }
        else{
            target.style.borderColor = 'red';
            target.style.outlineColor = 'red';
            target.nextElementSibling.style.display = 'block';
            let valid = {...loginState[`${stateName}`], valid:false};
            setLoginState({...loginState, [stateName] : valid});
        }     

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('state is ',loginState)
        for(let key in loginState){
            if(loginState[key].valid !== true){
                console.log('All inputs are not valid');
                return;
            }
        }
        console.log('All are valid');
    }
    
    return(
        <>
        <form id ='login-form' onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input onChange={e => handleInput(e)} onKeyUp={e => validateInput(e, patterns.email)} id="reader-email" />
            <p className='error'>Invalid email</p>
            <label htmlFor="" >Password</label>
            <input onChange={e => handleInput(e)} onKeyUp={e => validateInput(e,patterns.password)} type='password' id='reader-password'/>
            <p className ='error'>Invalid password</p>
            <input type='submit' value={"Log In"} />
        </form>
        </>
    );
}