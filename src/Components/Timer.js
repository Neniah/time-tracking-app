import React, {Component} from 'react'
import helpers from '../helpers'

class Timer extends Component{
  render(){
    const elapsedString = helpers.renderElapsedString(this.props.elapsed);
    return(
      <div className="col-md-10 col-md-offset-1 panel panel-default">
        <div className="">
          <div className="panel-heading">
            <h2>{this.props.title}</h2>
            <p>{this.props.project}</p>
          </div>
          <div className="text-center">
            <h2>{elapsedString}</h2>
          </div>
          <div className="row">
            <div className="col-md-1 col-md-offset-8">
              <i className="glyphicon glyphicon-pencil" />
            </div>
            <div className="col-md-1 col-md-offset-1">
              <i className="glyphicon glyphicon-trash" />
          </div>
        </div>
        <div className="btn btn-primary btn-lg btn-block">Start</div>
      </div>
    </div>
    );
  }
}

export default Timer;
