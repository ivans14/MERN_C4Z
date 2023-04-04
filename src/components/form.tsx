import {Button, TextField} from '@mui/material';
import React from 'react';
import axios from 'axios';
import pic from '../pic.jpg';

function Form() {
  const [desc, setDesc] = React.useState<string>('');
  const [department, setDepartment] = React.useState<string>('');
  const [img, setimg] = React.useState();
  const submit = () => {
    const idea = {
      description: desc,
      department: department,
      attachment: pic,
    };
    axios
      .post('http://localhost:5000/idea/add', idea)
      .then((res) => console.log(res.data));
  };
  const get = () => {
    axios
      .get('http://localhost:5000/idea')
      .then((res) => setimg(res.data[4].attachment));
  };
  console.log('render', desc);

  return (
    <div>
      <TextField onChange={(e) => setDesc(e.target.value)}></TextField>
      <TextField onChange={(e) => setDepartment(e.target.value)}></TextField>
      {/* <TextField></TextField> */}
      <Button onClick={submit}>Submit</Button>
      <Button onClick={get}>GET</Button>
      <img alt='test' src={img} height={'100vh'}></img>
    </div>
  );
}

export default Form;
