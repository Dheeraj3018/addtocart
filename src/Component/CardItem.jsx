import React, { useCallback, useState } from "react";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import { Box, Button, Card, Dialog, Typography } from "@mui/material";




function CartItem(props) {
  
  return (
    <Box marginTop={1} >
      
      <Card>
      <Box padding={1} >
        <Typography variant="h5">
          {props.data.title}{" "}
          <HighlightOffSharpIcon
            sx={{ color: "red" }}
            onClick={() => props.handleRemoveCart(props.data.id)}
          />
        </Typography>
        <Typography variant="h6"> Rs. {props.data.price}</Typography>
        {/* <Button variant="contained" onClick={handlePayNow(props.data.price)}>Pay Now</Button> */}
        </Box>
         </Card>
         
    </Box>
  )
}
  

export default CartItem;