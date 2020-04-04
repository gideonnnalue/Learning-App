import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Accordion} from 'native-base';

const OverviewAccordion = ({dataArray}) => {
  return (
    <View style={styles.container}>
      <Accordion dataArray={dataArray} expanded={0} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {height: 200, marginTop: 10},
});

export default OverviewAccordion;
