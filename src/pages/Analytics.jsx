import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../ui/Card';
import CardO from '../components/Card';
import { cardData } from '../redux/store';
import { LoanApplicationChart } from '../ui/Chart';
import { setSelectedTask, selectSelectedTask } from '../redux/TaskSlice'; // Adjust the path as necessary
import LoanChart from '../components/LoanChart';
import SortingInput from '../ui/SortingInput';

const priorities = [
  { id: 1, label: 'Finish customer update', status: 'URGENT', statusColor: 'bg-red-500' },
  { id: 2, label: 'Create new customer account', status: 'NEW', statusColor: 'bg-green-500' },
  { id: 3, label: 'Update loan report', status: 'DEFAULT', statusColor: 'bg-gray-300' },
];

function Analytics() {
  const dispatch = useDispatch();
  const selectedTask = useSelector(selectSelectedTask); // Corrected selector

  const handleTaskSelect = (id) => {
    dispatch(setSelectedTask(id)); // Dispatches action to set selected task in Redux store
  };

  const analyticsData = cardData.filter(card => ![6, 5, 4].includes(card.id));

  return (
    <div>
      <div className='flex flex-row justify-between mb-7'>
        <h1 className="text-2xl font-semibold text-red-900 mb-4">Analysis Dashboard</h1> 
      <SortingInput />
        {/* <div className='flex flex-row border border-gray-200 bg-slate-100 rounded-lg '>
          <input type="text" className='bg-transparent m-3' placeholder='Show:' value='Show: Weekly Analysis' />
          <button className="ml-2 bg-yellow-400 px-8 text-black">{<BiDownArrow />}</button>
        </div> */}
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {analyticsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            value={card.value}
            trend={card.trend}
            icon={card.icon}
            analytic={card.analytic}
          />
        ))}
      </div>

      {/* Chart Section */}
      <div className="flex flex-col md:flex-row justify-between gap-5 my-10 border-none rounded-lg">
        <div className="min-w-screen md:w-1/2 border p-5 rounded-lg">
          <h2 className="text-red-500 text-xl font-semibold mb-4">Loan Application Chart</h2>
          <LoanApplicationChart />
        </div>

        {/* Priority Cards */}
        <div className="min-w-screen md:w-1/2 border p-5 rounded-lg">
          {/* Card Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-red-600 font-semibold text-lg">Priorities</h3>
            <button className="text-red-500 text-sm font-semibold">View all</button>
          </div>

          {/* Create New Task */}
          <div className="flex justify-between items-center mb-4 text-gray-400">
            <span>Create new task</span>
            <button className="flex items-center justify-center w-8 h-8 bg-yellow-400 rounded-full">
              <span className="text-white font-bold text-lg">+</span>
            </button>
          </div>

          {/* Task List */}
          <div className="space-y-4">
            {priorities.map((task) => (
              <label
                key={task.id}
                className="flex justify-between border mb-0 border-x-0 border-y-slate-200 py-5 items-center cursor-pointer"
                onClick={() => handleTaskSelect(task.id)}
              >
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="task"
                    className="form-radio h-4 w-4 text-gray-600"
                    checked={selectedTask === task.id} // Use selectedTask from Redux store
                    onChange={() => handleTaskSelect(task.id)} // Ensure state is updated on input change
                  />
                  <span className="text-gray-700">{task.label}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-white text-xs ${task.statusColor}`}>
                  {task.status}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Chart Briefing Section */}
      <CardO
        heading={'Chart Briefing'}
        body={
          <>
            <div className='w-1/5'>
              <LoanChart />
            </div>
            <div className='w-1/5'>
              <LoanChart />
            </div>
            <div className='w-1/5'>
              <LoanChart />
            </div>
          </>
        }
      />
    </div>
  );
}

export default Analytics;
