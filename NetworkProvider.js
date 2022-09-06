import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
}

export const NetworkContext = React.createContext({isConnected: true});

export default class ConnectionInfoSubscription extends React.Component {
  _subscription = null;

  state = {
    connectionInfoHistory: [],
    isConnected: true,
  };

  componentDidMount() {
    this._subscription = NetInfo.addEventListener(
      this._handleConnectionInfoChange,
    );
  }

  componentWillUnmount() {
    this._subscription && this._subscription();
  }

  _handleConnectionInfoChange = connectionInfo => {
    // console.log("connectionInfo==>", connectionInfo)
    this.setState({isConnected: connectionInfo.isConnected});
    this.setState(({connectionInfoHistory}) => ({
      connectionInfoHistory: [...connectionInfoHistory, connectionInfo],
    }));
  };

  render() {
    console.log(this.state);
    return (
      <NetworkContext.Provider value={this.state}>
        {!this.state.isConnected && <MiniOfflineSign />}
        {this.props.children}
      </NetworkContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#fb6041',
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    zIndex: 100,
    top: -5,
  },
  offlineText: {
    fontSize: 15,
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#f7f4ef',
    // fontFamily: "DMSans-Bold"
  },
});
