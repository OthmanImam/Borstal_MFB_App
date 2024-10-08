import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice'; // Correct import for authReducer
import taskReducer from './TaskSlice'; // Correct import for taskReducer
import { BiLoaderCircle, BiWallet } from 'react-icons/bi';
import { AiOutlineCustomerService } from 'react-icons/ai';
import { PiClockCounterClockwiseFill } from 'react-icons/pi';

const store = configureStore({
  reducer: {
    auth: authReducer, // Use authReducer from AuthSlice
    task: taskReducer, // Use taskReducer from TaskSlice
  },
});

export const cardData = [
  { id: 1, title: "Total Funds", value: "₦28,000,000", trend: "+10.83%", icon: <BiWallet className="h-6 w-8 text-gray-500" />, analytic: "Analytics for last week" },
  { id: 2, title: "Active Loans", value: "₦250,000", trend: "-3.21%", icon: <BiLoaderCircle className="h-6 w-8 text-gray-500" />, analytic: "Analytics for last week" },
  { id: 3, title: "Pending Loans", value: "₦750,250", trend: "-2.71%", icon: <PiClockCounterClockwiseFill className="h-6 w-8 text-gray-500" />, analytic: "Analytics for last week" },
  { id: 4, title: "New Accounts", value: "10,183", trend: "+10.83%", icon: <AiOutlineCustomerService className="h-6 w-8" />, analytic: "Analytics for last week" },
  { id: 5, title: "Data Analysis", value: "10,183", trend: "+10.83%", icon: <BiWallet className="h-6 w-8 text-gray-500" />, analytic: "Analytics for last week" },
  { id: 6, title: "Total Customers", value: "15,158", trend: "+10.83%", icon: <BiWallet className="h-6 w-8 text-gray-500 " />, analytic: "Analytics for last week" },
  { id: 7, title: "Loan Request", value: "10,183", trend: "+10.83%", icon: <BiWallet className="h-6 w-8 text-gray-500" />, analytic: "Analytics for last week" },
];





export default store;

