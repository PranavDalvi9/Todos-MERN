import React, { useEffect, useState } from 'react'
import "./HomePage.css"
import axios from 'axios'

export default function HomePage() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:2344/todos").then((res) => setData(res.data));
  }, [])

  var toDo_Data = data.filter((items) => items.task === "To Do")

  var doing_data = data.filter((items) => items.task === "Doing")

  var done_data = data.filter((items) => items.task === "Done")

  console.log("done", done_data)
  console.log("todo", doing_data)
  console.log("todo", toDo_Data)
  // console.log("datata" , data)

  return (
    <div className='HomePage'>

      <div className='MainTodo' >

        {/* Todo div start */}
        <div>
          <div className='TodoHeading'><p>To DO</p></div>

          {
            toDo_Data ?
              <div>
                {
                  toDo_Data.map((e) => (
                    <div className='Card'>
                      <div className='cardstatus'><p>{e.task}</p></div>
                      <div className='CardTitle'><p>{e.title}</p></div>
                      <div className='CardDescription'><p>{e.description}</p></div>
                      <div className='CardButton'>
                        <button onClick={handleDoing}>Doing</button>
                        <button>Done</button>
                      </div>
                    </div>
                  ))
                }
              </div> :

              <h1>no</h1>
          }


        </div>

        {/* Doing div start */}
        <div>
          <div className='TodoHeading'><p>Doing</p></div>

          {
            doing_data ?
              <div>
                {
                  doing_data.map((e) => (
                    <div className='Card'>
                      <div className='cardstatus'><p>{e.task}</p></div>
                      <div className='CardTitle'><p>{e.title}</p></div>
                      <div className='CardDescription'><p>{e.description}</p></div>
                      <div className='CardButton'>
                        {/* <button>Doing</button> */}
                        <button>Done</button>
                      </div>
                    </div>
                  ))
                }
              </div> :
              <h1>no</h1>
          }



        </div>

        {/* Done div start */}
        <div>
          <div className='TodoHeading'><p>Done</p></div>

          {
            done_data ?
              <div>
                {
                  done_data.map((e) => (
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
              <h1>no</h1>
          }



        </div>
      </div>

    </div>
  )
}
