import React from 'react'
import { useEffect } from 'react';
const ThirdTab = () => {

    useEffect(() => {
            document.title = "ThirdTab"; // Change tab title
          }, []);

  return (
    <div>
      <h1>Third Tab</h1>
    </div>
  )
}

export default ThirdTab
