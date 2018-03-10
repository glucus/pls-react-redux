import React, {PropTypes} from 'react';
// {PropTypes} - to run typechecking on the props for a component
import Header from './common/Header';

class App extends React.Component {
  render () {
    return (
      <div className = "container-fluid">
        <Header />
        {this.props.children}   
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

//child components will be passed by React router as properties

export default App;