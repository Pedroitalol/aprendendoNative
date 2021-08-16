import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    tituloBox: {
        borderWidth: 5,
        borderColor: '#000',
        backgroundColor: '#00a79d',
        width:360,
        height:50,
    },

    tituloTexto:{
        color: '#0f00f0',
        fontSize: 30,
        position: 'relative',
        textTransform: 'uppercase',
        lineHeight:40,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    conteudoBox:{
        padding:20,
        fontSize:50,
    },

    conteudoTexto:{
        textAlign: 'justify',
    },

    imagem:{
        width: '100%',
        height: 200,
        marginBottom: 20
    },

    textoDarLinha:{
        fontSize:100,
        padding:0,
    },

    appBox:{
        
    }
})