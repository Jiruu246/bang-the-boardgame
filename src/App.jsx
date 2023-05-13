import { GameClient } from './Client/InGameClient';
import { InMatch } from './Client/InMatch';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CardContexProvider } from './Components/Context/CardContexProvider';

const App = () => {
    return(
        <CardContexProvider>
            <InMatch/>
        </CardContexProvider>
    )
};


export default App;