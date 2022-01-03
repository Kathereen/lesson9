
import ErrorBoundary from '../ErrorBoundary';
import ReactFragments from '../ReactFragments';
import TestForError from '../TestForError';
import './App.css';

const list = new Array(20).fill(null). map((_,idx) => idx)

function App() {
  return (
    <div className="App">

{/* TASK 1 */}

      {/* <ErrorBoundary>
        <TestForError/>
      </ErrorBoundary> */}

{/* TASK 2 */}      

      <ReactFragments list={list} />
    </div>
  );
}

export default App;
