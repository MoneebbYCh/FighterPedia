import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black', 
    },
    introtext: {
      fontSize: 24,
      marginBottom: 10,
      textDecorationColor: 'white',
      color: 'white',
      fontWeight: 'bold'
    },
    logo: {
      width: 200,
      height: 200,
      resizeMode: 'contain', 
    },
    screen: {
      backgroundColor : 'dimgrey',
      flex: 1,
    },
    header: {
      backgroundColor: 'black',
    },
    headerTitle: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
    button: {
      flex: 1,
      padding: 15,
      paddingVertical: 15,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
  
    },
    buttonContainer:{
      flexDirection: 'row',
      marginTop: 100,
    },
    longbuttonContainer: {
      marginTop: 10,
      alignItems: 'center',
    },
    longbutton: {
      height: 60,
      width:300,
      alignSelf: 'center',
      paddingVertical: 15,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    image: {
      flex:1,
      margin: 20,
      resizeMode: "contain",
      borderRadius: 5,
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 10,
      
    },
    imageTitle: {
      color: 'white',
      marginTop: 5,
      fontSize: 16,
      fontWeight: 'bold',
    },
    scrollcontainer: {
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      
    },
    background: {
      flex: 1,
      resizeMode: 'cover',
    },
    ErasuttonContainer: {
      flex: 1,
      marginTop: 250,
      marginBottom: 50,
      alignSelf: 'center',
      
    },
    heading: {
      fontSize: 20,
      marginBottom: 10,
      textDecorationColor: 'white',
      color: 'white',
      fontWeight: 'bold'
    },
    infotext: {
      fontSize: 14,
      marginBottom: 30,
      textDecorationColor: 'white',
      color: 'white',
    },
    textcontainer: {
      flex: 1,
      marginTop: 10,
      alignSelf: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    DetailImageContainer: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 20,
     
    },
    DetailImage: {
      width:400,
      height: 250,
      resizeMode: "stretch",
      alignItems: 'center',
      borderRadius: 10,
    },
    HorizontalDetailContainer: {
      marginTop: 10,
    },
    DetailHeading:{
      fontSize: 28,
      marginLeft: 10,
      textDecorationColor: 'white',
      color: 'white',
      fontWeight: 'bold',
    },
    circle: {
      width: 70, 
      height: 70, 
      borderRadius: 20, 
      backgroundColor: 'lightgray', 
      justifyContent: 'center', 
      alignItems: 'center', 
      marginRight : 20,
    },
    drawerContainer: {
      marginVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'dark-grey',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
  
    },
    drawerButton: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: 15,
    },
    drawerButtonText: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
    },
    drawerContent: {
      overflow: 'hidden',
    },
    drawerText: {
      padding: 15,
      color: 'white',
    },
      cont: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      },
      text: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10,
      },
    });
  
  export default styles;