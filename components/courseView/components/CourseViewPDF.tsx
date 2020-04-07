import React from 'react';
import {View} from 'react-native';
import Pdf from 'react-native-pdf';

// styles
import styles from './styles';
//Types
import {CourseContentProps} from '../types';

const courseViewPDF = ({data}: CourseContentProps) => {
  const source = {
    uri: data,
    cache: true,
  };
  let pdfRef: any = null;

  return (
    <View style={styles.pdfContainer}>
      <Pdf
        source={source}
        ref={pdf => {
          pdfRef = pdf;
        }}
        onLoadComplete={(numberOfPages: number, filePath: string) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page: number, numberOfPages: number) => {
          console.log(`current page: ${page}`);
        }}
        onError={(error: object) => {
          console.log(error);
        }}
        onPressLink={(uri: string) => {
          console.log(`Link presse: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

export default courseViewPDF;
