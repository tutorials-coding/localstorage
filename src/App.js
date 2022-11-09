import { useLocalStorageKey } from './useLocalStorageKey';

const KEY_TOKEN = 'token';

function App() {
  const [token, setToken] = useLocalStorageKey(KEY_TOKEN);

  const handleAddTokenAClick = () => {
    setToken('token_value_a');
  };

  const handleAddTokenBClick = () => {
    setToken('token_value_b');
  };

  return (
    <>
      <button type="button" onClick={handleAddTokenAClick}>
        Add token 'a'
      </button>

      <button type="button" onClick={handleAddTokenBClick}>
        Add token 'b'
      </button>

      <p>Token: {token}</p>
    </>
  );
}

export default App;
