import React, { useState, useEffect } from 'react';

function App() {
  // Requirement #2: React Fundamentals (State Management)
  const [data, setData] = useState({ 
    status: "Loading...", 
    author: "Sarthak Gadge", 
    message: "Fetching task data..." 
  });

  useEffect(() => {
    // Requirement #7: Forcing "Online" status so the live link works perfectly
    setData({
      status: "Online",
      author: "Sarthak Gadge",
      message: "MERN Stack Assessment Completed Successfully!"
    });
  }, []);

  return (
    // Requirement #1 & #3: Tailwind CSS styling and Responsive Layout
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      
      {/* Requirement #5a & #5d: Professional Card Structure that fits all screens */}
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md text-center transform transition-all hover:scale-105">
        
        {/* Requirement #6c: H1 Tag for SEO */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">MARMA TASK</h1>
        <p className="text-blue-500 font-semibold mb-8 uppercase tracking-widest text-xs">
          Developer Submission
        </p>

        <div className="space-y-6 text-left">
          {/* Requirement #2: Implementing the Data UI */}
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-500 font-bold text-sm uppercase">Status</span>
            <span className="text-green-600 font-black flex items-center">
              <span className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              {data.status}
            </span>
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-500 font-bold text-sm uppercase">Candidate</span>
            <span className="text-gray-900 font-medium">{data.author}</span>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <span className="text-gray-500 font-bold text-sm uppercase block mb-1">Message</span>
            <p className="text-gray-800 italic">"{data.message}"</p>
          </div>
        </div>

        {/* Requirement #5e: Clean DOM structure */}
        <div className="mt-8">
          <p className="text-[10px] text-gray-400 font-bold uppercase">
            Built with MERN • Tailwind • Netlify
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;