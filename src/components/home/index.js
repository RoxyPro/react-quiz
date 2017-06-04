import React from 'react';

class Home extends React.Component {
  render() {
    let { list } = this.props;
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Choose one quiz from list bellow</h2>
        {list}
      </div>

    );
  }
}

export default Home;
