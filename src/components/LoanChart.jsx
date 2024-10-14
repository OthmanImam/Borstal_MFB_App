import React from 'react';  
import { LineChart, Line, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';  

const LoanChart = () => {  
  // Example data representing loan rise  
  const PaymentData = [  
    { name: 'Jan', Payment: 10 },  
    { name: 'Feb', Payment: 9 },  
    { name: 'Mar', Payment: 7 },  
    { name: 'Apr', Payment: 9 },  
    { name: 'Jun', Payment: 6 },  
    { name: 'Jul', Payment: 12 },  
  ];  

  const LoanData = [  
    { name: 'Mar', loan: 23 },  
    { name: 'Apr', loan: 9 },  
    { name: 'May', loan: 17 },  
    { name: 'Jun', loan: 9 },  
    { name: 'Jul', loan: 15 },  
    { name: 'Aug', loan: 10 },  
  ];  

  const PaybackRateData = [  
    { name: 'Jul', payback: 15 },  
    { name: 'Aug', payback: 10 },  
    { name: 'Sep', payback: 18 },  
    { name: 'Oct', payback: 11 },  
    { name: 'Nov', payback: 20 },  
    { name: 'Dec', payback: 19 },  
  ];  

  const CustomTooltip = ({ active, payload, label }) => {  
    if (active && payload && payload.length > 0) {  
      return (  
        <div className="custom-tooltip">  
          <p className="label text-green-700">{`${label}`}</p>  
          {payload.map(p => (  
            <p key={p.name} className="value text-yellow-600">{`${p.name}: ${p.value}`}</p>  
          ))}  
        </div>  
      );  
    }  
    return null;  
  };  

  const CustomDot = (props) => {  
    const { cx, cy, dataLength, index } = props;  

    if (index === dataLength - 1) {  
      return (  
        <circle cx={cx} cy={cy} r={5} fill="green" stroke="none" />  
      );  
    }  
    return null;  
  };  

  return (  
    <div className='w-full flex flex-row justify-between' style={{ textAlign: 'center' }}>  
      <div className=' w-1/3 flex flex-col'>
      <h2 style={{ fontSize: '20px', color: '#990000' }}>{'Payment'}</h2>  
      <div style={{ fontSize: '48px', color: 'green' }}>  
        +4 <span style={{ fontSize: '24px', color: 'green' }}>↑</span>  
      </div>
      <ResponsiveContainer width="100%" height={300}>  
        <LineChart data={PaymentData}>  
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />  
          <Tooltip content={<CustomTooltip />} />  
          <Line  
            type="monotone"  
            dataKey="Payment"  
            stroke="#060"  
            strokeWidth={3}  
            dot={<CustomDot dataLength={PaymentData.length} />}  
            activeDot={{ r: 8 }}  
          />  
        </LineChart>  
      </ResponsiveContainer>  
        </div>
      
      {/* Loan Chart */}  
      <div className='w-1/3'>
        <h2 style={{ fontSize: '20px', color: '#990000' }}>{'Loans'}</h2>
        <div style={{ fontSize: '48px', color: 'green' }}>  
        +47 <span style={{ fontSize: '24px', color: 'green' }}>↑</span>  
      </div>
        <ResponsiveContainer width="100%" height={300}>  
          <LineChart data={LoanData}>  
            <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />  
            <Tooltip content={<CustomTooltip />} />  
            <Line  
              type="monotone"  
              dataKey="loan"  
              stroke="#060"  
              strokeWidth={3}  
              dot={<CustomDot dataLength={LoanData.length} />}  
              activeDot={{ r: 8 }}  
            />  
          </LineChart>  
        </ResponsiveContainer>
      </div>
       

      {/* Payback Rate Chart */}  
      <div className='w-1/3'>
      <h2 style={{ fontSize: '20px', color: '#990000' }}>{'Payback Rate'}</h2> 
      <div style={{ fontSize: '48px', color: 'red' }}>  
        -12 <span style={{ fontSize: '24px', color: 'red' }}>↑</span>  
      </div> 
      <ResponsiveContainer width="90%" height={100}>  
        <LineChart data={PaybackRateData}>  
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />  
          <Tooltip content={<CustomTooltip />} />  
          <Line  
            type="monotone"  
            dataKey="payback"  
            stroke="#990000"  
            strokeWidth={3}  
            dot={<CustomDot dataLength={PaybackRateData.length} />}  
            activeDot={{ r: 8 }}  
          />  
        </LineChart>  
      </ResponsiveContainer>  
      </div>
    </div>  
  );  
};  

export default LoanChart;