import React, {Component} from 'react'
import EditableTimer from './EditableTimer';

class EditableTimerList extends Component{
  render(){
    return(
      <div id="timers">
        <EditableTimer
          title='Learn React'
          project='Web Domination'
          elapsed='8986300'
          runningSince={null}
          editFormOpen={false}
        />
        <EditableTimer
          title="Learn extrem ironing"
          project="World Domination"
          elapsed="3890985"
          runningSince={null}
          editFormOpen={true}
        />
      </div>
    );
  }
}

export default EditableTimerList;