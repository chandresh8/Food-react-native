import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetail from './ResultDetail';
import { withNavigation } from 'react-navigation'

const ResultsList = ({title, results, navigation}) => {

  if(!results.length){
    return null;
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShowScreen', {id: item.id})}>
              <ResultDetail result={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  }
});

export default withNavigation(ResultsList);
