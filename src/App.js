import './App.css';
import {useState, useEffect} from 'react';
import User from './components/User';
import WithLoading from './components/HOComponent';
const WithLoadingComponent = WithLoading(User);
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[])
  return (
    <div className="App">
        <WithLoadingComponent isLoading={loading} />
    </div>
  );
}

export default App;
