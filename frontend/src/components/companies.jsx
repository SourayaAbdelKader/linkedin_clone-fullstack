import React from 'react' 
async function getData() {
    const response = await fetch('http://localhost:8000/companies/');
    const result = await response.json();
    console.log(result);
    console.log(result.length)
    for(let i =0; i< result.length; i++) {
        console.log(result[i]);
    }
  }

getData();
export default function ShowCompanies(data) {
    
    return (
      <div className="body">
        <div className="choices">
          <h1> hi </h1> 
          <div> <button className="blue_button"> data.name </button> </div>
          <div> <button className="dark_blue_button"> data.emails </button> </div>
        </div>
      </div>
    )
  }