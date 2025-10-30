import { TextField, Button, Box } from '@mui/material';

function BasicForm() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello"
        />
        <TextField
          id="outlined-basic"
          label="Basic"
          variant="outlined"
        />
        <TextField
          id="outlined-disabled"
          label="Disabled"
          variant="outlined"
          disabled
        />
      </div>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Box>
  );
}
export default BasicForm;