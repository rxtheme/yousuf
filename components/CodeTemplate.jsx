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
    <div className=" h-[300px] w-[450px] rounded-lg bg-slate-700 p-2">
      {/* window bar */}
      <div className="relative ml-2 mt-[10px] flex justify-start space-x-2">
        <span className="h-[12px] w-[12px] cursor-pointer rounded-full bg-red-500"></span>
        <span className="h-[12px] w-[12px] cursor-pointer rounded-full bg-yellow-500"></span>
        <span className="h-[12px] w-[12px] cursor-pointer rounded-full bg-green-500"></span>
        <p className="text-md absolute -top-2 left-44 right-0 font-light text-gray-300">
          app.js
        </p>
      </div>
      <hr className="mt-3 border-slate-500" />

      <div className="">
        <ul className="mt-3 flex pl-3 text-white">
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
  );
};

export default CodeTemplate;
