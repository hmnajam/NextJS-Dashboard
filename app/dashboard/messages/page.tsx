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
          // Chatify LabCloud api
          // 'https://chatterly-labcloud-4a8k.onrender.com/get-all-messages',

          // Chatify LabCloud api
          'https://chatterly-labcloud-4a8k.onrender.com/get-all-messages',
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
    <div>
      {/* Render your component using the 'messages' state */}
      {messages.map((msg, index) => (
        <div key={index}>
          <p>Recipient: {msg.recipient}</p>
          <p>Message: {msg.message}</p>
          <p>Timestamp: {msg.timestamp}</p>
        </div>
      ))}
    </div>
  );
}
