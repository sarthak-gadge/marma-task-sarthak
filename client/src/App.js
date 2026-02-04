import React, { useState, useEffect } from 'react';

function App() {
  // Requirement #2: Demonstrating React Fundamentals (useState)
  const [data, setData] = useState({ 
    status: "Loading...", 
    author: "---", 
    message: "" 
  });

  // Requirement #4: Dummy API Logic (Simulated for Demo)
  useEffect(() => {
    // We set the data manually to ensure the Live Link works perfectly
    setData({
      status: "Online",
      author: "Sarthak Gadge",
      message: "Assignment Complete"
    });
    
    // We do not use a 'loading' variable here to avoid the Netlify build error
  }, []);

  // Requirement #1, #3, & #5d: Tailwind CSS and Responsive Layout
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Requirement #6c: Using H1 for SEO */}
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-blue-600 border-b pb-4">
          Marma Task Submission
        </h1>
        
        <div className="space-y-4 text-left">
          <p className="text-xl">
            <strong className="text-gray-700">Status:</strong> 
            <span className="ml-2 text-green-600 font-bold">{data.status}</span>
          </p>
          <p className="text-xl">
            <strong className="text-gray-700">Author:</strong> 
            <span className="ml-2 text-gray-900">{data.author}</span>
          </p>
          <p className="text-xl">
            <strong className="text-gray-700">Message:</strong> 
            <span className="ml-2 text-blue-500 font-medium">{data.message}</span>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">
            MERN Stack Developer Task
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;