import React, {Component} from 'react'
import helpers from '../helpers'

class Timer extends Component{
  render(){
    const elapsedString = helpers.renderElapsedString(this.props.elapsed);
    return(
      <div className="row text-center">
        <div className="col-md-5 col-md-offset-4">
          <div className="panel-content">
            {this.props.title}
          </div>
          <div className="meta">
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
