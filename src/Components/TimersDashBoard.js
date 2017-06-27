import React, {Component} from 'react'
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import helpers from '../helpers'
import uuid from 'uuid';



class TimersDashBoard extends Component{
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: uuid.v4(),
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuid.v4(),
        elapsed: 1273998,
        runningSince: null,
      }
    ],
  };
  render(){
    return(
      <div className="col-md-5 col-md-offset-4">
        <div className="row text-center">
          <EditableTimerList
            timers={this.state.timers}
          />
          <span><ToggleableTimerForm /></span>
        </div>
      </div>
    );
  }
}


export default TimersDashBoard;
