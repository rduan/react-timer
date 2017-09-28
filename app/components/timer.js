var React = require('react');
var Clock = require('./clock');
var Controls = require('./controls');

var Timer = React.createClass({

    getInitialState() {
        return {
            count: 0,
            timerStatus: 'stopped'
        };
    },
//<Clock totalSeconds = {1000} />

    handleStatusChange(newTimerStatus){
        console.log(newTimerStatus);
    },

    render() {
        var {count, timerStatus} = this.state;

        return(
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds = {count} />
                <Controls countdownStatus = {timerStatus} onStatusChange={this.handleStatusChange} />
            </div>
        )
    }
})

module.exports = Timer;