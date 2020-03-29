import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Content, Accordion} from 'native-base';
const dataArray = [
  {
    title: 'Overview',
    content:
      'In this course, David walks you through the basics of cryptocurrency markets and trading strategies. You’ll explore some key terminology and concepts before diving into the different types of trading, and their pros and cons. You’ll earn a deep understanding of the risks involved in trading, and how to identify those risks. David will walk you through what you should consider when taking on these strategies, and how to find a strategy that’s right for you. In the next part of the course that’s coming soon, you’ll learn all about market fundamentals, and how they fit into your trading strategy.',
  },
  {
    title: 'Audience',
    content: 'Anyone interested in investing in cryptocurrencies ',
  },
  {title: 'Prerequisites', content: 'None'},
];

const OverviewAccordion = () => {
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
