import { View, Image, Text } from "react-native"
import { styles } from "../styles/styles"
type props = {
    path: any,
    name:string
}
export default function FeatureCard({path,name}:props)
{
    return (
        <View>
            <Image source={path} style={{ width: 190, height: 300 ,borderRadius:10}} resizeMode="cover" />
            <Text style={{position:"absolute",bottom:-20,color:"white",backgroundColor: "#FF670E",left:50,
                        fontWeight: "bold",fontSize:15,paddingBlock:10,paddingInline:20,borderRadius:10}}>{name}</Text>
        </View>
    )
}