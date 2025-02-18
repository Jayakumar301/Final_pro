import React from 'react'
import { useEffect } from 'react';
const SecondTab = () => {

    useEffect(() => {
        document.title = "SecondTab"; // Change tab title
        }, []);
  return (
    <div>
      <h2>Second Tab</h2>
    </div>
  )
}

export default SecondTab
