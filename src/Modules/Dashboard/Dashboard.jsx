import React, { useEffect, useState } from 'react';
// import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

const Dashboard = () => {
  useEffect(() => {
    // Update the document title using the browser API
    userfile()
    
    


  },[]);


  const  userfile = async()=> {


    const headers= {
      'ngrok-skip-browser-warning': 'true', // Bypass ngrok warning
      'Content-Type': 'application/json', // Optional, depending on your API
  }
    const res=  await fetch('https://3588-2405-201-5003-2178-a7a3-3ca5-3032-9c66.ngrok-free.app/api/user-files/',{
      method:"GET",
      headers : {
        'ngrok-skip-browser-warning': 'sajal',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI0NDQzNDM1LCJpYXQiOjE3MjQzNTcwMzUsImp0aSI6IjYxZTU2ZWY4ZWNlYjQ0NTQ5NzVjNmUxNzhhM2NiZDNhIiwidXNlcl9pZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20ifQ.ngBeaOUiMlfcOCYpAkv_2i0LfYrGzVlzwfP1lGKXlZ8',

        
      },
      
    });


    
    // const data = await res.json()
    console.log("+++++",res)



  }
  

 
  

  return (
    <div>
      <h1>Dashboard</h1>

    
    </div>
  );
};

export default Dashboard;
