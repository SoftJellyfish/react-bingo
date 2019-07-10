import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { onePlayerAction, startAction } from '../actions/gameAction';


const mapDispatchToProps = dispatch => ({
    onePlayerAction: () => dispatch(onePlayerAction()),
    startAction: () => dispatch(startAction())
})

const mapStateToProps = state => ({
    ...state
})

class BtnOnePlayer extends React.Component {
    onePlayerAction = (event) => {
        this.props.onePlayerAction();
    }

    startAction = (event) => {
        this.props.startAction();
    }

    startButton() {
        return (                
        <div>
            <Button 
                onClick={this.onePlayerAction}
                variant="contained" 
                color="primary" 
                size="large"
            >
                1 Player Start
            </Button>
        </div>
        );
    }

    resetButton() {
        return (
            <div>
                <Button 
                    onClick={this.startAction}
                    variant="contained" 
                    color="primary" 
                    size="large"
                >
                    Reset
                </Button>
            </div> 
        );
    }

    render() {
        return(
            <div style={{position: 'relative', alignItems: 'center'}}>
                {console.log(this.props.gameReducer.reset)}
                {this.props.gameReducer.reset === false ? this.startButton() : this.resetButton()}
            </div>
        );
    }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(BtnOnePlayer);