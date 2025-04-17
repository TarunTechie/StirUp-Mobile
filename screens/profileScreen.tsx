import { Text, TextInput, SafeAreaView, Image, TouchableOpacity, View ,ScrollView} from "react-native"
import DropDown from "../components/dropDown"
import { styles } from "../styles/styles"
import * as KeyChain from 'react-native-keychain'
import { useEffect, useState } from "react"
import api from "../constants/api"
import { cuisines, intolerances } from "../constants/lists"
import { useNavigation } from "@react-navigation/native"
import Loader from "../components/Loader"
import { useQuery } from "@tanstack/react-query"
type data = {
    name: string,
    cals: number,
    password: string,
    cusine: any,
    email: string,
    intol:any
}
export default function ProfileScreen()
{
    const [details, setDetails] = useState<data>({} as data)
    const [isLoading, setLoading] = useState(true)
    const [logged, setLogged] = useState(false)
    const navigate=useNavigation()
    async function getDetails()
    {
        try {
            const id = await KeyChain.getGenericPassword()
            if (id)
            {
                console.log(id)
                const result = await api.get('/getUser', { params: { "id": id.password },timeout:10000 })
                setDetails(result.data[0])
                setLogged(true)
            }
        }
        catch (error)
        {
            console.log(error)
        }
        finally
        {
            setLoading(false)
        }
    }
    useEffect(()=>{getDetails()},[])
    return (
        isLoading ? <Loader/> :
            (logged ?
            (<SafeAreaView>
                <ScrollView>
            <Image source={require("../assets/icons/profile.png")} style={{marginInline:"auto",height:200,marginTop:10}} resizeMode="contain" />
                <Text style={{ textAlign: "center", fontSize: 40, fontFamily: "AuralyessFreeTrial-RpMrE" }}>{ details.name.toUpperCase()}</Text>
                <Text style={styles.label}>Email</Text>
            <TextInput style={styles.fields} value={details.email}/>
            <Text style={styles.label}>Calorie Intake</Text>
                <TextInput style={styles.fields} value={details.cals.toString()}/>
            <Text style={styles.label}>Allergies</Text>
                <DropDown data={intolerances} />
            <Text style={styles.label}>Cuisine Preference</Text>
                <DropDown data={cuisines}/>
            <Text style={styles.label}>Password</Text>
                <TextInput style={styles.fields} placeholder="Enter new password" />
            <TouchableOpacity>
                    <Text style={styles.button}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                    <Text style={[styles.button,{backgroundColor:"red"}]}>Delete Profile</Text>
            </TouchableOpacity>
            </ScrollView>
            </SafeAreaView>)
                : (<SafeAreaView style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                    <TouchableOpacity  onPress={()=>{navigate.navigate('Login')}}>
                    <Text style={styles.button}>PLEASE LOGIN</Text>
                    </TouchableOpacity>
            </SafeAreaView>))
    )
}