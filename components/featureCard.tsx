import { View, Image, Text, Dimensions, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { styles } from "../styles/styles"
type props = {
    path: any,
    name: string,
    navTo:string
}

const screenWidth = Dimensions.get("window").width
const cardWidth = screenWidth * 0.7
const cardSpacing=20
export default function FeatureCard({path,name,navTo}:props)
{
    const navigation=useNavigation()
    return (
        <View style={{ width: cardWidth,marginRight:cardSpacing }}>
            <View style={{ marginInline: "auto" }}>
        <Pressable onPress={()=>{navigation.navigate(navTo)}} >
                <Image source={path} style={{width: "100%", borderRadius: 10, aspectRatio: 0.6, height: "auto" }} resizeMode="cover" />
        </Pressable>
                <Text style={[styles.button,{width:"auto",position:"absolute",left:cardWidth/3,bottom:0}]}>{name}</Text>
            </View>
        </View>
    )
}