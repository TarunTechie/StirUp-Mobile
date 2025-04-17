import { View, Image, Text, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
type data = {
    image: any,
    title: String,
    id:number
}
export default function FoodCard({image,title,id}:data)
{
    const navigate=useNavigation()
    return (
        <Pressable onPress={()=>{navigate.navigate("Recipe",{"id":id})}}>
        <View style={{alignItems:"center",borderWidth:1,alignSelf:"center",borderRadius:10,margin:10,width:190,height:200,overflow:"scroll"}}>
            <Image source={{ uri: image }} style={{ height: 150, width: 200 }} resizeMode="cover" />
            <View style={{flexDirection:"row",paddingInline:20,alignItems:"center"}}>
            <Text style={{ textAlign: "center", fontFamily: "AuralyessFreeTrial-RpMrE" ,fontSize:20,margin:"auto"}}>{title}</Text>
            </View>
        </View>
        </Pressable>
    )
}