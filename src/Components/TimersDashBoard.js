import React, {Component} from 'react'
import EditableTimerList from './EditableTimerList';

class TimersDashBoard extends Component{
  render(){
    return(
      <div className="col-md-6 col-md-offset-3">
        <div className="row text-center">
          <EditableTimerList/>
          <span>ToggleableTimerForm isOpen={true}</span>
        </div>
      </div>
    );
  }
}


export default TimersDashBoard;
