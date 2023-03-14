import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className='container col-12 align-self-center d-flex justify-content-center'>
        <button
          className='btn btn-primary btn-sm mt-5'
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      </div>
    </>
  );
};

export default LoginButton;
