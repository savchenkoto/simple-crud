import React, {Component} from 'react';

class Info extends Component {

  render() {
    return (
      <div>
        <img src={require('../images/React.jpg')} alt="React logo"/>
        <p>Some text</p>
      </div>
    )
  }

}

export default Info;