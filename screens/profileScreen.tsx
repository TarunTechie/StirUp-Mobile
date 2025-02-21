import { Text, TextInput, SafeAreaView, Image ,TouchableOpacity} from "react-native"
import { styles } from "../styles/styles"
import * as KeyChain from 'react-native-keychain'
import { useEffect } from "react"
export default function ProfileScreen()
{
    async function getId()
    {
        try {
            const id =await KeyChain.getGenericPassword()
            console.log(id)
        }
        catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{getId()},[])
    return (
        <SafeAreaView>
            <Image source={require("../assets/icons/profile.png")} style={{marginInline:"auto",height:200,marginTop:10}} resizeMode="contain" />
            <Text style={{ textAlign: "center", fontSize: 40 ,fontFamily:"AuralyessFreeTrial-RpMrE"}}>TARUN</Text>
            <Text style={styles.label}>UserName</Text>
            <TextInput style={styles.fields} />
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.fields} />
            <Text style={styles.label}>Calorie Intake</Text>
            <TextInput style={styles.fields} />
            <Text style={styles.label}>Allergies</Text>
            <TextInput style={styles.fields} />
            <Text style={styles.label}>Cuisine Preference</Text>
            <TextInput style={styles.fields} />
            <TouchableOpacity>
                    <Text style={styles.button}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                    <Text style={[styles.button,{backgroundColor:"red"}]}>Delete Profile</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}