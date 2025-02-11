import { SafeAreaView ,Image,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Header()
{
    const navigation=useNavigation()
    return (
        <SafeAreaView style={{flexDirection:"row",alignItems:"center",padding:20,borderBottomWidth:1,borderColor:"#492821",justifyContent:"space-between"}}>
            <Image source={require("../assets/icons/logo.png")} style={{ width: 200, height: 50 }} resizeMode="contain" />
            <TouchableOpacity onPress={()=>{navigation.navigate("Profile")}}>
                <Image source={require("../assets/icons/profile.png")} style={{ height: 50, width: 50 }} resizeMode="contain" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}