import { useState, useEffect } from 'react';
import { Calculator, X, ArrowLeft, History, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from './Navbar';

export default function AdvancedCalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [mode, setMode] = useState('standard'); // 'standard' or 'scientific'

  // Handle number and operator inputs
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear the input field
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  // Delete the last character
  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // Evaluate the expression
  const handleCalculate = () => {
    try {
      // Replace special functions with their JavaScript equivalents
      let expression = input
        .replace(/sin\(/g, 'Math.sin(')
        .replace(/cos\(/g, 'Math.cos(')
        .replace(/tan\(/g, 'Math.tan(')
        .replace(/log\(/g, 'Math.log10(')
        .replace(/ln\(/g, 'Math.log(')
        .replace(/sqrt\(/g, 'Math.sqrt(')
        .replace(/π/g, 'Math.PI')
        .replace(/e/g, 'Math.E')
        .replace(/\^/g, '**');

      // Evaluate the expression
      const calculatedResult = eval(expression).toString();
      setResult(calculatedResult);

      // Add to history
      setHistory(prev => [
        { expression: input, result: calculatedResult },
        ...prev.slice(0, 9) // Keep only the last 10 items
      ]);

    } catch (error) {
      setResult('Error');
    }
  };

  // Use item from history
  const useFromHistory = (item) => {
    setInput(item.expression);
    setResult(item.result);
  };

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleCalculate();
      } else if (e.key === 'Escape') {
        handleClear();
      } else if (e.key === 'Backspace') {
        handleDelete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input]);

  return (
    <div>
    <Navbar/>
      <div className="flex flex-col w-full max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
      </div>
      <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Calculator className="mr-2" size={20} />
          <h2 className="text-lg font-bold">Advanced Calculator</h2>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setMode('standard')}
            className={`px-2 py-1 rounded ${mode === 'standard' ? 'bg-white text-blue-600' : 'bg-blue-700'}`}
          >
            Standard
          </button>
          <button
            onClick={() => setMode('scientific')}
            className={`px-2 py-1 rounded ${mode === 'scientific' ? 'bg-white text-blue-600' : 'bg-blue-700'}`}
          >
            Scientific
          </button>
        </div>
      </div>

      {/* Display */}
      <div className="bg-white p-4 border-b">
        <div className="text-right text-gray-500 h-6 mb-1">{input}</div>
        <div className="text-right text-2xl font-bold h-8">{result}</div>
      </div>

      {/* Keypad */}
      <div className="grid grid-cols-4 gap-1 p-2 bg-gray-100">
        {/* Row 1 */}
        <button onClick={() => handleClear()} className="bg-red-500 text-white p-3 rounded hover:bg-red-600">C</button>
        <button onClick={() => handleDelete()} className="bg-gray-300 p-3 rounded hover:bg-gray-400 flex justify-center items-center">
          <ArrowLeft size={20} />
        </button>
        <button onClick={() => handleClick('%')} className="bg-gray-300 p-3 rounded hover:bg-gray-400">%</button>
        <button onClick={() => handleClick('/')} className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600">÷</button>

        {/* Row 2 */}
        <button onClick={() => handleClick('7')} className="bg-white p-3 rounded hover:bg-gray-200">7</button>
        <button onClick={() => handleClick('8')} className="bg-white p-3 rounded hover:bg-gray-200">8</button>
        <button onClick={() => handleClick('9')} className="bg-white p-3 rounded hover:bg-gray-200">9</button>
        <button onClick={() => handleClick('*')} className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600">×</button>

        {/* Row 3 */}
        <button onClick={() => handleClick('4')} className="bg-white p-3 rounded hover:bg-gray-200">4</button>
        <button onClick={() => handleClick('5')} className="bg-white p-3 rounded hover:bg-gray-200">5</button>
        <button onClick={() => handleClick('6')} className="bg-white p-3 rounded hover:bg-gray-200">6</button>
        <button onClick={() => handleClick('-')} className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600">-</button>

        {/* Row 4 */}
        <button onClick={() => handleClick('1')} className="bg-white p-3 rounded hover:bg-gray-200">1</button>
        <button onClick={() => handleClick('2')} className="bg-white p-3 rounded hover:bg-gray-200">2</button>
        <button onClick={() => handleClick('3')} className="bg-white p-3 rounded hover:bg-gray-200">3</button>
        <button onClick={() => handleClick('+')} className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600">+</button>

        {/* Row 5 */}
        <button onClick={() => handleClick('0')} className="bg-white p-3 rounded hover:bg-gray-200 col-span-2">0</button>
        <button onClick={() => handleClick('.')} className="bg-white p-3 rounded hover:bg-gray-200">.</button>
        <button onClick={() => handleCalculate()} className="bg-green-500 text-white p-3 rounded hover:bg-green-600">=</button>
      </div>

      {/* Scientific keypad (conditionally rendered) */}
      {mode === 'scientific' && (
        <div className="grid grid-cols-4 gap-1 p-2 bg-gray-200">
          <button onClick={() => handleClick('(')} className="bg-gray-300 p-3 rounded hover:bg-gray-400">(</button>
          <button onClick={() => handleClick(')')} className="bg-gray-300 p-3 rounded hover:bg-gray-400">)</button>
          <button onClick={() => handleClick('Math.pow(10,')} className="bg-gray-300 p-3 text-sm rounded hover:bg-gray-400">10^x</button>
          <button onClick={() => handleClick('^')} className="bg-gray-300 p-3 rounded hover:bg-gray-400">x^y</button>

          <button onClick={() => handleClick('sin(')} className="bg-gray-300 p-3 rounded hover:bg-gray-400">sin</button>
          <button onClick={() => handleClick('cos(')} className="bg-gray-300 p-3 rounded hover:bg-gray-400">cos</button>
          <button onClick={() => handleClick('tan(')} className="bg-gray-300 p-3 rounded hover:bg-gray-400">tan</button>
          <button onClick={() => handleClick('π')} className="bg-gray-300 p-3 rounded hover:bg-gray-400">π</button>

          <button onClick={() => handleClick('sqrt(')} className="bg-gray-300 p-3 rounded hover:bg-gray-400">√</button>
          <button onClick={() => handleClick('log(')} className="bg-gray-300 p-3 rounded hover:bg-gray-400">log</button>
          <button onClick={() => handleClick('ln(')} className="bg-gray-300 p-3 rounded hover:bg-gray-400">ln</button>
          <button onClick={() => handleClick('e')} className="bg-gray-300 p-3 rounded hover:bg-gray-400">e</button>

          <button onClick={() => handleClick('1/')} className="bg-gray-300 p-3 rounded hover:bg-gray-400">1/x</button>
          <button onClick={() => handleClick('Math.abs(')} className="bg-gray-300 p-3 rounded hover:bg-gray-400">|x|</button>
          <button onClick={() => handleClick('Math.round(')} className="bg-gray-300 p-3 text-sm rounded hover:bg-gray-400">round</button>
          <button onClick={() => handleClick('!')} className="bg-gray-300 p-3 rounded hover:bg-gray-400">x!</button>
        </div>
      )}

      {/* History panel toggle */}
      <div className="border-t">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="flex items-center justify-between w-full p-2 bg-gray-100 hover:bg-gray-200"
        >
          <div className="flex items-center">
            <History size={18} className="mr-1" />
            <span>History</span>
          </div>
          {showHistory ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {/* History items */}
        {showHistory && (
          <div className="max-h-40 overflow-y-auto">
            {history.length === 0 ? (
              <div className="p-3 text-center text-gray-500">No history yet</div>
            ) : (
              history.map((item, index) => (
                <div
                  key={index}
                  className="p-2 border-b hover:bg-blue-50 cursor-pointer"
                  onClick={() => useFromHistory(item)}
                >
                  <div className="text-sm text-gray-600">{item.expression}</div>
                  <div className="text-md font-semibold">{item.result}</div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}