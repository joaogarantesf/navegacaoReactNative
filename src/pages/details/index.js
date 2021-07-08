import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const DetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Details
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: '#000000'
          }}>
          Flasco do Dragão
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: '#000000'
          }}>
          www.flascododragao.com.br
        </Text>
      </View>
    </SafeAreaView>
  );
}
export default DetailsScreen;