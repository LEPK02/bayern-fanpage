import React from 'react';
import { Outlet } from "react-router-dom";

class HallOfFame extends React.Component {
  render() {
    return (
      <>
        <Outlet />
      </>
    );
  }
}

export default HallOfFame;