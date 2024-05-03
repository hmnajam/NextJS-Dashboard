// 'use client';

// import { useEffect, useState } from 'react';
// // import { Metadata } from 'next';

// // export const metadata: Metadata = {
// //   title: 'Messages',
// // };

// interface Message {
//   recipient: string;
//   message: string;
//   timestamp: string;
// }

// export default function Page() {
//   const [messages, setMessages] = useState<Message[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           'https://chatify-drlab.onrender.com/get-all-messages',
//         );
//         const data = await response.json();
//         setMessages(data.response);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <h1 className="mb-4 text-2xl font-semibold">Messages</h1>
//       <div className="grid gap-4">
//         {messages.map((msg, index) => (
//           <div key={index} className="rounded bg-white p-4 shadow-md">
//             <p className="text-gray-600">
//               Recipient: <span className="font-semibold">{msg.recipient}</span>
//             </p>
//             <p className="mt-2 text-gray-800">Message: {msg.message}</p>
//             <p className="mt-2 text-gray-500">Timestamp: {msg.timestamp}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { fetchMessages } from '@/app/lib/data';

export default async function Page() {
  const messages = await fetchMessages();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="mb-4 text-2xl font-semibold">Messages</h1>
      <div className="grid gap-4">
        {messages.map((msg, index) => (
          <div key={index} className="rounded bg-white p-4 shadow-md">
            <p className="text-gray-600">
              Recipient: <span className="font-semibold">{msg.recipient}</span>
            </p>
            <p className="mt-2 text-gray-800">Message: {msg.message}</p>
            <p className="mt-2 text-gray-500">Timestamp: {msg.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
