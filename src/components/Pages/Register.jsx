import GoogleImage from '../../assets/images/google-icon.png';


export default function Register() {
  return (
    <div className='flex h-full '>
      <div className='bg-[url(./assets/images/register.png)] bg-cover bg-center w-2/5 h-[100vh]'>
        <div className='text-white flex flex-col items-center justify-center h-[90vh]'>
          <h2 className='text-3xl font-bold'>Welcome Back</h2>
          <p className='p-4 font-medium'>To keep connected with us provide us with your information</p>
          <button className='pt-4 bg-lightWhite py-2 px-8 rounded'> Sign In</button>
        </div>

      </div>
      <div className='flex flex-col  w-3/5 bg-bgGrey h-screen '>
        <h2 className='text-3xl text-center font-bold'>Event <span className='text-primary'>Hive</span></h2>
        <h2 className=' pt-3 text-4xl font-medium text-center'>Sign Up To Event Hive</h2>
        <form className='pt-4 w-[80%] mx-auto '>
          <div className='flex flex-col p-4'>
            <label htmlFor="name" className='p-2 font-medium'>YOUR NAME</label>
            <input type="text" name="text" id="text" placeholder='Your Mail' className='w-[80%]  px-4 py-2 border-none bg-white' />
          </div>
          <div className='flex flex-col p-4'>
            <label htmlFor="name" className='p-2 font-medium'>YOUR NAME</label>
            <input type="text" name="text" id="text" placeholder='Your Mail' className='w-[80%]  px-4 py-2 border-none bg-white' />
          </div>
          <div className='flex flex-col p-4'>
            <label htmlFor="password" className='p-2 font-medium'>PASSWORD</label>
            <input type="password" name="password" id="password" placeholder='Enter your password' className='w-[80%] px-4 py-2 border-none bg-white' />
          </div>
          <div className='flex flex-col p-4'>
            <label htmlFor="password" className='p-2 font-medium'>CONFIRM PASSWORD</label>
            <input type="password" name="password" id="password" placeholder='Enter your password' className='w-[80%] border-none px-4 py-2 bg-white' />
          </div>
          <div className='p-4 flex flex-col items-center justify-center'>
            <button className='bg-primary rounded w-64 px-6 py-2 text-white '>Sign Up</button>
            <h2 className='p-8 font-light'>Or</h2>
            <button> <img src={GoogleImage} alt="google-icon" className='w-5 h-5 align-middle inline' />  <a href="https://www.google.com" className=' px-4 py-2'><button>Sign Up with Google</button></a></button>
          </div>
        </form>
      </div>
    </div>
  );
}