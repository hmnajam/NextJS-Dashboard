'use client';

import { useEffect, useState } from 'react';

interface Message {
  recipient: string;
  message: string;
  timestamp: string;
}

export default function Page() {
  const [messages, setMessages] = useState<Message[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://chatify-drlab.onrender.com/get-all-messages',
        );
        const data = await response.json();
        setMessages(data.response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Messages</h1>
      <div className="grid gap-4">
        {messages.map((msg, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <p className="text-gray-600">Recipient: <span className="font-semibold">{msg.recipient}</span></p>
            <p className="text-gray-800 mt-2">Message: {msg.message}</p>
            <p className="text-gray-500 mt-2">Timestamp: {msg.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
