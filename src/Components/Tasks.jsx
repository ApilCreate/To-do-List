import React from 'react';
import { CircleCheck, Hourglass, Trash2 } from 'lucide-react';

export function Tasks() {
  return (
    <div className='p-4 bg-yellow-50 rounded-xl shadow-md w-full my-3'>
      <label
        htmlFor="taskInput"
        className='block text-xl font-medium text-gray-700 mb-3'
      >
        Pending Tasks
      </label>
      <div className='flex items-center justify-between p-4 border border-dashed border-gray-400 rounded-xl bg-yellow-100'>
        <label htmlFor="taskInput" 
        className='flex-1 p-2 border border-gray-300 rounded-lg mr-4'
        placeholder='Place a new task...'>
            This is a new task 
        </label>
        <CircleCheck className='text-green-500 cursor-pointer hover:scale-110 transition-transform duration-200' size={24} />
        <Hourglass className='text-orange-500 cursor-pointer hover:scale-110 transition-transform duration-200' size={24} />
        <Trash2 className='text-red-500 cursor-pointer hover:scale-110 transition-transform duration-200' size={24} />
      </div>
    </div>
  );
}
