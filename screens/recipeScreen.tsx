import { SafeAreaView, Text ,Image,View, FlatList,ScrollView, Pressable} from "react-native"
import recipes from "../constants/temp"
import RenderHTML from "react-native-render-html"
import FoodType from "../assets/svg/foodType"
import Heart from "../assets/svg/heart"
import { useState } from "react"
import { PreventRemoveContext } from "@react-navigation/native"

const Item = ({ name, unit, unitName }: { name: string, unit: number, unitName: string }) => (
    <View style={{ flexDirection: "row",justifyContent:"space-between" ,borderBottomWidth:1,paddingBlock:5}}>
        <Text style={{ fontSize: 20 }}>{name.replace(name.charAt(0), name.charAt(0).toUpperCase())}</Text>
        <View style={{flexDirection:"row",alignItems:"baseline",marginLeft:10}}>
            <Text style={{fontSize:20}}>{unit}</Text>
            <Text>{unitName}</Text>
        </View>
    </View>
)

export default function RecipeScreen({id}:{id:number})
{
    const [like,setLike]=useState("#fff")
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:5}}>
                    <Text style={{ fontFamily: "NatureBeautyPersonalUse-9Y2DK", color: "#4E070C", marginInline: "auto", fontSize: 14 }}>{recipes[0].title}</Text>
                    <Pressable onPress={()=>{setLike(like==='#fff'?'#D22701':'#fff')}}>
                    <Heart width={50} like={like} />
                    </Pressable>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginInline: "auto" }}>
                    <Image source={{ uri: recipes[0].image }} style={{ height: 200, width: 200, borderRadius: 10 }} resizeMode="cover" />
                    <View style={{flexDirection:"column"}}>
                    <Text style={{fontSize:20,fontWeight:400}}>Calories:</Text>
                    <Text style={{fontSize:20,fontWeight:400}}>Carbs:</Text>
                    <Text style={{fontSize:20,fontWeight:400}}>Fat:</Text>
                    <Text style={{fontSize:20,fontWeight:400}}>Protein:</Text>
                    </View>
                    <View>
                    <Text style={{fontSize:20,fontWeight:500}}>{recipes[0].nutrition.nutrients[0].amount}{recipes[0].nutrition.nutrients[0].unit}</Text>
                    <Text style={{fontSize:20,fontWeight:500}}>{recipes[0].nutrition.nutrients[2].amount}{recipes[0].nutrition.nutrients[2].unit}</Text>
                    <Text style={{fontSize:20,fontWeight:500}}>{recipes[0].nutrition.nutrients[1].amount}{recipes[0].nutrition.nutrients[1].unit}</Text>
                    <Text style={{fontSize:20,fontWeight:500}}>{recipes[0].nutrition.nutrients[8].amount}{recipes[0].nutrition.nutrients[8].unit}</Text>
                    </View>
                </View>
                <View style={{
                    padding:10,margin:10,
                    flexDirection: "row", justifyContent: "space-between",
                    borderWidth: 1,borderRadius:20
                }}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={require("../assets/icons/servings.png")} style={{height:40,width:40,marginInline:5}} resizeMode="contain"/>
                        <Text style={{fontSize:20}}>: {recipes[0].servings} Servings</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={require("../assets/icons/time.png")} style={{ height: 30, width: 30 ,marginInline:5}} resizeMode="contain" />
                        <Text style={{fontSize:20}}>: {recipes[0].readyInMinutes}Minutes</Text>
                    </View>
                    <FoodType typeColor={"green"} height={40} />
                </View>
                <View>
                    <Text style={{ textAlign: "center", fontFamily: "AuralyessFreeTrial-RpMrE", color: "#4E070C", fontSize: 30 ,marginBottom:5}}>Ingredients</Text>
                    <FlatList
                        data={recipes[0].extendedIngredients}
                        renderItem={({ item }) => 
                            <Item name={item.name}
                                unit={item.measures.metric.amount}
                                unitName={item.measures.metric.unitLong} />}
                        keyExtractor={(item) => item.id}
                        style={{marginInline:20,borderRadius:10,borderWidth:1,padding:10}}
                    />
                </View>
                <View>
                    <Text style={{ textAlign: "center", fontFamily: "AuralyessFreeTrial-RpMrE", color: "#4E070C", fontSize: 30 ,marginBottom:5}}>Instructions</Text>
                    <RenderHTML source={{ html: recipes[0].instructions }}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}