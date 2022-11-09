import { useEffect, useState } from 'react';
import { LocalStorageService } from './LocalStorageService';
import './App.css';

const KEY_TOKEN = 'token';

const localStorageService = new LocalStorageService();

function App() {
  const [token, setToken] = useState(null);

  const handleAddTokenAClick = () =>
    localStorageService.setItem(KEY_TOKEN, 'token_value_a');

  const handleAddTokenBClick = () =>
    localStorageService.setItem(KEY_TOKEN, 'token_value_b');

  useEffect(() => {
    const onTokenUpdate = (token) => {
      setToken(token);
      console.log('onTokenUpdate', token);
    };

    return localStorageService.subscribe(KEY_TOKEN, onTokenUpdate);
  }, []);

  return (
    <div className="App">
      <button type="button" onClick={handleAddTokenAClick}>
        Add token 'a'
      </button>

      <button type="button" onClick={handleAddTokenBClick}>
        Add token 'b'
      </button>

      <p>Token: {token}</p>
    </div>
  );
}

export default App;
