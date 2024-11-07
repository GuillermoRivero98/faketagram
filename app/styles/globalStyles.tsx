import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    // Contenedor principal con flex para ocupación completa y padding general
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff',
    },
    // Texto estándar
    text: {
        fontSize: 16,
        color: '#333', // Color de texto oscuro
    },
    // Texto para encabezados con mayor tamaño y peso en negrita
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333', // Color de encabezados
        marginVertical: 10,
    },
    // Estilos para botones
    button: {
        padding: 12,
        backgroundColor: '#3498db', // Fondo azul
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff', // Texto blanco en los botones
        fontWeight: 'bold',
    },
    // Imagen que ocupa el ancho completo y tiene bordes redondeados
    image: {
        width: '100%',
        height: 250,
        borderRadius: 8,
    },
    // Entrada de texto (input) con borde y padding adecuado
    input: {
        borderWidth: 1,
        borderColor: '#ccc', // Color del borde gris
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 10,
    },
    // Estilos para el pie de las publicaciones
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        justifyContent: 'space-between', // Espaciado entre elementos
    },
    footerText: {
        fontWeight: 'bold',
    },
    // Tarjeta de publicación con fondo, sombra y redondeo
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
