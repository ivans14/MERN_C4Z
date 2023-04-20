import {
  Button,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from '@mui/material';
import React from 'react';
import axios from 'axios';
// import pic from '../pic.jpg';
// import {log} from 'console';
import './form.css';
import {MuiFileInput} from 'mui-file-input';

function Form() {
  const [desc, setDesc] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');
  const [img, setimg] = React.useState();
  const [file, setFile] = React.useState(null);
  const [department, setDepartment] = React.useState<string>('');

  const drop_options: string[] = [
    'Production F1',
    'Production C1',
    'QC',
    'MDEV',
    'OPF',
    'Technical support',
  ];

  const submit = () => {
    const idea = {
      Department: department,
      Description: desc,
      Name: name,
      attachment: img,
    };
    axios
      .post('http://localhost:5000/idea/add', idea)
      .then((res) => console.log('aaa', idea));
  };
  const get = () => {
    axios
      .get('http://localhost:5000/idea')
      .then((res) => setimg(res.data[-1]?.attachment));
  };

  const handleChange = (event: SelectChangeEvent) => {
    setDepartment(event.target.value);
  };
  const handleChange_File = (newFile: any) => {
    setFile(newFile);
  };

  return (
    <div className='form'>
      <h1>New Idea</h1>
      <div className='form_item'>
        <InputLabel id='label_select'>Department</InputLabel>
        <Select
          labelId='label_select'
          value={department}
          onChange={handleChange}
        >
          {drop_options.map((value, index) => (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className='form_item'>
        <InputLabel id='label'>Description</InputLabel>
        <TextField
          multiline={true}
          onChange={(e) => setDesc(e.target.value)}
        ></TextField>
      </div>
      <div className='form_item'>
        <InputLabel id='label'>Name</InputLabel>
        <TextField onChange={(e) => setName(e.target.value)}></TextField>
      </div>
      <div className='form_item'>
        <InputLabel id='label'>Attachments</InputLabel>
        <MuiFileInput value={file} onChange={handleChange_File} />
      </div>
      <Button variant='contained' onClick={submit} className='button'>
        Submit
      </Button>
      {/* <Button onClick={get}>GET</Button>
      <img alt='test' src={img} height={'100vh'}></img> */}
    </div>
  );
}

export default Form;
