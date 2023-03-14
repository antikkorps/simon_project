import LoginButton from '../components/LoginButton/LoginButton';
import LogoutButton from '../components/LogoutButton/LogoutButton';

function Root() {
  return (
    <>
      <h1 className='text-center mt-5'>Outil d'analyse TC</h1>
      <LoginButton />
      <LogoutButton />
    </>
  );
}
export default Root;
