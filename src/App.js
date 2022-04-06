import './App.css';

import DropFileInput from './components/drop-file-input/DropFileInput';

function App() {

  const onFileChange = (files) => {

  }
 
  return (
    <div className="box">    
      <h2 className="header">
        React drop and files input 
      </h2>
    <DropFileInput
    onFileChange={(files) => onFileChange(files)}
     />
    </div>
  );
}

export default App;
