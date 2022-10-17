async function getData() {
    const response = await fetch('/movies');
    const result = await response.json();
    console.log(result.data));
  
  }