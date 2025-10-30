import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";    

function CardBa({idx, title, content, onDelete}) {
  const handleDelete = () => {
    if (typeof onDelete === "function") {
      onDelete(idx);
    }
  } 
  return (
    <Card sx={{ maxWidth: 345, mt: 2, mb: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleDelete} size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}

export default CardBa;
