import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>; //type saftey

//first approch for passing props

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Details', {productId: '78'})}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, alignContent: 'center', alignItems: 'center'},
  smallText: {
    color: '#00000',
  },
});
