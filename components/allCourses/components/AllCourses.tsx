import React, {useEffect} from 'react';
import {ActivityIndicator, View, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// Component
import CourseCard from '../../../UI/CourseCard';

import {getCourses, saveCourse} from '../actions';
import Colors from '../../../constants/Colors';
import styles from './styles';

// Types
import {Props, Item} from '../types';

const AllCourses = (props: Props): JSX.Element => {
  const dispatch: Function = useDispatch();
  
  const {allCourses, savedCourses} = useSelector<object[]>(state => state.courses);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  const onSaveCourse = (id: number) => {
    dispatch(saveCourse(id));
  }

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
            saveCourse={id => onSaveCourse(id)}
            isSaved={savedCourses.includes(item.id)}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default AllCourses;
