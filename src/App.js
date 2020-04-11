import React from 'react';
import Grid from '@material-ui/core/Grid';
import SideBar from './components/SideBar';
import MainBar from './components/MainBar';


function App() {
  return (
    <div>
      <Grid container>
        <Grid container justify="center" xs={12} sm={4}>
          <SideBar />
        </Grid>
        <Grid container justify="center" xs={12} sm={8}>
          <MainBar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
