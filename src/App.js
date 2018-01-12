import React, { Component } from 'react';
import { Layout, Button } from 'antd';

import { Watcher } from './systems/database/watcher.js';

import './App.css';
import './App.less';

import Splash from "./Splash";
import Login from "./Login";
import NotFound from "./screens/error/NotFound";

import { withRouter, Switch, Route } from 'react-router-dom';

const App = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/'
  
  return (
  	<Layout>
            <Switch location={location}>
              <Route key="/" path="/" exact component={Splash} />
              <Route key="/subpage" path="/subpage" component={Login} />
              <Route path="*" component={NotFound} /> 
            </Switch>
    </Layout>
  )
}

export default withRouter(App)

// let Header = Layout.Header;
// let Footer = Layout.Footer;
// let Sider = Layout.Sider;
// let Content = Layout.Content;

// // TransitionGroup function
// const firstChild = props => {
//   const childrenArray = React.Children.toArray(props.children);
//   return childrenArray[0] || null;
// };

// class App extends Component {
//   render() {
//     return (
//       <Layout>
//         <Route
//           exact
//           path="/"
//           children={({ match, ...rest }) => (
//             <TransitionGroup component={firstChild}>
//               {match && <Splash {...rest} />}
//             </TransitionGroup>
//         )}/>
//         <Route
//           path="/subpage"
//           children={({ match, ...rest }) => (
//             <TransitionGroup component={firstChild}>
//               {match && <Login {...rest} />}
//             </TransitionGroup>
//         )}/>
//         {/* <Header>header</Header>
//           <Content>
//             <Button type="primary">Download for Android</Button>
//           </Content>
//         <Footer>footer</Footer> */}
//       </Layout>
//     );
//   }
// }

// export default App;
