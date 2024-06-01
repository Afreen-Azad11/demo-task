
import './App.css';

import { MantineProvider } from '@mantine/core';
import FormDemo from './component/FormDemo';
import TableDemo from './component/TableDemo';
import ModalDemo from './component/ModalDemo';
function App() {
  return (
    <div className="App">
      <MantineProvider>
       <TableDemo/>
        <FormDemo></FormDemo>
       <ModalDemo/>
      </MantineProvider>
    </div>
  );
}

export default App;
