var React = require('react');
var Clock = require('./clock');
var CountdownForm = require('./countdown-form');

var Countdown = React.createClass({

    getInitialState(){
        return {
            count:0,
            countdownSatus: 'stopped'
        };
    },
    startTimer(){
        this.timer = setInterval(()=>{
            var newCount = this.state.count -1;
            this.setState({
                count: newCount >= 0? newCount : 0,
            });
        }, 1000);
    },
    componentDidUpdate(prevProps,prevState) {
        if (this.state.countdownSatus !== prevState.countdownSatus) {
            switch (this.state.countdownSatus) {
                case 'started':
                    this.startTimer();
                    break;
                default:
                    break;
            }
        }
    },

    handleSetCountdown(seconds){
        this.setState({
            count: seconds,
            countdownSatus: 'started'
        });
    },

    render() {
        var {count} = this.state;
        return(
            <div>
                <Clock totalSeconds = {count} />
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        )
    }
})

module.exports = Countdown;