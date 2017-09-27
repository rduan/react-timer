var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },

    // onStatusChange(newStatus) {
    //     // return ()=>{
    //     //     this.props.onStatusChange(newStatus);
    //     // }
    //     this.props.onStatusChange(newStatus);
    // },
    
    /**
     * Good, when using this, not need to bind or using arrow function when calling
     */ 
    // onStatusChange: (newStatus)=>{
    //     // return ()=>{
    //     //     this.props.onStatusChange(newStatus);
    //     // }
    //     
    // },


    /**
     * must bind or use arrow function when calling in render function
     */
    onStatusChange (newStatus){
        // return ()=>{
        //     this.props.onStatusChange(newStatus);
        // }
         this.props.onStatusChange(newStatus);
    },
    render() {
        var {countdownStatus} = this.props;
        //onClick={this.onStatusChange.bind(this,'started')}
        var renderStartStopButton = ()=>{
            if(countdownStatus == 'started') {
                return (
                    <button className="button secondary"
                        onClick={this.onStatusChange.bind(this,'paused')}
                    >Pause</button>
                )
            } else if(countdownStatus == 'paused') {
                //onClick={()=>this.onStatusChange('started')}
                return (
                    <button className="button primary"
                        onClick={()=>this.onStatusChange('started')}
                    >Start</button>
                )
            }
        }

        //
        return(
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow"
                    onClick={this.onStatusChange.bind(this,'stopped')}
                >Clear</button>
            </div>
        )
    }
})

module.exports = Controls;