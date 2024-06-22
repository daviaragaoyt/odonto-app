import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1CAAFA',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlayContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallSquareButton: {
    position: 'absolute',
    top: 80,
    left: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008cdc',
    borderRadius: 5,
  },
  smallSquareButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  containerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    marginLeft: 90,
    color: '#fff',
    fontSize: 40,
    textShadowColor: '#334EA0',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  denteContainer: {
    flex: 1,
    textAlign:'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width:'100%',
    marginVertical: 20,
  },
  selectButtonContainer: {

    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  formContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 150,
    width: '80%',
  },
  inputContainer: {
    textAlign: 'right',
    alignItems: 'flex-start',
    flexDirection: 'row',
    borderRadius:5,
    marginBottom: 20,
    textShadowColor: '#334EA0',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  input: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    height: 40,
    borderRadius: 5,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#1CAAFA',
    backgroundColor: '#fff',
    width: 300,
    fontSize: 20,
    color: "black",
    padding: 5,
  },
  inputDente: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1CAAFA',
    backgroundColor: '#fff',
    width: 50,
    fontSize: 20,
    color: "black",
    padding: 5,
  },
  select: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  inputSubmit: {
    textAlign: 'center',
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: 300,
    marginLeft:10,
    padding: 15,
    borderRadius: 10,
    borderColor: '#334EA0',
    borderWidth: 1,
    marginBottom: 100,
    paddingHorizontal: 5,
    backgroundColor: "#008cdc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
    textShadowColor: '#334EA0',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    width: 300,
    height: 'auto',
    color: '#000',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalOption: {
    width: '100%',
    padding: 8,
    alignItems: 'center',
    borderBottomWidth: 1,
  
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
  },
});
