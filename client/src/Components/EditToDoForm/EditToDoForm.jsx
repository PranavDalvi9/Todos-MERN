import React, { useState } from 'react'

import { useParams } from 'react-router-dom'
import "./EditToDoForm.css"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import Button from '@mui/material/Button';
import axios from 'axios';

export default function EditToDoForm() {
  const { id } = useParams()
  console.log(id)


  const [title, setTitle] = useState("Title")
  const [description, setDescription] = useState("Description")
  const [task, setTask] = useState("To Do");


  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddcard = () => {
    const data = {
      title,
      description,
      task
    }
    console.log("data", data)
    axios.post("http://localhost:2344/todos", data).then((res) => console.log(res.data))
  }


  return (
    <div>
      <h1>edit</h1>

      <div>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '55ch' },
          }}
          noValidate
          autoComplete="off"
        >
          {/* Title Input */}
          <TextField id="standard-basic" label={title} variant="standard" onChange={(e) => setTitle(e.target.value)} /><br />

          {/* Description Input */}
          <TextField id="standard-basic" label={description} variant="standard" onChange={(e) => setDescription(e.target.value)} /><br />

          {/* Task Status Input */}
          <FormControl >
            <InputLabel id="demo-simple-select-label">Task</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={task}
              label="Task"
              onChange={handleChange}
              defaultValue={task}
            >
              <MenuItem value={"To Do"}>To Do</MenuItem>
              <MenuItem value={"Doing"}>Doing</MenuItem>
              <MenuItem value={"Done"}>Done</MenuItem>
            </Select>
          </FormControl> <br /><br />

          {/* Add Card Button */}
          <Button variant="contained" onClick={handleAddcard} >Add Card</Button>

        </Box>

      </div>
    </div>
  )
}
