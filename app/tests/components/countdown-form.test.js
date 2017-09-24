var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('../../components/countdown-form');

descript('CountdownForm',()=>{
    it('Should exits',()=>{
        expect(CountdownForm).toExist();
    });

    
});