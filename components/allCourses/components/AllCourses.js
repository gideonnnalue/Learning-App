import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

// Component
import CourseCard from '../../../UI/CourseCard';

const DATA = [
  {
    id: 1,
    courseName: 'Introduction to Blockchain and Cryptocurrency',
    courseImg: require('../../../assets/images/crypto101.jpg'),
  },
  {
    id: 2,
    courseName: ' Blockchain Use Cases',
    courseImg: require('../../../assets/images/usecases.jpg'),
  },
  {
    id: 3,
    courseName:
      ' Virtual Financial Assets And The Regulation of Blockchain Micro-Loans',
    courseImg: require('../../../assets/images/finance.png'),
  },
];

const AllCourses = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <CourseCard
            courseName={item.courseName}
            courseImg={item.courseImg}
            navigate={props.navigate}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default AllCourses;
