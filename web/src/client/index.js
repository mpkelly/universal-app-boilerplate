import * as React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {ThemedSection, Base, StyleGuide, Autumnal} from 'react-styles';


class App extends React.Component {

  render() {
    const theme = this.props.theme;
    return (
      <ThemedSection theme={theme}>
        <Base>
          <StyleGuide theme={theme}/>
        </Base>
      </ThemedSection>
    );
  }
}

render(
  <Router>
    <Route path="/" component={() => (<App theme={Autumnal} />)} />
  </Router>
  ,
  document.getElementById('root')
);
