import React from 'react'
import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";
const CodeTemplate = () => {
    const customStyle = {
        backgroundColor: "#334155 ",
      };

      const code = `function generateFibonacciSequence(count) {
    const sequence = [];
    for (let i = 0; i < count; i++) {
        sequence.push(fibonacci(i));
    }
    return sequence;
}
      `;
      const codeTemplate = {
        1: "function generateFibonacciSequence(count) {",
        2: "const sequence = [],",
        3: "for (let i = 0; i < count; i++) {",
        4: "sequence.push(fibonacci(i));",
        5: "}",
        6: "return sequence;",
        7: "return sequence;",
      };
  const numbers = [];
  // code list maker
  const listNumber = Object.keys(codeTemplate);
  for (let i = 1; i <= listNumber.length; i++) {
    numbers.push(<p key={i}>{i}</p>);
  }
  return ( 
  <div className=" w-[450px] h-[300px] p-2 bg-slate-700 rounded-lg">
    {/* window bar */}
    <div className="flex justify-start space-x-2 mt-[10px] ml-2 relative">
      <span className="w-[12px] h-[12px] rounded-full cursor-pointer bg-red-500"></span>
      <span className="w-[12px] h-[12px] rounded-full cursor-pointer bg-yellow-500"></span>
      <span className="w-[12px] h-[12px] rounded-full cursor-pointer bg-green-500"></span>
        <p className='absolute -top-2 left-44 right-0 text-gray-300 text-md font-light'>app.js</p>
   
    </div>
    <hr className="mt-3 border-slate-500" />

    <div className="">
      <ul className="text-white pl-3 mt-3 flex">
        <li className="  text-slate-400">{numbers}</li>
        <pre className="-mt-2 text-wrap">
          <SyntaxHighlighter
            language="javascript"
            customStyle={customStyle}
            style={agate}
          >
            {code}
          </SyntaxHighlighter>
        </pre>
      </ul>
    </div>
  </div> 
  )
}

export default CodeTemplate;