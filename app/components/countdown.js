var React = require('react');
var Clock = require('./clock');
var CountdownForm = require('./countdown-form');
var Controls = require('./controls');


var Countdown = React.createClass({

    getInitialState: function() {
        return {
            count:0,
            countdownStatus: 'stopped'
        };
    },
    startTimer: function() {
        let that = this;
        this.timer = setInterval(()=>{
            var newCount = that.state.count -1;
            that.setState({
                count: newCount >= 0? newCount : 0,
            });

            if(newCount === 0) {
                that.setState({
                    countdownStatus: 'stopped'
                });
            }
        }, 1000);
    },
    componentDidUpdate: function(prevProps,prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
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
    componentWillUpdate: function(nextProps, nextState){

    },

    componentWillMount() {

    },

    componentDidMount(){

    },

    componentWillUnmount: function() {
        clearInterval(this.timer);
        this.timer = undefined;
        console.log("component will unmount")
    },

    handleSetCountdown: function(seconds){
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },
    handleStatusChange: function(newStatus) {
        this.setState({
            countdownStatus: newStatus
        })
    },

    render: function() {
        var {count, countdownStatus} = this.state;
        var renderControlArea = ()=>{
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />;
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown} />;
            }
        };
        return(
            <div>
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds = {count} />
                {/* <CountdownForm onSetCountdown={this.handleSetCountdown}/> */}
                {renderControlArea()}
            </div>
        )
    }
})

module.exports = Countdown;