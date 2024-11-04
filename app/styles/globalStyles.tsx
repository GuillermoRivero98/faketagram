import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    // Estilo general para la aplicación
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff', // Fondo blanco
    },
    // Estilos para textos
    text: {
        fontSize: 16,
        color: '#333', // Color de texto oscuro
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333', // Color de encabezados
        marginVertical: 10,
    },
    // Estilos para botones
    button: {
        padding: 12,
        backgroundColor: '#3498db', // Color de fondo azul
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff', // Texto blanco en los botones
        fontWeight: 'bold',
    },
    // Estilos para imágenes
    image: {
        width: '100%',
        height: 250,
        borderRadius: 8,
    },
    // Estilos para inputs
    input: {
        borderWidth: 1,
        borderColor: '#ccc', // Color del borde gris
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 10,
    },
    // Estilos para el footer de publicaciones
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        justifyContent: 'space-between', // Espaciado entre elementos
    },
    footerText: {
        fontWeight: 'bold',
    },
    // Estilos para las tarjetas de publicación
    postCard: {
        marginBottom: 15,
        backgroundColor: '#fff', // Fondo blanco para tarjetas
        borderRadius: 8,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2, // Sombra en Android
    },
});

export default globalStyles;