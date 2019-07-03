import React from 'react';
import { Text } from 'react-native';

const Bold = (props) => {
    return  <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
}

export default Bold;