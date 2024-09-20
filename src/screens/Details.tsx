import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({route}: DetailsProps) => {
  const {productId} = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text>Details:{productId}</Text>
      <Button
        title="go to home"
        //onPress={() => navigation.navigate('Home')}
        onPress={() => navigation.goBack()} //one scree back
      />
      <Button
        title="go back to fisrt screen"
        //onPress={() => navigation.navigate('Home')}
        //onPress={() => navigation.pop(2)} //one scree back
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {flex: 1, alignContent: 'center', alignItems: 'center'},
  smallText: {
    color: '#00000',
  },
});
