// LIBRARY //
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';
// STYLE //
// CONTEXT //
// PAGE //
// COMPONENT //
// OTHER //

export default function Homepage() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div id='homepage' className='page homepage'>
      <h1 onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Homepage</h1>
    </div>
  )
}
