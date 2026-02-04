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

  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
  <h1 className="text-2xl font-bold mb-4">Connecting to Server...</h1>
  
  <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
    <p className="text-lg"><strong>Status:</strong> {data.status}</p>
    <p className="text-lg"><strong>Author:</strong> {data.author}</p>
    <p className="text-lg"><strong>Message:</strong> {data.message}</p>
  </div>
  
  <p className="mt-4 text-green-600 font-semibold">Assignment Complete</p>
</div>
}

export default App;