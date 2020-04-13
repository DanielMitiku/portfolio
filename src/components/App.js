import React from 'react';
import SideBar from './SideBar';
import MainBar from './MainBar';


function App() {
  return (
    <div className="row">
      <div className="sidebar col-md-4 text-center">
        <SideBar />
      </div>
      <div className="mainbar col-md-8 text-center">
        <MainBar />
      </div>
    </div>
  );
}

export default App;
