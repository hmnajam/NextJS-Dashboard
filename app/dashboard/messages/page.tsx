'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://express-hello-world-iv2o.onrender.com/get-all-messages',
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
        </div>
      ))}
    </div>
  );
}
