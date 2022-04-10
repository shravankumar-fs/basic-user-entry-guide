import { UserInput } from './components/UserInput';
import { UserDisplay } from './components/UserDisplay';
import './App.css';
import { useState } from 'react';
function App() {
  const [userItems, setUserItems] = useState([]);

  function addData(data) {
    setUserItems((prev) => {
      return [data, ...prev];
    });
  }
  return (
    <>
      <UserInput submit={addData} />
      <UserDisplay list={userItems} />
    </>
  );
}

export default App;
