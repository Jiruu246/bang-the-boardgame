import { GameClient } from './Client/InGameClient';
import { InMatch } from './Client/InMatch';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
    return(
        <DndProvider backend={HTML5Backend}>
            {/* <GameClient/> */}
            <InMatch/>
        </DndProvider>
    )
};


export default App;