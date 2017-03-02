import React, { Component } from 'react';
import { View, TabBarIOS } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import MoviesList from './MoviesList';
import Watchlist from './Watchlist';

class TabBar extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TabBarIOS
          style={styles.tabBarStyle}
          itemPositioning="fill"
          unselectedTintColor="#616161"
          unselectedItemTintColor="#616161"
          tintColor="#E57373"
          barTintColor="rgba(233, 235, 238, 0.2)"
          translucent
        >
          <Icon.TabBarItemIOS
            title="Home"
            iconName="home"
            selected={this.props.selectedTab === 'home'}
            onPress={() => this.props.changeTab('home')}
          >
            <MoviesList
              movies={this.props.movies}
              selectedTab={this.props.selectedTab}
              user={this.props.user}
              genres={this.props.genres}
            />
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="Popular"
            iconName="fire"
            selected={this.props.selectedTab === 'popular'}
            onPress={() => this.props.changeTab('popular')}
          >
            <MoviesList
              movies={this.props.movies}
              selectedTab={this.props.selectedTab}
              user={this.props.user}
              genres={this.props.genres}
            />
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="Watchlist"
            iconName="film"
            selected={this.props.selectedTab === 'watchlist'}
            onPress={() => this.props.changeTab('watchlist')}
          >
            <Watchlist
              selectedTab={this.props.selectedTab}
              user={this.props.user}
              movies={this.props.movies}
            />
          </Icon.TabBarItemIOS>
        </TabBarIOS>
      </View>
    );
  }
}

export default TabBar;

const styles = {
  tabBarStyle: {
    flex: 1,
    backgroundColor: '#fff',
  }
};
