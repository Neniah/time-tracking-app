import React, {Component} from 'react'

class TimerForm extends Component{
  state = {
    title: this.props.title || '',
    project: this.props.project || '',
  };
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value});
  }
  handleProjectChange = (e) => {
    this.setState({ project: e.target.value});
  }
  render(){
    const submitText = this.props.title ? 'Update' : 'Create';
    return(
      <div className="panel default-panel editable">
        <div className="form editable">
          <div className="panel-content">
            <div className="input-group editable">
              <span className="input-group-addon">Title</span>
              <input className="form-control" type="text"
                defaultValue={this.state.title}
                onChange={this.handleTitleChange}
              />
            </div>
            <div className="input-group editable">
              <span className="input-group-addon">Project</span>
              <input className="form-control" type="text"
                defaultValue={this.state.project}
                onChange={this.handleProjectChange}
              />
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
