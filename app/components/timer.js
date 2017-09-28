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

    handleStart(){
        let that = this;
        this.timer = setInterval(()=>{
            var newCount = that.state.count +1;
            that.setState({
                count: newCount ,
            });            
        }, 1000);
    },

    handleStop(){
        this.setState({
            count: 0,
            //timerStatus: 'stopped'
        })
    },

    handlePause(){
        clearInterval(this.timer);
        this.timer = undefined;
        // this.setState({
        //     timerStatus: 'paused'
        // })
        
    },

    //only handle count
    componentDidUpdate(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.handleStart();
                    break;
                case 'stopped':
                    this.handleStop();
                    //break;
                    //will need clearInterval in handlePause()
                case 'paused':
                    this.handlePause();
                    break;
            }
        }
    },

    componentWillUnmount() {
        clearInterval(this.timer);
    },

    //handle timerStatus, but not count
    handleStatusChange(newTimerStatus){
        // console.log(newTimerStatus);
        this.setState({
            timerStatus: newTimerStatus
        })
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