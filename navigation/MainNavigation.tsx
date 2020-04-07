import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// Screens
import AllCoursesScreen from '../screens/AllCoursesScreen';
import SavedCoursesScreen from '../screens/SavedCoursesScreen';
import CourseIntroScreen from '../screens/CourseIntroScreen';
import CourseModulesScreen from '../screens/CourseModulesScreen';
import CourseViewScreen from '../screens/CourseViewScreen';
import QuizScreen from '../screens/QuizScreen';

// Navigation Initialization
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? '#0a5ee5' : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : '#0a5ee5',
};

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AllCoursesScreen"
        component={AllCoursesScreen}
        options={{title: 'All'}}
      />
      <Tab.Screen
        name="SavedCoursesScreen"
        component={SavedCoursesScreen}
        options={{title: 'Saved'}}
      />
    </Tab.Navigator>
  );
};

const CoursesNavigation = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="AllCoursesScreen"
        component={TabNavigation}
        options={{title: 'Courses'}}
      />
      <Stack.Screen
        name="CourseIntroScreen"
        component={CourseIntroScreen}
        options={{title: 'Course Intro'}}
      />
      <Stack.Screen
        name="CourseModulesScreen"
        component={CourseModulesScreen}
        options={{title: 'Course Modules'}}
      />
      <Stack.Screen
        name="CourseViewScreen"
        component={CourseViewScreen}
        options={{title: 'Course'}}
      />
      <Stack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{title: 'Quiz'}}
      />
    </Stack.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <CoursesNavigation />
    </NavigationContainer>
  );
};

export default MainNavigation;
