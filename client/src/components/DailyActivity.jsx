import React, { useState } from 'react'

const DailyActivity = () => {
  const [tasks, setTasks] = useState( [
    { icon: '👣', title: '1000 Steps', subtitle: 'Step', bgColor: 'bg-orange-100', textColor: 'text-orange-500' },
    { icon: '🔥', title: '40 Kkal', subtitle: 'Calories', bgColor: 'bg-blue-100', textColor: 'text-blue-500' },
    { icon: '🌙', title: '100 Score', subtitle: 'Sleep', bgColor: 'bg-yellow-100', textColor: 'text-yellow-500' }
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [tempValue, setTempValue] = useState("");

    const handleEdit = (index) => {
      setEditIndex(index);
      setTempValue(tasks[index].value);
    };
  
    const handleChange = (e) => {
      setTempValue(e.target.value);
    };
  
    const handleSave = (index) => {
      if (tempValue !== "") {
        setTasks((prevTasks) =>
          prevTasks.map((task, i) =>
            i === index ? { ...task, value: tempValue } : task
          )
        );
      }
      setEditIndex(null);
    };
  

  return (
    <div class="flex justify-center px-4">
      <div class="flex flex-col w-full sm:w-4/5 bg-white rounded-2xl m-2 p-3 md:p-4">
        <h2 className="text-2xl font-bold pl-3 pt-2 pb-2 text-center md:text-left">Daily Tasks</h2>
        <div id='task-div' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3 pb-2">
          {tasks.map((task, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-md p-4 flex items-center gap-4 ${task.bgColor}`}
            >
              <div
                className={`text-xl md:text-2xl ${task.textColor} flex items-center justify-center w-10 md:w-12 h-10 md:h-12 bg-white rounded-lg`}
              >
                {task.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{task.title}</h3>
                
                {/* Editable Input Field */}
                {editIndex === index ? (
                  <input
                    type="number"
                    value={tempValue}
                    onChange={handleChange}
                    onBlur={() => handleSave(index)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSave(index)}
                    className="text-gray-900 text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 w-24"
                    autoFocus
                  />
                ) : (
                  <p
                    className="text-gray-500 text-sm cursor-pointer"
                    onClick={() => handleEdit(index)}
                  >
                    {task.value} {task.unit} ✏️
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DailyActivity