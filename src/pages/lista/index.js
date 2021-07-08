import * as React from 'react';
import { View, Text,Image, SafeAreaView } from 'react-native';
import styles from '../home/styles';

const Lista = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
            <Image
                style={{
                    height:100,
                    width:100,
                    alignSelf:'center'
                }}
                source={{
                    uri:'data:image/jpeg;base64,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'
                }}
            />
            <Text style={styles.text}> 
                Tróféu champions league 1913 
                {'\n'}
                {'\n'}              
            </Text> 
            <Image
                style={{
                    height:100,
                    width:100,
                    alignSelf:'center'
                }}
                source={{
                    uri:'data:image/jpeg;base64,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'
                }}
            />
            <Text style={styles.text}> 
                Bola de futebol
                {'\n'}
                {'\n'}               
            </Text>
      </View>
    </SafeAreaView>
  );
}
export default Lista;