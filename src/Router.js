import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import AppContainer from './components/AppContainer';
import AppSetup from './components/AppSetup';
// import Home from './components/Home';

const RouterComponent = () => (
  (
    <Router sceneStyle={{ paddingTop: 0, backgroundColor: '#eee' }}>
      <Scene key={'auth'}>
        <Scene
          key={'welcome'}
          component={AppContainer}
          title={'AppContainer'}
          navigationBarStyle={styles.navbarContainer}
          titleStyle={styles.titleStyle}
        />
        <Scene
          key={'AppSetup'}
          component={AppSetup}
          title={'Make your pick'}
          navigationBarStyle={styles.navbarContainer}
          titleStyle={styles.titleStyle}
        />
      </Scene>
      <Scene key={'app'}>
        <Scene
          key={'Home'}
          component={AppContainer}
          title={'Home Page'}
          navigationBarStyle={styles.navbarContainer}
          titleStyle={styles.titleStyle}
        />
      </Scene>
    </Router>
  )
);

// <Scene key={'setup'} hideNavBar>

// </Scene>

const styles = {
  navbarContainer: {
    flex: 1,
    backgroundColor: '#E57373',
  },
  titleStyle: {
    color: '#eee',
    fontSize: 20,
  },
};
export default RouterComponent;

// import Example from './components/Example';

// const RouterComponent = () => (
//   (
//     <Router sceneStyle={{ paddingTop: 0, backgroundColor: '#eee' }}>
//       <Scene key={'main'} hideNavBar>
//         <Scene
//           key={'example'}
//           component={Example}
//           title={'DEMO'}
//           navigationBarStyle={styles.navbarContainer}
//           titleStyle={styles.titleStyle}
//           initial
//         />
//       </Scene>
//     </Router>
//   )
// );
// export default RouterComponent;

// <Scene
//   key={'MoviesList'}
//   component={MoviesList}
//   title={'Make your pick'}
//   navigationBarStyle={styles.navbarContainer}
//   titleStyle={styles.titleStyle}
// />
// <Scene
//   key={'movieDetail'}
//   component={MovieDetail}
//   title={'More...'}
//   navigationBarStyle={styles.navbarContainer}
//   titleStyle={styles.titleStyle}
// />
