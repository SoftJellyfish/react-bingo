import React from 'react';
import { connect } from 'react-redux';
import { startAction } from '../actions/gameAction';
import Avatars from './Avatars';
import '../index.css';

const mapDispatchToProps = dispatch => ({
    startAction: () => dispatch(startAction())
})

const mapStateToProps = state => ({
    ...state
})


class Board extends React.Component {

    state = {
        pressed: true
    };

    tdClick = (event) => {
        if (this.props.gameReducer.filled === true) {
            console.log(this.props.player);
            this.setState({pressed: !this.state.pressed});
        }
    }

    render() {
        let buttonColor = this.state.pressed ? "notPressedButton" : "pressedButton"
        return (
            <div style={{color: 'white', weight: 'bold'}}>
                <pre>
                    {console.log(JSON.stringify(this.props))}
                </pre>
                <Avatars />
                {this.props.player}
                <div style={{
                    color: 'white',
                    height: '100vh',
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <table id="bingoTable">
                        <tbody>
                        <tr>
                            <th className="bingoText">B</th>
                            <th className="bingoText">I</th>
                            <th className="bingoText">N</th>
                            <th className="bingoText">G</th>
                            <th className="bingoText">O</th>
                        </tr>
                        <tr>
                            <td onClick={this.tdClick} className={buttonColor} id="square0"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square1"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square2"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square3"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square4"> &nbsp;</td>
                        </tr>
                        <tr>
                            <td onClick={this.tdClick} className={buttonColor} id="square5"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square6"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square7"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square8"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square9"> &nbsp;</td>
                        </tr>
                        <tr>
                            <td onClick={this.tdClick} className={buttonColor} id="square10"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square11"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="squarefree">FREE</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square12"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square13"> &nbsp;</td>
                        </tr>
                        <tr>
                            <td onClick={this.tdClick} className={buttonColor} id="square14"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square15"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square16"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square17"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square18"> &nbsp;</td>
                        </tr>
                        <tr>
                            <td onClick={this.tdClick} className={buttonColor} id="square19"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square20"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square21"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square22"> &nbsp;</td>
                            <td onClick={this.tdClick} className={buttonColor} id="square23"> &nbsp;</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);