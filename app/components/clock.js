var React = require('react');
var Clock = React.createClass({
    formatSeconds: function(totalSecondes) {
        var seconds = totalSecondes % 60;
        var minutes = Math.floor(totalSecondes/60);
        if (seconds < 10) {
            seconds = '0'+seconds;
        }
        if (minutes < 10) {
            minutes = '0'+minutes;
        }
        return `${minutes}:${seconds}`
    },
    render() {
        return(
            <div>
                clock
            </div>
        )
    }
})

module.exports = Clock;