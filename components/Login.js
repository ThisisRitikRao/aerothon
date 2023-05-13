
import React, { useState } from "react";
import styles from '../styles/login.module.css';
import apple from '../components/img/social/apple.svg'
import google from '../components/img/social/google.svg'
import facebook from '../components/img/social/facebook.svg'
import Image from 'next/legacy/image';
import { Auth } from 'aws-amplify';
// import { CognitoUser } from '@aws-amplify/auth';
import OtpInput from 'react-otp-input';
import Swal from 'sweetalert';

import { CognitoUserPool, CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

// Auth.configure({
//   userPoolId: 'Replace with user Pool',
//   userPoolWebClientId: 'Replace Web Client',
//   region: 'ap-south-1'
// });


const login = () => {


  function handleSuccess(message_sent) {
    Swal('Success', String(message_sent), 'success');
  }
  
  function handleError(error) {
    Swal('error', String(error), 'error');
  }


  const [shake, setShake] = useState(false);
  const[login_or_register,setLogin] = useState(true);
  const [email_sent, setState] = useState(false);
  const [otp, setOtp] = useState('');
  const [email_added, add_email] = useState('');
  const [password_sign_up,setPassord] = useState('')

  async function signUpWithEmail(username, password, email) {
    try {
      // Sign up the user with their email address as the username
      Auth.signUp({
  username: email,
  password: password,
  attributes: {
    email: email,
  },
}).then(() => {

  console.log('User signed up successfully!');
  add_email(email);
  setPassord(password);
  setState(true);
  handleSuccess('OTP sent')
}).catch((error) => {
  handleError(error)
  console.log('Error signing up user:', error);
});
  
      // Get the user object for the newly created user
      // const cognitoUser = new CognitoUser({
      //   Username: username,
      //   Pool: Auth.userPool,
      // })
      console.log(`Verification code sent to ${email}`);
    } catch (error) {
      handleError(error)
      console.log(`Error signg up user: ${error.message}`);
    }
  }

  function handleSignUp(event) {
    event.preventDefault();
  
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    signUpWithEmail(email,password,email);
  }


  async function verifyUserLogin(event){
    
    event.preventDefault();
  
    const email = event.target.email_login.value;
    const password = event.target.password_login.value;

    console.log(email)
    console.log(password)

    try {
      const user = await Auth.signIn(email, password);
      const session = await Auth.currentSession();
      const accessToken = session.getAccessToken().getJwtToken();
      
      localStorage.setItem('session_splendid', JSON.stringify(session));

      window.location.href = "/student_dashboard";
    } catch (error) {
      handleError('Incorrect UserName or Password')
      console.log('Error logging in', error);
    }

  };


  async function handleConfirmation()
  {
    try {
      await Auth.confirmSignUp(email_added, otp);
      console.log('User confirmed');

      try {
        const user = await Auth.signIn(email_added, password_sign_up);
        
        const session = await Auth.currentSession();
        const accessToken = session.getAccessToken().getJwtToken();
        localStorage.setItem('session_splendid', JSON.stringify(session));

        console.log('User logged in', user);
        window.location.href = "/student_dashboard";
      } catch (error) {
        handleError(error);
        console.log('Error logging in', error);
      }

    } catch (error) {
      
      setShake(true);
      setTimeout(() => setShake(false), 1000);
      
      setTimeout(() => handleError(error), 1000);
      

      // setTimeout(() => setShake(false), 10000000);
      console.log('Error confirming user', error);
    }
  };


  function setLoginState()
  {
    setLogin(!login_or_register)
  }











  return (
    <div  className={`bg-[#030569] bg-opacity-90 ${styles.custom_image}`}>

<div>
      <div className={`${login_or_register?'hidden':'block'}`}>
        <div className="flex items-center justify-center h-screen p-2">
          <div className="bg-[#F5F5F5] bg-opacity-50 rounded-lg">
            <div className="box h-fit w-fit p-2 sm:p-8 md:p-12 ">
              <div className={`${email_sent?'hidden':'block'}`}>
                <div className='text-[1.2rem] sm:text-[1.375rem] md:text-[2.375rem] font-[600] mt-6 text-center'>Register Your Account</div>
                <div className='text-[0.6rem] sm:text-[0.7rem] md:text-[1.1rem] font-[600] mt-2 text-center'>
                  <span className="font-[400] text-opacity-50">Already have Account?</span>
                <span className="ml-2" onClick={setLoginState}>Click to Login</span>
                </div>
                
                <form onSubmit={handleSignUp}>
                
                    <input type="email" name="email" className='w-full p-2 rounded-lg md:rounded-[17px] mt-4' placeholder='Enter Your Email'></input>
                    <input type="password" name="password" className='w-full p-2 rounded-lg md:rounded-[17px] mt-4' placeholder='Enter Your Password'></input>
                    
                    <div className="grid justify-items-stretch mt-4">
                        <button className="justify-self-center  bg-[#FDAF4D] lg:hover:bg-[#E48207] font-semibold py-1 px-4 rounded-[10px] rounded shadow text-white">
                          Get Otp
                        </button>
                    </div>

                </form>
                
                <div className="grid justify-items-stretch mt-4">
                    
                    <div className='justify-self-center mt-8 text-[1.25rem] font-[400]'>Or Sign up using</div>
                    <div className='justify-self-center mt-2 text-[1.25rem] font-[400]'>
                      <div className='flex'>
                      <Image
                            src={apple}
                            alt="Picture of the author"
                            height={40}
                            width={40}
                      />
                      <div className='w-2'></div>
                      <Image
                            src={google}
                            alt="Picture of the author"
                            height={40}
                            width={40}
                      />

                      <div className='w-2'></div>
                      
                      <Image
                            src={facebook}
                            alt="Picture of the author"
                            height={40}
                            width={40}
                      />

                      </div>
                    </div>
                    
                </div>
              </div>

              <div className={`${email_sent?'block':'hidden'}`}>
                  <div className='text-[1.2rem] sm:text-[1.375rem] md:text-[2.375rem] font-[600] mt-24 text-center'>Enter the OTP</div>
                  
                  <div className="hidden smd:block">
                    <div className={shake ? `${styles.shake}` : ''}>
                      <OtpInput
                          value={otp}
                          onChange={setOtp}
                          numInputs={6}
                          renderSeparator={<span>-</span>}
                          renderInput={(props) => <input {...props} />}
                          inputStyle={{
                            width: '50px',
                            height: '50px',
                            margin: '10px',
                            fontSize: '20px',
                            borderRadius: '5px',
                            border: '2px solid #ccc',
                            outline: 'none',
                            textAlign: 'center',
                          }}
                          hasErrored={shake}
                          errorStyle={{ borderColor: 'red' }}
                          focusStyle={{
                            border: '2px solid #000',
                          }}
                        />
                    </div>
                  </div>

                  <div className="block smd:hidden">
                    <div className={shake ? `${styles.shake}` : ''}>
                      <OtpInput
                          value={otp}
                          onChange={setOtp}
                          numInputs={6}
                          renderSeparator={<span>-</span>}
                          renderInput={(props) => <input {...props} />}
                          inputStyle={{
                            width: '30px',
                            height: '30px',
                            margin: '2px',
                            fontSize: '20px',
                            borderRadius: '5px',
                            border: '2px solid #ccc',
                            outline: 'none',
                            textAlign: 'center',
                          }}
                          hasErrored={shake}
                          errorStyle={{ borderColor: 'red' }}
                          focusStyle={{
                            border: '2px solid #000',
                          }}
                        />
                    </div>
                  </div>

                    <div className="grid justify-items-stretch mt-4">
                        <button className="justify-self-center  bg-[#FDAF4D] lg:hover:bg-[#E48207] font-semibold py-1 px-4 rounded-[10px] rounded shadow text-white" onClick={handleConfirmation}>
                          Verify
                        </button>
                    </div>
            {/* </form> */}


              </div>

            </div>
          </div>
        </div>
      </div>
      
      <div className={`${login_or_register?'block':'hidden'}`}>
        <div className="flex items-center justify-center h-screen p-2">
          <div className="bg-[#F5F5F5] bg-opacity-50 rounded-lg">
            <div className="box h-fit w-fit p-2 sm:p-8 md:p-12 ">
              <div>
                <div className='text-[1.2rem] sm:text-[1.375rem] md:text-[2.375rem] font-[600] mt-6 text-center'>Login Your Account</div>
                <div className='text-[0.6rem] sm:text-[0.7rem] md:text-[1.1rem] font-[600] mt-2 text-center'>
                  <span className="font-[400] text-opacity-50">New here?</span>
                <span className="ml-2" onClick={setLoginState}>Click to Register</span>
                </div>
                <form onSubmit={verifyUserLogin}>
                
                    <input type="email" name="email_login" className='w-full p-2 rounded-lg md:rounded-[17px] mt-4' placeholder='Enter Your Email'></input>
                    <input type="password" name="password_login" className='w-full p-2 rounded-lg md:rounded-[17px] mt-4' placeholder='Enter Your Password'></input>
                    
                    <div className="grid justify-items-stretch mt-4">
                        <button className="justify-self-center  bg-[#FDAF4D] lg:hover:bg-[#E48207] font-semibold py-1 px-4 rounded-[10px] rounded shadow text-white">
                          Login
                        </button>
                    </div>

                </form>
                
                <div className="grid justify-items-stretch mt-4">
                    
                    <div className='justify-self-center mt-8 text-[1.25rem] font-[400]'>Or Sign up using</div>
                    <div className='justify-self-center mt-2 text-[1.25rem] font-[400]'>
                      <div className='flex'>
                      <Image
                            src={apple}
                            alt="Picture of the author"
                            height={40}
                            width={40}
                      />
                      <div className='w-2'></div>
                      <Image
                            src={google}
                            alt="Picture of the author"
                            height={40}
                            width={40}
                      />

                      <div className='w-2'></div>
                      
                      <Image
                            src={facebook}
                            alt="Picture of the author"
                            height={40}
                            width={40}
                      />

                      </div>
                    </div>
                    
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>



</div>

    </div>
  )
}

export default login
