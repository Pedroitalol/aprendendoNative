import React from 'react';
import { View, Text, Image } from 'react-native';
import foto from '../assets/amigo.jpeg';
import {estilo} from './estilo';

export function Titulo() {
    return (
        <View style={estilo.tituloBox}>
            <Text style={estilo.tituloTexto}>Notícia do dia</Text>
        </View>
    )
}

export function Noticia(){
    return (
        <View style={estilo.conteudoBox}>
            <Text style={estilo.conteudoTexto}> Aqui vai a parte da noticia:</Text>
            <DarLinha nome='Aqui é pra echer linguiça ' qntd='10'/>
            <Image style={estilo.imagem} source = {foto}/>
            <DarLinha nome='Aqui é pra echer linguiça ' qntd='10'/>
        </View>
    )
}


export const DarLinha = (props) => {
    var temp = "";
    for(var i = 0; i < props.qntd; i++) temp += props.nome;
    return(
        <View>
            <Text style={estilo.conteudoTexto}>{temp}</Text>
        </View>
    )
}
