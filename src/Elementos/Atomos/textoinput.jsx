import React from 'react';

function TextInput({ placeholder, name }) {
  return <input type="text" placeholder={placeholder} name={name} />;
}

export default TextInput;