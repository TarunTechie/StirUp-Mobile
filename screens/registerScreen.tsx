import { SafeAreaView, TextInput ,Image,Text, TouchableOpacity} from "react-native";
import { styles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import {useState} from "react"
import api from "../constants/api";
export default function RegisterScreen()
{
    const navigation = useNavigation()
    const [details, setDetails] = useState([])
    
    function handleChanges(id: string, value: string)
    {
        setDetails(()=>({...details,[id]:value}))
    }
    async function register()
    {
        try
        {
            const results = await api.post('/register', details)
            navigation.navigate("Login")
        }
        catch (error)
        {
            console.error(error)
        }
    }
    return (
        <SafeAreaView style={{flex:1,justifyContent:"center"}}>
            <Image source={require("../assets/icons/logo.png")} resizeMode="contain" style={{ width: 400, marginInline: "auto" }} />
            <Text style={styles.label}>Name</Text>
            <TextInput onChangeText={(text)=>{handleChanges("name",text)}} style={styles.fields} />
            <Text style={styles.label}>Email Id</Text>
            <TextInput onChangeText={(text)=>{handleChanges("email",text)}} style={styles.fields} />
            <Text style={styles.label}>Password</Text>
            <TextInput onChangeText={(text)=>{handleChanges("password",text)}} style={styles.fields} secureTextEntry={true}/>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput onChangeText={(text)=>{handleChanges("cnfpassword",text)}} style={styles.fields} secureTextEntry={true}/>
            <TouchableOpacity onPress={register}>
                <Text style={styles.button}>Register</Text>
            </TouchableOpacity>
            <Text style={{textAlign:"center"}} onPress={()=>{navigation.navigate("Home")}}>Wanna give this app a try?</Text>
        </SafeAreaView>
    )
}