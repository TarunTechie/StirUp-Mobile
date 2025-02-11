import { SafeAreaView ,Image} from "react-native";

export default function Header()
{
    return (
        <SafeAreaView style={{flexDirection:"row",alignItems:"center",padding:20,borderBottomWidth:1,borderColor:"#492821",justifyContent:"space-between"}}>
            <Image source={require("../assets/icons/logo.png")} style={{width:200,height:50}} resizeMode="contain"/>
            <Image source={require("../assets/icons/profile.png")} style={{height:50,width:50}} resizeMode="contain"/>
        </SafeAreaView>
    )
}