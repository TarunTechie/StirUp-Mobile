import { SafeAreaView, TextInput ,Image,Text, TouchableOpacity} from "react-native";
import { styles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import api from "../constants/api";
import * as KeyChain from 'react-native-keychain'
import { useState } from "react";
export default function LoginScreen()
{
    const navigation = useNavigation()
    const [details, setDetails] = useState(['a','b'])
    async function login()
    {
        console.log(details.length)
        try
        {
            const results = await api.post('/login', details)
            if (results.data.reply === true)
                {
                    try {
                        await KeyChain.setGenericPassword(results.data.name,results.data.id)
                    }
                    catch (error) {
                        console.error(error)
                    }
                    finally {
                        navigation.navigate("Home")
                    }
                }
                else
                {
                    setDetails([])
                }
        }
        catch (error)
        {
            console.error(error)
        }
    }

    function handleChanges(id:string,value:string)
    {
        setDetails(()=>({...details,[id]:value}))
    }
    return (
        <SafeAreaView style={{flex:1, justifyContent:"center"}}>
            <Image source={require("../assets/icons/logo.png")} resizeMode="contain" style={{ width: 400, marginInline: "auto" }} />
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.fields} id="email" onChangeText={(text)=>{handleChanges("email",text)}} />
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.fields} secureTextEntry={true} id="password"  onChangeText={(text)=>{handleChanges("password",text)}}/>
            <TouchableOpacity onPress={login}>
                <Text style={styles.button }>Login</Text>
            </TouchableOpacity>
            <Text style={{textAlign:"center",fontSize:15}} onPress={()=>{navigation.navigate("Register")}}>New Here? Sign Up</Text>
            <Text style={{ textAlign: "center", marginTop: 20 }} onPress={() => { navigation.navigate("Home") }}>Wanna give this app a try?</Text>
            { details.length!==0?null:
                <Text style={{ textAlign: "center", marginTop: 20, fontSize: 20, color: "red" }} onPress={() => { navigation.navigate("Home") }}>User not Registered!!</Text>
            }
        </SafeAreaView>
    )
}