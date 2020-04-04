import React from 'react';
import {View} from 'react-native';
import Pdf from 'react-native-pdf';

// styles
import styles from './styles';

const courseViewPDF = ({data}) => {
  const source = {
    uri: data,
    cache: true,
  };
  let pdfRef = null;
  return (
    <View style={styles.pdfContainer}>
      <Pdf
        source={source}
        ref={pdf => {
          pdfRef = pdf;
        }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link presse: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

export default courseViewPDF;
