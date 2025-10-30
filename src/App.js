import CardBa from './components/Card';
import BasicForm from './components/Form';
import { Container } from '@mui/material';
import { useState } from 'react';

function App() {

  const initialItems = [{
    title: "Card Title 1",
    content: "This is the content of the card 1."
  }, {
    title: "Card Title 2",
    content: "This is the content of the card 2."
  }, {
    title: "Card Title 3",
    content: "This is the content of the card 3."
  }];

  const [items, setItems] = useState(initialItems);
  const handleDelete = (key) => {
    setItems(prev => prev.filter((_, idx) => idx !== key));
  }
  const handleAdd = (newItem) => {
    // add to top (or use [...items, newItem] to append at end)
    setItems(prev => [newItem, ...prev]);
  };
   
  return (
    <div className="App">
      <Container maxWidth="sm" sx={{ mt: 5 , border: '1px solid black', p: 5}}>
        <h1>Hello World!</h1>
        {items.map((item, idx)=>(<CardBa key={idx} idx={idx} title = {item.title} content={item.content} onDelete={handleDelete} />))}
        <BasicForm onAdd = {handleAdd} />
      </Container>
    </div>
  );
}

export default App;
