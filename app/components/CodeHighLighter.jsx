'use client'
import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
const CodeHighlighter = ({ language, children }) => {
  const codeRef = useRef();
  
  useEffect(() => {
    hljs.highlightElement(codeRef.current);
  }, []);

  return (
    <pre>
      <code ref={codeRef} className={`language-${language}`}>
        {children}
      </code>
    </pre>
  );
};

export default CodeHighlighter;
