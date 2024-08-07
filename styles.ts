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
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    infotext: {
      fontSize: 14,
      marginBottom: 30,
      marginLeft: 5,
      marginRight: 5,
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
      inputcontainer: {
        flex: 1,
        padding: 16,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        color: 'white',
        fontWeight: 'bold'
      },
      inputimage: {
        width: 100,
        height: 100,
        marginBottom: 12,
      },
      SuccessMssgtext: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 15,
        marginTop: 30,
        marginLeft: 80,
        alignContent: 'center',
        justifyContent: 'center',
      },
      newScrollImage: {
        width: 350,
        height: 175,
        margin: 20,
      resizeMode: "contain",
      borderRadius: 5,
        alignItems: 'center',
      },
      headerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
      },
      newDetailcontainer: {
        flex: 1,
        padding: 16,
      },
      newDetailimage: {
        width: '100%',
        height: 200,
        marginBottom: 16,
      },
      newDetailtext: {
        fontSize: 16,
        marginBottom: 8,
      },
      newDetailheaderButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
      },

      scrollcontainer2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      circle2: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'transparent',
      },
      selectedCircle2: {
        borderColor: 'white', 
        borderWidth: 5,
      },
      image2: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    datePickerContainer: {
      height:50,
      flexDirection: 'row',
      alignItems: 'center',
      
    },
    datePickerText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white'
    },
    label: {
      color: 'white',
      marginBottom: 10,
      fontWeight: 'bold',
      fontSize: 20,
    },
    dateinputcontainer: {
      width: 150,
      height: 50,
    },
    addoperatorheading: {
      fontSize: 20,
      marginLeft: 10,
      textDecorationColor: 'white',
      color: 'white',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    Yearbutton: {
      flex: 1,
      borderRadius: 2,
      borderColor: 'white',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor : 'rgba(0, 0, 0, 0.5)'
    },
  });
  
  export default styles;