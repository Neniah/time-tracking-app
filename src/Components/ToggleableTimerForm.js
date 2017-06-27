import React, {Component} from 'react'

class ToggleableTimerForm extends Component{
  render(){
    if(this.props.isOpen){
      return(
        <TimerForm />
      );
    } else {
      return (
        <div className="text-center container">
          <button className="btn btn-default">
            <i className="plus icon" />
          </button>
        </div>
      );
    }
  }
}


export default TimersDashBoard;