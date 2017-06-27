import React, {Component} from 'react'
import TimerForm from './TimerForm'

class ToggleableTimerForm extends Component{
  state = {
    isOpen: false,
  };
  handleFormOpen = () => {
    this.setState({ isOpen: true});
  };
  render(){
    if(this.props.isOpen){
      return(
        <TimerForm />
      );
    } else {
      return (
        <div className="col-md-5 col-md-offset-4">
          <button className="btn btn-default">
            <i className="plus icon" />
          </button>
        </div>
      );
    }
  }
}


export default ToggleableTimerForm;
