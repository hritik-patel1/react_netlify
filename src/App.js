import CardBa from './components/Card';
import BasicForm from './components/Form';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm" sx={{ mt: 5 , border: '1px solid black', p: 5}}>
        <h1>Hello World!</h1>
        <CardBa/>
        <BasicForm/>
      </Container>
    </div>
  );
}

export default App;
