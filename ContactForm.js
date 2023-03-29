import { StyleSheet, Text, View ,TouchableOpacity,StatusBar,TextInput,Image} from 'react-native'
import React,{useState,useRef} from 'react'
import { KeyboardAvoidingView } from 'react-native';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [name,setName]=useState("");
  const form = useRef();
 

  const onsubmit = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_foy9bp1', 'template_myh3o1h',form.current, 'EVJP3fbYrKsg9i73j')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  
  return (
    
    <KeyboardAvoidingView behavior="padding" style={styles.container}>

       <View style={styles.inputContainer} >
       
       <View style={styles.inputview}>

       <TextInput 
        style={styles.textinput}
         placeholder="Full Name"
       placeholderTextColor="#003f5c"
       value={name}
        onChange={(text)=>setName(text)}/>
       </View>
       
       <View style={styles.inputview}>
       <TextInput
  style={styles.textinput}
  placeholder="Email"
  value={email}
  onChangeText={(text) => setEmail(text)}
/>
       </View>
       
     <View style={styles.inputview}>
     <TextInput
   
  style={styles.textinput}
  placeholder="Contact No."
  keyboardType="numeric"
  value={mobile}
  onChangeText={(text) => setMobile(text)}
/>
     
     </View>
     
       <TouchableOpacity style={styles.btn}  onPress={onsubmit}>
      <Text style={styles.btnText}>
        Submit
      </Text>
     </TouchableOpacity>
    </View> 
    </KeyboardAvoidingView> 
  
  );
}

export default ContactForm

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    backgroundColor:"white"
  },
  inputview:{
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "100%",
    height: 50,
    marginBottom: 30,
    alignItems: "center",
    justifyContent:'center'
  
  },
  inputContainer:
  {
    width:300,

  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  TextInput: {
    height: 30,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  btn:{
    width: "100%",
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "#FF1493",
  }

})