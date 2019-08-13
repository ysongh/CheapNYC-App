import React from 'react';
import { Text } from 'react-native';

const Hyperlink = (props) => {
    return  <Text style={{ fontStyle: "italic", color: "blue" }}>{props.children}</Text>
};

export default Hyperlink;