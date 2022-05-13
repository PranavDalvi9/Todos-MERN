import React from 'react'
import "./HomePage.css"

export default function HomePage() {
  return (
    <div className='HomePage'>


      <div className='MainTodo' >

        {/* Todo div start */}
        <div>
          <div><p>To DO</p></div>

          <div className='Card'>
            <div className='CardTitle'><p>Title</p></div>
            <div className='CardDescription'><p>Description: temporibus officia rem tempore officiis.</p></div>
            <div className='CardButton'>
              <button>Doing</button>
              <button>Done</button>
            </div>
          </div>

        </div>

        {/* Doing div start */}
        <div>
          <div><p>Doing</p></div>

          <div className='Card'>
            <div className='CardTitle'><p>Title</p></div>
            <div className='CardDescription'><p>Description: temporibus officia rem tempore officiis.</p></div>
            <div className='CardButton'>
              {/* <button>Doing</button> */}
              <button>Done</button>
            </div>
          </div>

        </div>

        {/* Done div start */}
        <div>
          <div><p>Done</p></div>

          <div className='Card'>
            <div className='CardTitle'><p>Title</p></div>
            <div className='CardDescription'><p>Description: temporibus officia rem tempore officiis.</p></div>
            {/* <div className='CardButton'>
              <button>Doing</button>
              <button>Done</button>
            </div> */}
          </div>

        </div>
      </div>

    </div>
  )
}
