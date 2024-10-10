import React, { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { login, clearError, selectErrorMessage } from '../../redux/AuthSlice';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Logo from '../../assets/Logo.svg';
import Footer from '../../components/Footer.';
import Notification from '../../ui/Notification';
import { RiEyeCloseFill, RiEyeCloseLine } from 'react-icons/ri';

const LoginPage = () => {
  const [staffId, setStaffId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const errorMessage = useSelector(selectErrorMessage); // Select error message from Redux

  const handleLogin = (e) => {
    e.preventDefault();
    // Clear previous error message
    // Dispatch login action with entered staffId and password
    dispatch(clearError());
    dispatch(login({ staffId, password }));
    // After successful login, navigate to dashboard
    if (errorMessage === '') {
      navigate('/dashboard');
    }
  };

  const handleCloseNotification = () => {
    dispatch(clearError()); // Clear error message in Redux
  };

  return (
    <div className="flex flex-col max-w-full w-full max-h-full h-screen bg-yellow-50"> 
      <div className='flex flex-col my-0 mx-auto items-center justify-center flex-grow gap-2'> 
        <img src={Logo} alt="Bristol Micro Finance Bank" className=" shadow-ms " />
        <h2 className="text-2xl font-bold mb-2 text-yellow-600">Bristol Micro Finance Bank</h2>
        
        {/* Notification */}
        {errorMessage && (
          <Notification message={errorMessage} onClose={handleCloseNotification} />
        )}
        
        <div className="bg-white p-9 rounded shadow-md w-full max-w-md">
          <form onSubmit={handleLogin}>
            <div className="mb-4 ">
              <label className="block mb-2 text-green-500">Staff ID</label>
              <div className="relative px-5 border outline-none rounded-lg border-yellow-500">
                <input 
                  type="text" 
                  value={staffId} 
                  onChange={(e) => setStaffId(e.target.value)}
                  className="w-full h-[64px] p-2 inset-0 outline-none "
                  placeholder="CC201234567"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 text-green-500">Password</label>
              <div className="relative px-5 border rounded-lg border-yellow-500">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-[64px] p-2 outline-none pr-10" 
                  placeholder="Enter your password"
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
                  onClick={() => setShowPassword(!showPassword)} 
                >
                  {showPassword ? (
                    <span className="material-icons">{<RiEyeCloseLine/>}</span>
                  ) : (
                    <span className="material-icons">{<RiEyeCloseFill/>}</span>
                  )}
                </button>
              </div>
            </div>
            
            <span className='block mb-2 text-sm text-gray-400'>
              <input type='checkbox' /> Keep me signed in
            </span>
            
            <Button label="Sign in" />
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LoginPage;
