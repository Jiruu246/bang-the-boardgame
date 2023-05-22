import { GameClient } from './Client/InGameClient';
import { InMatch } from './Client/InMatch';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CardContexProvider } from './Components/Context/CardContexProvider';
import { TestClient } from './Client/TestClient';
import { LobbyClient } from './Client/LobbyClient';

const App = () => {
    return(
        // <CardContexProvider>
        //     <InMatch/>
        // </CardContexProvider>
        // <LobbyClient/>
        // <TestClient/>
        <GameClient/>
    )
};


export default App;