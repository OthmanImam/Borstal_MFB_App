
const priorities = [
  { id: 1, label: 'Finish customer update', status: 'URGENT', statusColor: 'bg-red-500' },
  { id: 2, label: 'Create new customer account', status: 'NEW', statusColor: 'bg-green-500' },
  { id: 3, label: 'Update loan report', status: 'DEFAULT', statusColor: 'bg-gray-300' },
];

const PrioritiesCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      {/* Card Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-red-600 font-semibold text-lg">Priorities</h3>
        {/* <a href="#" className="text-red-500 text-sm font-semibold">View all</a> */}
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
          <div key={task.id} className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <input type="radio" name="task" className="form-radio h-4 w-4 text-gray-600" />
              <span className="text-gray-700">{task.label}</span>
            </div>
            <span className={`px-3 py-1 rounded-full text-white text-xs ${task.statusColor}`}>
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrioritiesCard;
