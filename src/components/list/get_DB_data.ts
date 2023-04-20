import axios from 'axios';
import React from 'react';

function Get_DB_data() {
  return axios
    .get('http://localhost:5000/idea')
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export default Get_DB_data;
