import React, { useState, useEffect } from 'react';
import { TextField, Container, Button } from '@material-ui/core';

const App = () => {
  return (
    <Container maxWidth="sm">
      <div>
        <h1>Debt Calculator</h1>
        <form
          //className={classes.root}
          noValidate
          autoComplete="off"
        >
          {/* <TextField id="standard-basic" label="Standard" /> */}
          {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
          <TextField
            className="input"
            id="credit"
            label="Creditor"
            variant="outlined"
          />
          <TextField
            className="input"
            id="balance"
            label="Current Balance"
            variant="outlined"
          />
          <TextField
            className="input"
            id="rate"
            label="Interest Rate"
            variant="outlined"
          />
          <TextField
            className="input"
            id="payment"
            label="Monthly Payment"
            variant="outlined"
          />
          <Button variant="contained" color="primary">
            Calculate
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default App;
