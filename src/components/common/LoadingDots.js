import React, { PropTypes } from 'react';

class LoadingDots extends React.Component {

  constructor (props, context) {
    super (props, context);
    this.state = {frame: 1};
  }


  /* setInterval () - repeatedly calls a function or executes a code snippet, 
   with a fixed time delay between each call
  var intervalID = scope.setInterval (func, delay); 

   It returns an interval ID which uniquely identifies the interval, 
   so you can remove it later by calling clearInterval() */

  componentDidMount () {

    this.interval = setInterval (
      () => this.setState ({frame: this.state.frame + 1}), 
      this.props.interval
    );
  }

  componentWillUnmount () {
    clearInterval (this.interval);
  }

  render () {
    let dots = this.state.frame % (this.props.dots + 1);
    let text = '';  

    while (dots > 0) {
      text += '.';
      dots--;
    }

    return (
      <span {...this.props}>
        &nbsp;{text}&nbsp;
      </span>
    );
  }
}

LoadingDots.defaultProps = {
  interval: 300,
  dots: 3
};

LoadingDots.propTypes = {
  interval: PropTypes.number,
  dots: PropTypes.number
};

export default LoadingDots;