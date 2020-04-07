import React, {useEffect} from 'react';
import {ActivityIndicator, View, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// Component
import CourseCard from '../../../UI/CourseCard';

import Colors from '../../../constants/Colors';
import {actions, styles, types} from '../../allCourses';

// actions
const {getCourses, saveCourse} = actions;

const SavedCourses = (props: types.Props): JSX.Element => {
  const dispatch: Function = useDispatch();

  const {allCourses, savedCourses} = useSelector<object[]>(
    state => state.courses,
  );

  let renderedCourses: object[] = [];
  for (let course of allCourses) {
    if (savedCourses.includes(course.id)) {
      renderedCourses.push(course);
    }
  }

  const onSaveCourse = (id: number) => {
    dispatch(saveCourse(id));
  };

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  if (renderedCourses.length === 0) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={renderedCourses}
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

export default SavedCourses;
