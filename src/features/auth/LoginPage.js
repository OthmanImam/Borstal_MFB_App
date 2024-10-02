import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux';
import { login } from '../../redux/AuthSlice';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Logo from '../../assets/Logo.svg';
import Footer from '../../components/Footer.';
import PasswordInput from '../../ui/PasswordInput';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dispatch login action with dummy user data
    dispatch(login({ email }));
    navigate('/');
  };

  return (
    <div className="flex flex-col justify-between h-screen bg-yellow-50"> 
      <div className='flex flex-col items-center flex-grow gap-4 w-full mb-32'> {/* Adjusted gap for responsiveness */}
        <img src={Logo} alt="Bristol Micro Finance Bank" className="h-20 w-auto mb-2 shadow-ms mt-16" />
        <h2 className="text-2xl font-bold mb-2 text-yellow-600">Bristol Micro Finance Bank</h2>
        
        {/* Form container */}
        <div className="bg-white p-9 rounded shadow-md w-full max-w-md"> {/* Responsive width */}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block mb-2 text-green-700">Staff ID</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[64px] p-2 border-solid border-2 border-yellow-700 rounded"
                placeholder="CC201234567"
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 text-green-700">Password</label>
              <PasswordInput password={password} setPassword={setPassword} />
            </div>
            
            <span className='block mb-2 text-sm text-gray-400'>
              <input type='checkbox' /> Keep me in
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
