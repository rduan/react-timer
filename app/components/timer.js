var React = require('react');
var Clock = require('./clock');

var Timer = React.createClass({
//<Clock totalSeconds = {1000} />
    render() {
        return(
            <div>
                timer down
                <Clock totalSeconds = {1000} />
            </div>
        )
    }
})

module.exports = Timer;