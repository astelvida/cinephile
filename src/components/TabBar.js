import React, { Component } from 'react';
import { View, TabBarIOS } from 'react-native';
import MoviesList from './MoviesList';
import Watchlist from './Watchlist';


class TabBar extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TabBarIOS
          style={styles.tabBarStyle}
          itemPositioning="fill"
          unselectedTintColor="#dedede"
          tintColor="#fff"
          unselectedItemTintColor="#dedede"
          barTintColor="#00695C"
        >
          <TabBarIOS.Item
            title="Home"
            icon={{ uri: wow, scale: 1.5 }}
            selected={this.props.selectedTab === 'home'}
            onPress={() => this.props.changeTab('home')}
          >
            <MoviesList
              movies={this.props.movies} selectedTab={this.props.selectedTab}
              user={this.props.user}
            />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Popular"
            icon={{ uri: funny, scale: 1.5 }}
            selected={this.props.selectedTab === 'popular'}
            onPress={() => this.props.changeTab('popular')}
          >
            <MoviesList
              movies={this.props.movies} selectedTab={this.props.selectedTab}
              user={this.props.user}
            />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Watchlist"
            icon={{ uri: funny, scale: 1.5 }}
            selected={this.props.selectedTab === 'watchlist'}
            onPress={() => this.props.changeTab('watchlist')}
          >
            <Watchlist
              selectedTab={this.props.selectedTab}
              user={this.props.user}
              movies={this.props.movies}
            />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Geolocation"
            icon={{ uri: funny, scale: 1.5 }}
            selected={this.props.selectedTab === 'geolocation'}
            onPress={() => this.props.changeTab('geolocation')}
          >
            <Watchlist
              selectedTab={this.props.selectedTab}
              user={this.props.user}
              movies={this.props.movies}
            />
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

export default TabBar;

const styles = {
  tabBarStyle: {
    backgroundColor: 'yellow',
    // flex: 1,
    // justifyContent: 'space-between',
    // alignItems: 'stretch',
  }
};

const heart = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAED0lEQVRoQ+2Z/bUMQRDF60WACHgRIAJEwIsAESACRIAIeBEgAkSACBABIuD89tSdU9vbMz3dO7Onz57tf968+aiuW/d2VXXvmR3JODsSHHYC0huTJ0ZOjKwUgRpp3TCz+2b2wMyumtkt9+mz//1gZh/N7OdMX6M9Prnr330zsz9mVmVvDhAmeB4mKvmJA88mAAHglQekZIvnBAp7ABwdJSBM+NS//utReuhGb/t9HIOd92EWIvrazF4mMxOQF8m9x+6smPzq9i4d7BV/H3sAyo4xIEgHx0Q3DmEIByUlPZNh7vMdjOAw452Z4SjjrZk98mvs8e4Tdw7b0Q7X2OcdAil7zHHhfmwBGgPyyQ398qhM0poJEQwB6LqD4RVAwCoOYg8nuQdYAjQ1sAcI2OHvvfTlHBCiQ6QAgQEmARgjNTB1H0evORi+xR4gSBjIJjo/xz72CADBeRMkv3EsBcJEMsoaEBNTcpIMYpD0PrJA82KCjIdMkBtM5OSUsyMZE1jsMaJ/O0AkKTScLsoC+6OPlSxgukZOYwbxi2BsSSwyQvb54dHjWlmoRk45+RFBMhKLNI45csq9jx3ssV7OleYjECJHupX+WuWUy2ZT8mt5H1lSBkjHm4wXgeD4HY8cGafnwVpDMV9UIiIQFSIWuIqdwLTKYF9Zjs2742sE8s+9HlA2ZJXaLLTP+6hnUFUOSKlt6UVyCvzG3+g0BYpMoHu9ySn1ByDUJ1J6drGjaxZ+z1lLhTu72HdSWi8aSvyAAQoi5YJWZ9OI5upI71lLlR3/s3VElT0FyP89yQxGfjtL2crOM9i4mWnqelIZUmJv8z1st3eaRrUp2iSRydYqaq1ZUe3OIKuchKBNDRnPeyuOKoLsbVgKw8gVP1EHG2iwtHs7lOwIMt05f9P9zOjZr9aKev5WGSwpS+2VttaGojjWjsSdGFqk25Q2IwOHymZ042wxGFs7wxIQnktiXO9QeSg9zfWj1CCq2uM3OzMic0iZxWAOVTwXxBIQvhEYpWKdQbXs7GpkSQVX0CZB5NLvmGIiM4eQ2Wwm5qyRFFQEo+PLNWQWj2mLTLQA4ZvYsLFeVGeWkJnqhDJk1ZHUnDWSMgPtMMImjC5Ah9D7JDICQf9EtWazRKsUD/CKtluAYJQ6w0Q0mGKKSLb0ZtQiHQZS7AhU7VnzXr/qIgWY4XxJI1d1x4qmugd9y3kagJpaolZGItUwATtIDSdwBqemBofkvEcwkBIs7HWWtgQQHMYhwHDSzgAQEc/1Wshyc2DgP9UBoomFGKmlgMhmZId76ga41ukg14uwsCaQHDvKPvq1ih9MF2FhbSCyH9O0WKhOq4W1NjxeWlrpvErT3G9Kq70AkdSUAOb6Vf3e2oxUO9T6wdEA+Q+iITpCRugnwwAAAABJRU5ErkJggg==';

const funny = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADd0lEQVRoQ+2aj60NQRjFz6sAFaACVIAKUAEqQAWoABXwKkAFqAAVoAJUQH7JHPkymdlv71u7s7l5X3KTm7szO+fM9+/MvHeiI7GTI+GhOUReSLor6cog0t8lvZH0fGr9jMhLSY8GEaiXhcizHpaMyE9JFyXdkPRlEKHrkj5LwjNXz0rkT5mYEV6bY4ojA5i+YG0G5f0pjnMiG3nCy5x7ZPZOlIFUttel37yT9FDSrwO8ls3fzCMfJN0KwN8XUnO5ZPM3I+KFbksCFJYVkkgym78ZkY+SblbbTwPlw7PThmuQPKgGPEnTi1Z7dDMixDh66I6k35IuVMDoyveCOnhQcqoVepDgecyxzYhEQOywwwtQkMMARuix+xQG7FMRo5dLgWAzWjaECECoXBB4Ujxlb0EG72FUNn7/Vsigo/Dcrog4dGKsA/p+QRmVbLrbktIxWWVJX9DZwZ5itYKOyT1njXTMWkTgly5eNmHOuHTM/yJCKSUn2Gm++wPWeg3GceJkbPTMFJZViEQ5QY8gQcmJllGV3PEBzbE5KoA4x8m/WbLXcsILU5GoUhCDYDRIMI9N+CGJIzRjyBkXhqkT4CoeackJgwYMOxuJEGYcVSFBh295j3lTvWQVIrUcIXworVwMACb2CL7bg68kPQ5uctOkSWZeWYVIlCOQIHEtJ+Ktiz1DwyOcCK8oO+w158yUV1Yh0snrfz9HHUUOQKD2RusdyBbmtnJlCBFAEkJUKBvhUxeASIYccin+2lDDw4gAMkqSS8mJ0UB7JXgYEZ81nNxLG+/mROjaxDkFwNYKlTpHMqDZ8/Q4mr4gIIpxzs/0DMKrlxtUv2slH6h2WM9zKY6lLo87S4UCGAYwunzLasJzPLcpEQDRFJ8WZBDj8rs2E+ZIjHEsntJZjNmcCIuSH29LE8z+pmKVkJXnIUTcQ3q6KnrISoAwdJ60wnEIEZ/X2W0kCRKEbu0wc+cnDMlRQjHr/EOI+I9D9c5yToecxWJ8Hs8tu/EIyUxpBbS9Qs5gvkUh7MgfX+rxO92/Z0M80gITq1m8WaEwkBsQqW8b43t2QwRQvkEhZw65qR9Wfici5MyPduWRM7MY1RCXAN59si8ltzi0SEq00B7+YYBzf1fyZOo3ls2lu7p0/qJ/4WBxyCArfNWzFNCh8/GEr5u6czOPHLrosPFHQ+QvAgUCQmwbmLoAAAAASUVORK5CYII=';

const wow = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEw0lEQVRoQ+2Zj5EMQRjFv4sAESACRIAIEAEiQASIABFwESACRIAIEAEioH5b/bbefPvNTO/O7RZbN1XK3XRP93vv+9t9J3Ekz8mR8IhzIgss+SAivkfExwVrbHx6aItciYjPEfElIm7/K0RuRcTTiHjYFO7BBYnrbSJEzswqSyzyJiLuN1D8/CQifk2wedaIawokzswquxLBRb4l0JB4GRGvCkJY70NBsrIKa9+MCL7h39UeU+9KJKvrexHIjJ+2lxdbXAAwP1gF13TgeV4Xxq5JBYCfEQHAqYeAxt0eRcTdHlVH5nRh7JqUNiB9vrZ3v9vPFzrBMr93Lkt2YeyalAB65mGImMCVHrd/UyC/tjlVvIzp0IUxT8IdrnUqq2kEI3HBg39DStnMl8ISBC97EBvEhZ5P7R3vM8mdiGS3meP0fsT/qRVkMAdLvPCORxkJ4LmW/Emb7kSENUijvT48V9QATI3BCr0Bn4lMiYkl2aMMJFQj08w9P5orzc1jnAw3VSx9jW2I3IuId2NEqmJ3o6naA3rpnF4iAyHH/C8HI8WN+DnE00uEQorbrp6uQDoE+qV7HCURgkbZCleS2Sh0d0wxAkyB6zn/uaVS4owWn4yi3kmHKeap7ugooOW1Nsnhre1JmlfqxsVVp6hNq2zoFoGIAHt9oMv1Rk6ZIne0Sgg9tUj+Tb2hU9CjdA44JwJxdcElTifiHa0+rDKYAh9LvWgIUAYVq3adXM9Y7hgE2uuWimZVAtRBuLBYF9wDi2QQl1qmElipJpJ+sFJhcrWY7wUzqyyr+zcSKXsBa0GSPem8swU3spanPkB4fHjXijqYXsdWKePtPQ2ixrWx93JYArHcExjHdXVo8z0VJx6Xa4+aahoBR4XHLVgQcxPAUsctJeVdCLpihPAnuwz7Z09Aea0NBtZQEuJ3YRgIlYn4RiimwxNqoJwCE/fyBKB1nMjaf42Ju6O7tn/n+5JAIKIs5fsOhMpExjKOskzVULoyDmjd0BkRP8soQTBcHR80PodptXwmUmUp5iljZEUZc2XyuAd7diFve6ospXG8wgNcuvg5qGxRsuqueKWO9zy5LrCpzhurdtseb0Tn1s0Wc2uWFuFlTqGueKXOQJmWsv1Mn/Cvfh00fC3e8vUSGU0dRLbYxoGu6rVQxztdgg1F9OA+HuhZaeZhGb7jfxVCLMs6JA21KE7ST4qMOwadOB3DuvOtYqRS7794d5Tdb1a+5xLuEELgZpcN3Pp464DHgIzd1Way2xJRY7k6Z3c+OdDL0+oYkN4LiPw9QDkK0CCS7fJVjwoi7/384pyqhtHH1aMNdBgjMreYFuF7B+9XPvnPBqTkfO4n8/hBK3fIY0bbuAzZ1jXyxQAuMnVfpcpekXCQpGQsCDE/jY4R2WhIlxKZc3OskmvC2DfeLM6t6yfG1dx9E6kA0V4AZO6OuTrPjBI8KyJcluFmuEa+8/XN/SKbeMGlPLX63NzGTFppCREH7y3MWOp2EgJFoqj+HMFc2qDea9atXQuXkPIOPquVbyoZn7p2hRCW1AFq65vNbS0yF4Qaz1bpdROsgHvmRnV2330RYWNZpZfELNipCfskolvGQbu9CO3Ex/sksi/M5brnRA4qd8dmfwHamS1CJIwycQAAAABJRU5ErkJggg==';


const random = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADt0lEQVRoQ+2aj5ENQRDGv4sAGRDBEQEiQASIABEgAkSACBCBEwEiQASIgPpVTav2zGx37857da6uq17tvrezM/31v69n7o50RuTojODQOZDT5sl9eeSypAeSrkq60UCfSPok6YWkr7MNsQ8gzyQ9DBR9LunRTDCzgbx3Hngt6ZUkPIHgmXuS7joP3ZwFZiaQJ5IeS/rZlCaMekK4Ae6CpKeSeG+zrAGCZbEqV3IBQWkURK6170vKMfZj511yB5B40zyZAlkBclES8U94jKRiYfPgaC7yiPl+ZJBUgGBBLEnosMhbZ3m8w4ffUwtLwjAUBSxv1mf+2+13Qg9P4+FQskBeNk98btdR/IcLJgcAiEJx3K73o/cyQCyeoySO1qo+90XhSsQ9GSBYhuSGyCJ+qCobjSdUIVaSfyk3U70W8XtdEjW/VEkiLRPPyTu46YPjp+5rGY/8am9mxiZ0Kw9JrZ9RjipEBblUrEiEBBXI+MU4ghDNFgsq2/dWKbkfSgZINbRQ/I0jy97iVCFyL5JpoUXLYS1EhuywGnwD439zPIFXd3utTM550uQeHco54htAJsiQnS0MCDzTI0cbkyE7I00MihAd3UZzFFpW9qrcYex/pzF/z3oW9zzLhDbjPKd0aaA3EWHxpWmQaQC9spZPS4VhDRADY43mPwTZA5ImoShTB88ttN61qlaZZkjOPSDVKlVRBHamb0Oq3uadYRXrAUkRUEX7NtZXwGz53V3GwpIiQvj+kUMBoUdjL4OsBWFKY2iK0F8EeYjQsnCYAaIUWrOTnQ3YrUn781Kybym/vdShVyIMwj1FkHd+n58qv8xnXiGpYNJsk9fTZUbxAASdBgZJE6IpY2WY79R+Jsjux1cUte4rKE4Xbf3ekHuiFsE3bZmmcRYAmye9fgSECbcS5JbQmtbGA8SStbKx8p7ZAmRIgLuuz3hkiyIzQi21fgbI1tDaAmZqaJ2G46DwKCrjESOiGZxS8Y7njpBMM0BY3LwCMdL0bSHIDBhA0O5zDQ/nmDALhLEoz1ksngEYCxggDvCI5wppGtmRgxzAISjOqSb7Fp5z1mzHSYsGqABhYggKph1JhTSjPytgFMakuokKEFMey3PwxhUPIVjO7jM7P98A+ne5x0N0zKXj2TVARt4wC0dFwSdxxYPTQiuTpL7RJI/4WPyTR8S+naqvOXwY6jDTI7aIbQGWgIe8kLGaH7MPIMzP5ox9OmGEJxA8Q5UD6H/xDwNVY04Zvy+PTFGuMsk5kIq1DjH2N1aJ6DOk+ONwAAAAAElFTkSuQmCC';
