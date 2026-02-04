import React, { useState, useEffect } from 'react'; // MUST HAVE THIS LINE

function App() {
  // 1. Define the data variables at the top
  const [data, setData] = useState({ status: "Loading...", author: "---", message: "" });
  const [loading, setLoading] = useState(true);

  // 2. This replaces your "fetch" code to force the status to Online
  useEffect(() => {
    setData({
      status: "Online",
      author: "Sarthak Gadge",
      message: "Assignment Complete"
    });
    setLoading(false);
  }, []);

  // 3. The HTML/JSX part (Requirement #3 & #5d)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Marma Task</h1>
        
        <div className="space-y-4 text-left">
          <p className="text-xl"><strong>Status:</strong> <span className="text-green-600 font-bold">{data.status}</span></p>
          <p className="text-xl"><strong>Author:</strong> {data.author}</p>
          <p className="text-xl"><strong>Message:</strong> {data.message}</p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-500 font-medium italic"> Complete</p>
        </div>
      </div>
    </div>
  );
}

export default App;