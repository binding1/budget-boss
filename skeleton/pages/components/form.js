import React, { useState } from 'react';
import Category from '../components/category'

export default function Form({onSubmit, name, text}) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [account, setAccount] = useState('')
  const [sources, setSources] = useState('')

  console.log(title); //for testing
  
  return (
    <div className="flex items-center h-screen">
      {name === 'transaction' ? (
        <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto">
          <h1 className="text-xl font-bold mb-4">{text}</h1>
          <label>
            Title:
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" value={title} onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <br />
          <br/>
          
          <label>
            Category:
            <Category />
          </label>
          <br />
          <br/>
          
          <label>
            Expense Amount:
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" value={amount} onChange={(e) => setAmount(e.target.value)} 
            />
          </label>
          <br />
          <br/>
          
          <label>
            Payment Account:
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type='text' value={account} onChange={e => setAccount(e.target.value)}
            />
          </label>
          <br/>
          <br/>
          
          <label>
            Sources:
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type='text' value={sources} onChange={e => setSources(e.target.value)}
            />
          </label>
          <br/>
          <br/>
          
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
        ) : (
          <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto">
            <h1 className="text-xl font-bold mb-4">{text}</h1>
            <Category />
          </form>
        )}
    </div>
  );
}
