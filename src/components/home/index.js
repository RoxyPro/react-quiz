import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Choose one quiz from list bellow</h2>
        {this.props.list}
      </div>

    );
  }
}

export default Home;
