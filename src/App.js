import './App.css';

const App = () => {
  const str = 'Walk the dog';

  const result = str.substring(0, 4);
  console.log(result); // 👉️ "Walk"

  return (
    <div>
      <h2>{result}</h2>
    </div>
  );
};

export default App;
