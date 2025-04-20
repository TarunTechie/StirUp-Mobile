import { View, Image, Text, Dimensions, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
type data = {
    image: any,
    title: String,
    id:number
}
export default function FoodCard({image,title,id}:data)
{
    const navigate = useNavigation()
    const cardWidth = Dimensions.get("window").width / 2
    
    return (
        <Pressable onPress={()=>{navigate.navigate("Recipe",{"id":id})}}>
        <View style={{alignItems:"center",borderWidth:1,alignSelf:"center",borderRadius:10,margin:10,width:cardWidth,height:cardWidth,overflow:"scroll"}}>
            <Image source={{ uri: image }} style={{ height: 150, width: cardWidth }} resizeMode="cover" />
            <View style={{flexDirection:"row",paddingInline:20,alignItems:"center"}}>
            <Text style={{ textAlign: "center", fontFamily: "AuralyessFreeTrial-RpMrE" ,fontSize:cardWidth/12,margin:"auto"}}>{title}</Text>
            </View>
        </View>
        </Pressable>
    )
}