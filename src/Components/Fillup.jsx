import React from 'react';
import { Button } from './Button';

export function Fillup() {
    return (
        <div className='p-5 bg-yellow-50 rounded-xl shadow-md'>
            <h1 className='text-2xl font-bold mb-3'>Add a new Task</h1>
            <div className='flex items-center space-x-3'>
                <input
                    type="text"
                    placeholder='New Task'
                    className='p-4 border border-dashed border-gray-400 rounded-xl w-full bg-yellow-100'
                />
                <Button />
            </div>
        </div>
    );
}
