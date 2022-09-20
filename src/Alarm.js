import React, { useState } from "react";
function Alarm() {
    const [currentTime, setCurrentTime] = useState('');
    const [alarmTime, setAlarmTime] = useState('');
    
    
    function setCurrentTime1() {
        setStateCurrentTime({
            currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
        });
    }
    function setAlarmTime1(event) {
        event.preventDefault();
        const inputAlarmTimeModified = event.target.value + ':00'
        setAlarmTime(inputAlarmTimeModified)
    }
    function checkAlarmClock(){
        if(alarmTime === 'undefined' || !alarmTime) {
            alarmMessage = "Please set your alarm.";
        } else {
            alarmMessage = "Your alarm is set for " + alarmTime + ".";
            if(currentTime === alarmTime) {
                alert("its time!");
            } else {
                console.log("not yet");
            }
        }
    }


}