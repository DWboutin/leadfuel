import React from 'react';

import Header from './sections/Header.react';
import Footer from './sections/Footer.react';

class Application extends React.Component {
  render() {
    return (
      <div id="leadfuel-widget" className="widgetOpen">
        <div className="container widget z-depth-2">
          <Header />
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Application;