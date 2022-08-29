import { useState } from "react";

export const SignUp = () => {

    const patterns = {
        email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        password: /^[\w@#]{8,16}$/,
        name: /\w{1,20}/
    }

    const signupObject = {
        fName:{value:'', valid:false},
        lName:{value:'', valid:false},
        email:{value:'', valid:false},
        password:{value:'', valid:false},
        confirmPassword:{value:'', valid:false},
        interests:{value:'', valid:false},
    }

    const [signupState,setSignupState] = useState(signupObject);

    const handleInput = ({target}) => {
        const id = target.id;
        switch(id){
            case 'fName' : {
                let newFName = {...signupState.fName,value:target.value}
                let newSignupState = {...signupState, fName:newFName};
                setSignupState(newSignupState);
                break;
            };
            case 'lName' : {
                let newLName = {...signupState.lName,value:target.value}
                let newSignupState = {...signupState, lName:newLName};
                setSignupState(newSignupState);
                break;
            };
            case 'email' : {
                let newEmail = {...signupState.email,value:target.value}
                let newSignupState = {...signupState, email:newEmail};
                setSignupState(newSignupState);
                break;
            };
            case 'password' : {
                let newPassword = {...signupState.password, value:target.value}
                let newSignupState = {...signupState, password:newPassword};
                setSignupState(newSignupState);
                break;
            }
            case 'confirmPassword' : {
                let newConfirmPassword = {...signupState.confirmPassword,value:target.value}
                let newSignupState = {...signupState, confirmPassword:newConfirmPassword};
                setSignupState(newSignupState);
                break;
            };
            case 'interests' : {
                let newInterests = {...signupState.interests,value:target.value}
                let newSignupState = {...signupState, interests:newInterests};
                setSignupState(newSignupState);
                break;
            };
            default: return;
        }
        console.log(signupState);
    }

    const validateInput = ({target},pattern) => {
        const id = target.id;
        const input = target.value;
        if(pattern.test(input)){
            target.style.borderColor = 'green';
            target.style.outlineColor = 'green';
            target.nextElementSibling.style.display = 'none';
            let valid = {...signupState[`${id}`], valid: true};
            setSignupState({...signupState, [id] : valid});
        }
        else{
            target.style.borderColor = 'red';
            target.style.outlineColor = 'red';
            target.nextElementSibling.style.display = 'block';
            let valid = {...signupState[`${id}`], valid:false};
            setSignupState({...signupState, [id] : valid});
        }     

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('state is ', signupState)
        for(let key in signupState){
            if(signupState[key].valid !== true){
                console.log('All inputs are not valid');
                return;
            }
        }
        console.log('All are valid');
        
    }

    return(
        <>
        <form id="signup-form" hidden  onSubmit={handleSubmit}>
            <label htmlFor="" >First name</label>
            <input onChange={e => handleInput(e)}  onKeyUp={e => validateInput(e, patterns.name)} id="fName"></input>
            <p className='error'>Invalid first name</p>
            <label htmlFor="">Last name</label>
            <input onChange={e => handleInput(e)}  onKeyUp={e => validateInput(e, patterns.name)} id="lName"></input>
            <p className='error'>Invalid last name</p>
            <label htmlFor="">Email</label>
            <input onChange={e => handleInput(e)}  onKeyUp={e => validateInput(e, patterns.email)} id="email"></input>
            <p className='error'>Invalid email</p>
            <label htmlFor="">Password</label>
            <input onChange={e => handleInput(e)}  onKeyUp={e => validateInput(e, patterns.password)} type='password' id="password"></input>
            <p className='error'>Invalid password</p>
            <label htmlFor="">Confirm password</label>
            <input onChange={e => handleInput(e)}  onKeyUp={e => validateInput(e, patterns.password)} type='password' id="confirmPassword"></input>
            <p className='error'>Invalid password</p>
            <label htmlFor="">Interests</label>
            <input onChange={e => handleInput(e)}  onKeyUp={e => validateInput(e, patterns.name)} id="interests"></input>
            <p className='error'>Invalid interests</p>
            <input type='submit' value={"Sign up"}/>
        </form>
        </>
    );
}