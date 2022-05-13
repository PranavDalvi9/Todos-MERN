import React, { useEffect, useState } from 'react'
import "./HomePage.css"
import axios from 'axios'

export default function HomePage() {

  const [toDoData, setToDoData] = useState([])
  const [doingdata, setDoingdata] = useState([])
  const [donedata, setDonedata] = useState([])

  useEffect(() => {

    axios.get("http://localhost:2344/todos/Done").then((res) => setDonedata(res.data));

    axios.get("http://localhost:2344/todos/To_Do").then((res) => setToDoData(res.data));

    axios.get("http://localhost:2344/todos/Doing").then((res) => setDoingdata(res.data));

  }, [])

  const handleDoing = (e) => {
    axios.patch(`http://localhost:2344/todos/${e.target.value}`, {
      "task": "Doing"
    })

  }

  const handleDone = (e) => {
    axios.patch(`http://localhost:2344/todos/${e.target.value}`, {
      "task": "Done"
    })
  }

  return (
    <div className='HomePage'>

      <div className='MainTodo' >

        {/* Todo div start */}
        <div>
          <div className='TodoHeading'><p>To DO</p></div>

          {
            toDoData.length !== 0 ?
              <div>
                {
                  toDoData.map((e) => (
                    <div className='Card'>
                      <div className='cardstatus'><p>{e.task}</p></div>
                      <div className='CardTitle'><p>{e.title}</p></div>
                      <div className='CardDescription'><p>{e.description}</p></div>
                      <div className='CardButton'>
                        <button value={e._id} onClick={handleDoing}>Doing</button>
                        <button value={e._id} onClick={handleDone}>Done</button>
                      </div>
                    </div>
                  ))
                }
              </div> :

              <h1>No Data Found</h1>
          }


        </div>

        {/* Doing div start */}
        <div>
          <div className='TodoHeading'><p>Doing</p></div>

          {
            doingdata.length !== 0 ?
              <div>
                {
                  doingdata.map((e) => (
                    <div className='Card'>
                      <div className='cardstatus'><p>{e.task}</p></div>
                      <div className='CardTitle'><p>{e.title}</p></div>
                      <div className='CardDescription'><p>{e.description}</p></div>
                      <div className='CardButton'>
                        {/* <button>Doing</button> */}
                        <button value={e._id} onClick={handleDone}>Done</button>
                      </div>
                    </div>
                  ))
                }
              </div> :
              <h1>No Data Found</h1>
          }



        </div>

        {/* Done div start */}
        <div>
          <div className='TodoHeading'><p>Done</p></div>

          {
            donedata.length !== 0 ?
              <div>
                {
                  donedata.map((e) => (
                    <div className='Card'>
                      <div className='cardstatus'><p>{e.task}</p></div>
                      <div className='CardTitle'><p>{e.title}</p></div>
                      <div className='CardDescription'><p>{e.description}</p></div>
                      {/* <div className='CardButton'>
              <button>Doing</button>
              <button>Done</button>
            </div> */}
                    </div>
                  ))
                }
              </div> :
              <h1>No Data Found</h1>
          }



        </div>
      </div>

    </div>
  )
}
