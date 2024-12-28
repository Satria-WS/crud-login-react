import React, { useState } from 'react';
import Login from './views/Login';
import Button from '@mui/material/Button';
function App() {
  const [isLogin, setLogin] = useState<boolean>(true);

  return (
    <>
      {isLogin ? (
        <Login />
      
      ) : (
        <div>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <Button variant="contained">Hello world</Button>;
        </div>
      )}
    </>
  );
}

export default App;
