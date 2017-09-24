var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('../../components/countdown-form');

describe('CountdownForm',()=>{
    it('Should exits',()=>{
        expect(CountdownForm).toExist();
    });

    it('should call onSetCountdown if valid seconds entered',()=>{
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
            //$el.find('form')[0])
    });

    it('should not call onSetCountdown if invalid seconds entered',()=>{
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        countdownForm.refs.seconds.value = 'a109';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
            //$el.find('form')[0])
    });
    
});