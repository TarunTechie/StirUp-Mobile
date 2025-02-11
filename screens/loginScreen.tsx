import { SafeAreaView, TextInput ,Image,Text, TouchableOpacity} from "react-native";
import { styles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import api from "../constants/api";
export default function LoginScreen()
{
    const navigation=useNavigation()
    return (
        <SafeAreaView style={{flex:1, justifyContent:"center"}}>
            <Image source={require("../assets/icons/logo.png")} resizeMode="contain" style={{ width: 400, marginInline: "auto" }} />
            <Text style={styles.label}>UserName</Text>
            <TextInput style={styles.fields} />
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.fields} />
            <TouchableOpacity onPress={()=>{api.get('/')}}>
                <Text style={styles.button }>Login</Text>
            </TouchableOpacity>
            <Text style={{textAlign:"center",fontSize:15}} onPress={()=>{navigation.navigate("Register")}}>New Here? Sign Up</Text>
            <Text style={{textAlign:"center",marginTop:20}}>Wanna give this app a try?</Text>
        </SafeAreaView>
    )
}