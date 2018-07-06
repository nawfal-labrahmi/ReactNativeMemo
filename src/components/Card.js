import React from 'react';
import { View } from 'react-native';

// Functional component
const Card = (props) => {
  return (
    // Autmatically bind props from parent with props.children
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    // border
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    // margin
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
