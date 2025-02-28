import { View, Image, Text, Dimensions } from "react-native"
import { styles } from "../styles/styles"
type props = {
    path: any,
    name:string
}

const screenWidth=Dimensions.get("window").width
export default function FeatureCard({path,name}:props)
{
    return (
        <View>
            <Image source={path} style={{ width: screenWidth*0.45,borderRadius:10,aspectRatio:0.6,height:"auto"}} resizeMode="cover" />
            <Text style={{position:"absolute",color:"white",backgroundColor: "#FF670E",bottom:-10,padding:5,paddingInline:10,left:screenWidth*0.1,
                        fontWeight: "bold",fontSize:15,borderRadius:10,textAlign:"center"}}>{name}</Text>
        </View>
    )
}