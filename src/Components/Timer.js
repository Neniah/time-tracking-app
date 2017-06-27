import React, {Component} from 'react'
import helpers from '../helpers'

class Timer extends Component{
  render(){
    const elapsedString = helpers.renderElapsedString(this.props.elapsed);
    return(
      <div className="col-md-6 col-md-offset-3 panel panel-default">
        <div className="">
          <div className="panel-heading">
            {this.props.title}
          </div>
          <div className="panel-body">
            {this.props.project}
          </div>
          <div className="text-center">
            <h2>{elapsedString}</h2>
          </div>
          <div className="extra">
            <span className="col-md-5">
              <i className="edit icon" />
            </span>
            <span className="col-md-5">
              <i className="trash icon" />
            </span>
          </div>
        </div>
        <div className="btn btn-primary btn-lg">Start</div>
      </div>
    );
  }
}

export default Timer;
