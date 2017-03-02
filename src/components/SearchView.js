import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { searchMovie } from '../actions';
import MovieItem from './MovieItem';
// import _ from 'lodash';
import { CardSection, Card, SearchBar, TabBar } from './common';


class Home extends Component {

  renderMovie() {
    return this.props.movies.list.map((giph) =>
      (<MovieItem key={giph.id} giph={giph} />)
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Card>
          <CardSection>
            <SearchBar
              value={this.props.movies.query}
              placeholder={'Search Movie'}
              onChangeText={(query) => this.props.searchMovie(query)}
            />
          </CardSection>
          <ScrollView>
            {this.renderMovie()}
          </ScrollView>
        </Card>
        <TabBar />
      </View>
    );
  }
}


const mapStateToProps = ({ movies }) => ({
  movies
});

export default connect(mapStateToProps, { searchMovie })(Home);
