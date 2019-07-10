import React from 'react';
import Board from './components/Board';
import BtnOnePlayer from './components/BtnOnePlayer';

class App extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <BtnOnePlayer />
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Board player="Player 1"/>
                    <Board player="Player 2"/>
                </div>
            </div>
        );
    }
}

export default App;