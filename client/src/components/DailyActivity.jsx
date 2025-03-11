import React from 'react'

const DailyActivity = () => {
  const tasks = [
    { icon: '👣', title: '1000 Steps', subtitle: 'Step', bgColor: 'bg-orange-100', textColor: 'text-orange-500' },
    { icon: '🔥', title: '40 Kkal', subtitle: 'Calories', bgColor: 'bg-blue-100', textColor: 'text-blue-500' },
    { icon: '🌙', title: '100 Score', subtitle: 'Sleep', bgColor: 'bg-yellow-100', textColor: 'text-yellow-500' }
  ];

  return (
    <div class="flex justify-center">
      <div class="flex flex-col justify-between w-4/5 bg-white rounded-2xl m-2">
        <h2 className="text-2xl font-bold pl-3 pt-2 pb-2">Daily Tasks</h2>
        <div id='task-div' className="grid grid-cols-1 md:grid-cols-3 gap-6 pl-3 pr-3 pb-2">
          {tasks.map((task, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-md p-4 flex items-center gap-4 ${task.bgColor}`}
            >
              <div
                className={`text-2xl ${task.textColor} flex items-center justify-center w-12 h-12 bg-white rounded-lg`}
              >
                {task.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p className="text-gray-500 text-sm">{task.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DailyActivity