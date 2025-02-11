import { SafeAreaView, TextInput ,Image,Text, TouchableOpacity} from "react-native";
import { styles } from "../styles/styles";


export default function RegisterScreen()
{
    return (
        <SafeAreaView style={{flex:1,justifyContent:"center"}}>
            <Image source={require("../assets/icons/logo.png")} resizeMode="contain" style={{ width: 400, marginInline: "auto" }} />
            <Text style={styles.label}>UserName</Text>
            <TextInput style={styles.fields} />
            <Text style={styles.label}>Email Id</Text>
            <TextInput style={styles.fields} />
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.fields} />
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput style={styles.fields} />
            <TouchableOpacity>
                <Text style={styles.button }>Register</Text>
            </TouchableOpacity>
            <Text style={{textAlign:"center"}}>Wanna give this app a try?</Text>
        </SafeAreaView>
    )
}