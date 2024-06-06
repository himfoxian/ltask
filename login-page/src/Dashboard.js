import React from 'react';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <div className="w-full max-w-5xl bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="User"
              className="rounded-full border-2 border-gray-600"
            />
            <div className="ml-4">
              <h2 className="text-xl font-bold">Himanshu Yadav</h2>
              <p>Email: him@fpl.com</p>
              <p>Qualification: M.Tech</p>
              <p>Experience: 2 years</p>
              <p>Birthday: 20 March</p>
            </div>
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">
            Logout
          </button>
        </div>
        <div className="flex justify-center items-center mb-6">
          <div className="w-64 h-64">
            {/* Placeholder for chart, replace with actual chart component */}
            <div className="bg-purple-400 w-full h-full rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">Total Tickets: 30</span>
            </div>
          </div>
        </div>
        <p className="text-center text-lg mb-6">Performance Average: 80%</p>
        <div className="flex justify-around mb-6">
          <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
            WBS
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
            Closed Tickets
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
            Team Tickets
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
            Leave Tickets
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
            Weak off Tickets
          </button>
        </div>
        <div className="bg-gray-700 rounded-lg p-4">
          <h3 className="text-center text-xl font-bold mb-4">Upcoming Events</h3>
          <div className="flex justify-around">
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
              Annual Meet
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
              Any Function
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
              IT News
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
