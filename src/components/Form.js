// ...existing code...
import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

function BasicForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newItem = { title: title.trim(), content: content.trim() };
    if (typeof onAdd === 'function') onAdd(newItem);
    setTitle('');
    setContent('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Title"  onChange={(e) => setTitle(e.target.value)} fullWidth />
      <TextField label="Content" onChange={(e) => setContent(e.target.value)} multiline rows={3} fullWidth />
      <Button type="submit" variant="contained">Add Card</Button>
    </Box>
  );
}

export default BasicForm;
// ...existing code...