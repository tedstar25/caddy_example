
import { useEffect, useState } from 'react';






function App() {

  const [backend_response_withData, setBackend_response_withData] = useState(null);


  async function testServer() {

    // request to server 
    const sendRequest = async () => {
      try {
        const response = await fetch('http://localhost:3001/test', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ input: 'Hello from client' })
        });
        const data = await response.json();

        console.log(data)

        if (!response.ok) {
          setBackend_response_withData(data.message)
        } 
        if(response.ok) {
          setBackend_response_withData(data.message)
        }

      } catch (error) {
        console.error('Error sending request:', error);
      }
    };

    sendRequest();
  }





  return (
    <div style={{display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column'}}>

        <button style={{border:'2px solid black', width:'80px', height:'30px'}}  onClick={() => testServer()} >
          Click me
        </button>


      {backend_response_withData && (
        <>        
          <h1>Server Response:</h1>
          <h1>{backend_response_withData}</h1>
        </>

      )}
    </div>
  );
}

export default App;
