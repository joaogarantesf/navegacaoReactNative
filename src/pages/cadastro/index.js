import * as React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, TouchableHighlight, Alert } from 'react-native';
import styles from '../home/styles';

const Cadastro = () => {
    const [nome, setNome] = React.useState();
    const [descricao, setDescricao] = React.useState();
    const [preco, setPreco] = React.useState();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
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
                            marginBottom: 16,
                            color: '#000000',
                        }} >
                        Cadastro
                    </Text>

                    <TextInput
                        style={{
                            height: 40,
                            width: 100,
                            margin: 12,
                            borderWidth: 1,
                            borderColor: '#000000',
                            color: '#000000',
                            textAlign: 'center'
                        }}
                        onChangeText={nome => setNome(nome)}
                        value={nome}
                        placeholder='Nome: '
                    />
                    <TextInput
                        style={{
                            height: 40,
                            width: 100,
                            margin: 12,
                            borderWidth: 1,
                            borderColor: '#000000',
                            color: '#000000',
                            textAlign: 'center'
                        }}
                        onChangeText={descricao => setDescricao(descricao)}
                        value={descricao}
                        placeholder='Descrição: '
                    />
                    <TextInput
                        style={{
                            height: 40,
                            width: 100,
                            margin: 12,
                            borderWidth: 1,
                            borderColor: '#000000',
                            color: '#000000',
                            textAlign: 'center'
                        }}
                        onChangeText={preco => setPreco(preco)}
                        value={preco}
                        placeholder='Preço: '
                    />
                
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => alert('Pressed!')}>
                <Text style={{ color: '#000000' }}>Cadastrar</Text>
                </TouchableHighlight>
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
};

export default Cadastro;