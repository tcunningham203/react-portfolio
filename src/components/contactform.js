import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pretend sending message
    setIsSent(true);

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="max-w-md w-full z-10 mx-auto">
      <div className="bg-emerald-800 shadow-lg rounded-lg px-4 py-4">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
      
            <div >
              <input
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                autoComplete='false'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="ps-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500  w-full sm:text-sm border-gray-300 rounded-md h-12"
              />
            </div>
          </div>
          <div>
       
            <div >
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete='false'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="ps-3 shadow-sm focus:ring-green-500 focus:border-green-500  w-full sm:text-sm border-green-300 rounded-md h-12"
              />
            </div>
          </div>
          <div>
        
            <div >
              <textarea
                id="message"
                name="message"
                placeholder="Tell me more about you or your company."
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500  w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white text-lg bg-green-950 hover:bg-green-700 focus:outline-none"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {isSent && (
        <div className="mt-4 absolute bottom-3 right-3 bg-green-50 border border-green-400 text-black md:px-14 pe-11 ps-2 py-3 rounded">
        <span className="sm:inline">Thanks for reaching out.</span>
        <span className="absolute  bottom-0 right-0 px-4 py-3">
            <svg
              className="fill-current h-6 w-6 text-green-950"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-10 -4 25 25"
              onClick={() => setIsSent(false)}
            >
              <title>Close</title>
              <path
                fillRule="evenodd"
                d="M14.348 5.652a.5.5 0 010 .707L10.707 10l3.64 3.64a.5.5 0 11-.708.708L10 10.707l-3.64 3.64a.5.5 0 01-.708-.708L9.293 10 5.652 6.36a.5.5 0 01.708-.708L10 9.293l3.64-3.64a.5.5 0 01.708 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
