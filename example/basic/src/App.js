import './App.css';
import { Button, Text } from 'react-jsx-component';

function App() {
  return (
    <div className="App">
      <Button
        label='lele'
        style={{ color: 'yellow' }}
        onClick={() => {
          console.log('button')
        }}
      />
      <Text
        label='yeye'
        style={{ color: 'red' }}
        onClick={() => {
          console.log('text')
        }}
      />
    </div>
  );
}

export default App;
