import React from "react";
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentTime: '',
            alarmTime: ''
        };
        this.setAlarmTime = this.setAlarmTime.bind(this);
    }
    componentDidMount(){
        this.clock = setInterval(
            () => this.setCurrentTime(),
            1000
        )
        this.interval = setInterval(
            () => this.checkAlarmClock(),
            1000)
    }
    componentWillUnmount(){
        clearInterval(this.clock);
        clearInterval(this.interval);
    }
    //1
    setCurrentTime(){
        this.setState({
            currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
        });
    }
    //1
    //2
    setAlarmTime(event) {
        event.preventDefault();
        const inputAlarmTimeModified = event.target.value + ':00'
        this.setState({
            alarmTime: inputAlarmTimeModified
        })
    }
    //2
    //3
    checkAlarmClock(){
        if(this.state.alarmTime === 'undefined' || !this.state.alarmTime) {
            this.alarmMessage = "Please set your alarm.";
        } else {
            this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
            if(this.state.currentTime === this.state.alarmTime) {
                alert("its time!");
            } else {
                console.log("not yet");
            }
        }
    }
    //3
    render() {
        return (
            <div>
                <h1>React Alarm Clock</h1>
                <h2>It is {this.state.currentTime}.
                </h2>
                <h2>{this.alarmMessage}
                </h2>
                <form>
                    <input type="time" onChange={this.setAlarmTime}></input>
                </form>
            </div>
        );
    }
}
// function App() {
//   return (
//     <div className="App">
   
//    {/* Task 2
// Alarm application
// 1.As a user I should be able to set different alarms for my preferred time.
// 2.For creating alarm as a user I should be able to set title and alarm time
// 3.When it is alarm time, use should see notification with title and “Snooze” and “Disable” buttons via Popup ( use Portal )
// 4.Please note that I should be able to set several alarms
// 5.Alarm should have opportunity to snooze. So when user clicks on snooze, alarm time should be extended for 5 minutes.
// 6.After clicking on refresh we shouldn’t loose our previous info */}
//     </div>
//   );
// }

// export default App;
