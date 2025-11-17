import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 80,
        gap: 20
    },

    image: {
        width: 120,
        height: 80,
        marginBottom: 20
    },

    titulo: {
        color: '#fff',
        fontSize: 26,
    },

    descricao: {
        color: '#6e6e6e',
        fontSize: 14,
        marginRight: 20
    },

    maisInformacoes: {
        color: '#62a8f8'
    },

    esqueceu: {
        marginRight: '50%',
        color: '#62a8f8'
    },

    criar: {
        marginRight: '71%',
        color: '#62a8f8'
    },

    input: {
        width: '100%',
        backgroundColor: '#000',
        borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#6e6e6e',
        paddingVertical: 18,
        color: '#fff'
    },

    botaoAvancar: {
        backgroundColor: '#62a8f8ff',
        marginTop: 100,
        borderWidth: 1,
        borderColor: '#62a8f8ff',
        paddingVertical: 8,
        paddingHorizontal: 22,
        borderRadius: 4,
        alignSelf: 'flex-end'
    },

    textoBotaoAvancar: {
        color: '#000000ff',
        fontSize: 16
    }
})