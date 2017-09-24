var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('../../components/countdown');

describe('Countdown',()=>{
    it('Should exist',()=>{
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown',()=>{
        it('should set state to started and countdown',(done)=>{
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownSatus).toBe('started');

            setTimeout(()=>{
                expect(countdown.state.count).toBe(9);
                done();
            },1001)
        });

        it('should net set count less than 0',(done)=>{
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(1);
            
            setTimeout(()=>{
                expect(countdown.state.count).toBe(0);
                done();
            },2001)
        })
    })
})