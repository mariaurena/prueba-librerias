import './App.css';

import BootstrapButton        from './components/BootstrapButton';
import MuiButton              from './components/MuiButton';
import StyledComponentsButton from './components/StyledButton';
import TailwindButton         from './components/TailwindButton';

function App() {
  return (
    <div className="container">
      <div className='button'>
        <BootstrapButton />
      </div>
      <div className='button'>
        <MuiButton />
      </div>
      <div className='button'>
        <StyledComponentsButton />
      </div>
      <div className='button'>
        <TailwindButton />
      </div>
    </div>
  );
}

export default App;
