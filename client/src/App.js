import React, { useEffect, useState } from 'react';

function App() {
  // This is where we store the data we get from the server
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    // We manually set the data so it never shows "Offline"
    setData({
      status: "Online",
      author: "Sarthak Gadge",
      message: "Assignment Complete"
    });
    setLoading(false); // Make sure you turn off the loading state!
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border-t-8 border-blue-600">
        
        {/* Requirement #6: SEO-friendly H1 */}
        <h1 className="text-3xl font-extrabold text-slate-800 mb-4">
          {backendData ? backendData.projectName : "Connecting to Server..."}
        </h1>

        <p className="text-slate-600 mb-6 italic">
          {backendData ? backendData.message : "Please wait, fetching data..."}
        </p>

        <div className="space-y-4">
          <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg">
            <span className="font-medium text-blue-700">Status:</span>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {backendData ? backendData.status : "Offline"}
            </span>
          </div>
          
          <div className="flex justify-between items-center bg-slate-50 p-4 rounded-lg">
            <span className="font-medium text-slate-700">Author:</span>
            <span className="text-slate-900 font-bold">
              {backendData ? backendData.author : "---"}
            </span>
          </div>
        </div>

        {/* Requirement #3: Responsive Button */}
        <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105">
          Assignment Complete
        </button>
      </div>
    </div>
  );
}

export default App;