import React, {useEffect} from 'react';
import {ActivityIndicator, View, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// Component
import CourseCard from '../../../UI/CourseCard';

import {getCourses} from '../actions';
import Colors from '../../../constants/Colors';
import styles from './styles';

const AllCourses = props => {
  const dispatch = useDispatch();
  const {allCourses} = useSelector(state => state.courses);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  if (allCourses.length === 0) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={allCourses}
        onRefresh={() => dispatch(getCourses())}
        refreshing={allCourses.length > 0 ? false : true}
        renderItem={({item}) => (
          <CourseCard
            courseName={item.title}
            courseImg={item.image}
            courseId={item.id}
            navigate={props.navigate}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default AllCourses;
