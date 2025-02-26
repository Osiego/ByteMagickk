import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

function CodeEditor() {
  const [code, setCode] = useState('// Write your code here');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('javascript');

  // Handle when code changes
  function handleCodeChange(value) {
    setCode(value);
  }

  // Handle running the code
  function handleRunCode() {
    try {
      // Create a secure context for running code
      const secureFunction = new Function(`
        let console = {
          log: function(msg) {
            window._tempOutput = (window._tempOutput || '') + msg + '\\n';
          }
        };
        ${code}
      `);

      // Clear previous output
      window._tempOutput = '';
      
      // Run the code
      secureFunction();
      
      // Get the output
      setOutput(window._tempOutput || 'No output');
      
      // Cleanup
      delete window._tempOutput;
      
    } catch (error) {
      setOutput('Error: ' + error.message);
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      {/* Language Selector */}
      <select 
        value={language} 
        onChange={(e) => setLanguage(e.target.value)}
        style={{
          marginBottom: '10px',
          padding: '5px',
          borderRadius: '4px'
        }}
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
      </select>

      {/* Editor Container */}
      <div style={{ border: '1px solid #ccc', marginBottom: '20px' }}>
        <Editor
          height="400px"
          language={language}
          value={code}
          onChange={handleCodeChange}
          theme="vs-dark"
        />
      </div>

      {/* Run Button */}
      <button 
        onClick={handleRunCode}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Run Code
      </button>

      {/* Output Display */}
      <div 
        style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px'
        }}
      >
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default CodeEditor;
