import React from 'react'

export function Lists() {
  return (
    <div className='container mx-auto'>
        <div className='New_Task'>
            <h1 className=''> New Task</h1>
            <input type="text" placeholder='Enter a new task' className='border border-black pt-2 pb-2 pl-2 pr-40'/>
            <button>Add Task</button>
        </div>
        <div className='Active Tasks'>

        </div>
    </div>
  )
}
