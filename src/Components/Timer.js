import React, {Component} from 'react'
import helpers from '../helpers'

class Timer extends Component{
  render(){
    const elapsedString = helpers.renderElapsedString(this.props.elapsed);
    return(
      <div className="row text-center">
        <div className="container">
          <div className="header">
            {this.props.title}
          </div>
          <div className="meta">
            {this.props.project}
          </div>
          <div className="text-center">
            <h2>{elapsedString}</h2>
          </div>
          <div className="extra">
            <span className="right floated">
              <i className="edit icon" />
            </span>
            <span className="right floated">
              <i className="trash icon" />
            </span>
          </div>
        </div>
        <div className="btn btn-primary">Start</div>
      </div>
    );
  }
}

export default Timer;
