import { useEffect } from "react";
import recipes from "../constants/temp";
import { View, Image, Text, ScrollView } from "react-native";
import Heart from "../assets/svg/heart";
import FoodType from "../assets/svg/foodType";
import RenderHTML from "react-native-render-html";
export default function RecipeCard()
{
    return (
        <View style={{alignItems:"center",borderWidth:1,alignSelf:"center",borderRadius:10,margin:10,width:190,height:300,overflow:"scroll"}}>
            <Image source={{ uri: recipes[0].image }} style={{ height: 150, width: 200 }} resizeMode="cover" />
            <Heart style={{ position: "absolute", right: 0, margin: 5 }} />
            <View style={{flexDirection:"row",paddingInline:20,alignItems:"center"}}>
            <Text style={{ textAlign: "center", fontFamily: "AuralyessFreeTrial-RpMrE" ,fontSize:14}}>{recipes[0].title}</Text>
            <FoodType typeColor={"green"} width={25} />
            </View>
            <View style={{height:1,width:"90%",margin:5,backgroundColor:"black"}}></View>
            <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} style={{padding:5}}>
                <RenderHTML source={{ html: recipes[0].summary }} contentWidth={10}/>
            </ScrollView>
        </View>
    )
}