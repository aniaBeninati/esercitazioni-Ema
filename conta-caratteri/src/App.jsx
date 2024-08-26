import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const characterCount = text.length;
  const characterCountNoSpaces = text.replace(/\s/g, '').length;

  return (
    <div className="min-h-screen bg-slate-700 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Conta caratteri</h1>
      <textarea
        className="w-full h-40 p-2 text-black rounded"
        placeholder="Scrivi o incolla qui il testo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="mt-4">
        <p>Caratteri: {characterCount}</p>
        <p>Caratteri (spazi esclusi): {characterCountNoSpaces}</p>
      </div>
    </div>
  );
}

export default App;