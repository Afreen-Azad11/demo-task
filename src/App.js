
import './App.css';

import { MantineProvider } from '@mantine/core';
import FormDemo from './component/FormDemo';
import TableDemo from './component/TableDemo';
function App() {
  return (
    <div className="App">
      <MantineProvider>
       <TableDemo/>
        <FormDemo></FormDemo>
       
      </MantineProvider>
    </div>
  );
}

export default App;
