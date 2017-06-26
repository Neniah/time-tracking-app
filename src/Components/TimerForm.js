import React, {Component} from 'react'

class TimerForm extends Component{
  render(){
    const submitText = this.props.title ? 'Update' : 'Create';
    return(
      <div className="panel default-panel editable">
        <div className="form editable">
          <div className="panel-content">
            <div className="input-group editable">
              <span className="input-group-addon">Title</span>
              <input className="form-control" type="text"
                defaultValue={this.props.title} />
            </div>
            <div className="input-group editable">
              <span className="input-group-addon">Project</span>
              <input className="form-control" type="text"
                defaultValue={this.props.project} />
            </div>
          </div>
          <div className="">
            <div className="btn-group">
              <button className="btn btn-default">{submitText}</button>
              <button className="btn btn-default">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerForm;
