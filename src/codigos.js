// Meus testes:
import React, { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { DarLinha } from './Titulo';


const UsandoState = (props) => {
    const [mostraTudo, setMostrarTudo] = useState(true);
    var nome = props.nome;
    var qntd = props.qntd;

    const UsandoProps = () => {
        if(mostraTudo){
            return (
            <View>
                <Text>O que será mostado: {nome}, quantas vezes: {qntd}</Text>
                <DarLinha nome={nome} qntd={qntd}/>
                
            </View>
        )
        }else{
            return(
                <View></View>
            )
        }
        
    }

    return (
        <View>
            <Text>Fazendo com o State:</Text>
            <Text>É para mostrar tudo? {mostraTudo ? "Sim" : "Não"}</Text>
            <Button
            onPress={() => {
                setMostrarTudo(!mostraTudo);
                }}
                title={mostraTudo ? "Tirar?":"Quer mostar tudo?"}
            />
            
            <UsandoProps/>
            <UsandoTextInput/>
        </View>
    )
}

export const UsandoTextInput = (props) => {
    const [text, setText] = useState('');
    return(
        <View>
            <TextInput
                placeholder='Diga o que vai aparecer na tela:'
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            <Text>{text}</Text>
        </View>    
    )
    
    

}

export const Codigos = (props) =>{
    return (
        <View>
            <UsandoState nome={props.nome} qntd={props.qntd}/>
        </View>
    )
}
