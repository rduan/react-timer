var React = require('react');
var Clock = require('./clock');
var CountdownForm = require('./countdown-form');
var Controls = require('./controls');


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
                case 'stopped':
                    this.setState({count:0});
                case 'paused': 
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                default:
                    break;
            }
        }
    },

    componentWillUnmount() {
        clearInterval(this.timer);
    },

    handleSetCountdown(seconds){
        this.setState({
            count: seconds,
            countdownSatus: 'started'
        });
    },
    handleStatusChange(newStatus) {
        this.setState({
            countdownSatus: newStatus
        })
    },

    render() {
        var {count, countdownSatus} = this.state;
        var renderControlArea = ()=>{
            if (countdownSatus !== 'stopped') {
                return <Controls countdownStatus={countdownSatus} onStatusChange={this.handleStatusChange} />;
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown} />;
            }
        };
        return(
            <div>
                <Clock totalSeconds = {count} />
                {/* <CountdownForm onSetCountdown={this.handleSetCountdown}/> */}
                {renderControlArea()}
            </div>
        )
    }
})

module.exports = Countdown;