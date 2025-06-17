import GoogleImage from '../../assets/images/google-icon.png'
import SubmitButton from '../SubmitButton';
import { apiClient } from '../../../api/client';
import { useNavigate } from 'react-router';


export default function Login() {
    const navigate = useNavigate();
    const LoginUser = async (data) => {
        try {
            const response = await apiClient.post('/users/login', data, {
                headers: {
                    "Content-Type":'application/json'
                }
            });
            console.log(response);
            localStorage.setItem('ACCESS_TOKEN', response.data.data.accessToken);
            navigate("/"); 

        } catch (error) {
         console.log(error);   
        }
    }

    return (
        <div className="flex h-screen">
            <div className="w-3/5 bg-bgGrey">
                <h1 className='text-center text-3xl font-bold pt-4'>Event <span className='text-primary'>Hive</span></h1>
                <h2 className='pt-4 text-center text-4xl'>Sign In to Event Hive</h2>
                <form action={LoginUser} className='w-[80%] mx-auto pt-4'>
                    <div className='flex flex-col pt-4'>
                        <label htmlFor="your-email" className='font-bold p-2'>Your Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your mail" className='w-[100%] px-6 py-2 bg-white' />
                    </div>
                    <div className='flex flex-col pt-4'>
                        <div className='flex justify-between mb-2'>
                            <label htmlFor="your-email" className='font-bold '>Your Email</label>
                            <a href="#" className='font-light'>Forgot password?</a>
                        </div>
                        <input password="password" name="password" id="password" placeholder="Enter your mail"className='w-[100%] px-6 py-2 bg-white' />
                    </div>
                    <div className='flex flex-col items-center justify-center pt-4'>
                        <SubmitButton className='mt-4 bg-primary rounded text-white w-64 px-6 py-2' title={'Sign In'} />
                        
                        </div>
                         </form>
                         <div className='flex flex-col items-center justify-center pt-4'>
                        <p className='p-8'>Or</p>
                        <button className=' bg-white w-96 px-6 py-2'> <span><img src={GoogleImage} alt="google-icon" className='w-5 h-5 align-middle inline-block' /></span> Sign Up with Google</button>
                    </div>
               
            </div>
            <div className='bg-[url(./assets/images/login.png)] bg-cover bg-center h-[100vh] w-2/5'>
              <div className='flex flex-col h-[100vh] items-center justify-center'>
                  <h1 className='text-white font-bold text-3xl'>Hello Friend</h1>
                  <p className='pt-4 text-white'>To keep connected with us provide us with your information</p>
                  <button className='pt-8 text-white bg-lightWhite px-6 py-2'>Sign Up</button>
              </div>
            </div>
        </div>
    );
}