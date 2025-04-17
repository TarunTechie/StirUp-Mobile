import { SafeAreaView, Text ,Image,View, FlatList,ScrollView, Pressable} from "react-native"
import RenderHTML from "react-native-render-html"
import FoodType from "../assets/svg/foodType"
import Heart from "../assets/svg/heart"
import { useState } from "react"
import { useRoute } from '@react-navigation/native'
import spoon from "../constants/spoon"
import { useQuery } from "@tanstack/react-query"
import Loader from "../components/Loader"
type RecType = {
    image: string,
    title: string,
    nutrition: any,
    servings: number,
    readyInMinutes: number,
    vegetarian: boolean,
    extendedIngredients: any,
    instructions: string,
}
const Item = ({ name, unit, unitName }: { name: string, unit: number, unitName: string }) => (
    <View style={{ flexDirection: "row",justifyContent:"space-between" ,borderBottomWidth:1,paddingBlock:5}}>
        <Text style={{ fontSize: 20 }}>{name.replace(name.charAt(0), name.charAt(0).toUpperCase())}</Text>
        <View style={{flexDirection:"row",alignItems:"baseline",marginLeft:10}}>
            <Text style={{fontSize:20}}>{unit}</Text>
            <Text>{unitName}</Text>
        </View>
    </View>
)

export default function RecipeScreen()
{
    const [like, setLike] = useState("none")
    const route = useRoute()
    const { id } = route.params
    async function getRecipe()
    {
        try {
            const results = await spoon.get(`recipes/${id}/information`, { params: { "includeNutrition": true } })
            console.log(results.data)
            return results.data
        }
        catch (error)
        {
            console.error(error)
        }
    }
    
    const { data, error, isFetching } = useQuery({
        queryKey:['id', id],
        queryFn: getRecipe,
    })
    return (
        isFetching ?<Loader/>
            : (<SafeAreaView>
            <ScrollView >
                <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",padding:5}}>
                        <Text style={{ fontFamily: "CrispyFoodRegular-6YM5D", color: "#4E070C", width: "80%", flexWrap: "wrap", fontSize: 25 }}>{data.title}</Text>
                    <Pressable onPress={()=>{setLike(like==='none'?'#D22701':'none')}}>
                            <Heart width={50} like={like}/>
                    </Pressable>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginInline: "auto" ,justifyContent:"space-between"}}>
                    <Image source={{ uri: data.image }} style={{ height: 200, width: 200, borderRadius: 10 ,marginTop:10,marginRight:10}} resizeMode="cover" />
                    <View style={{flexDirection:"column"}}>
                    <Text style={{fontSize:20,fontWeight:400}}>Calories:</Text>
                    <Text style={{fontSize:20,fontWeight:400}}>Carbs:</Text>
                    <Text style={{fontSize:20,fontWeight:400}}>Fat:</Text>
                    <Text style={{fontSize:20,fontWeight:400}}>Protein:</Text>
                    </View>
                    <View>
                    <Text style={{fontSize:20,fontWeight:500}}>{data.nutrition.nutrients[0].amount}{data.nutrition.nutrients.unit}</Text>
                    <Text style={{fontSize:20,fontWeight:500}}>{data.nutrition.nutrients[2].amount}{data.nutrition.nutrients[2].unit}</Text>
                    <Text style={{fontSize:20,fontWeight:500}}>{data.nutrition.nutrients[1].amount}{data.nutrition.nutrients[1].unit}</Text>
                    <Text style={{fontSize:20,fontWeight:500}}>{data.nutrition.nutrients[8].amount}{data.nutrition.nutrients[8].unit}</Text>
                    </View>
                </View>
                <View style={{
                    padding:10,margin:10,
                    flexDirection: "row", justifyContent: "space-between",
                    borderWidth: 1,borderRadius:20}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={require("../assets/icons/servings.png")} style={{height:40,width:40,marginInline:5}} resizeMode="contain"/>
                        <Text style={{fontSize:20}}>: {data.servings} Servings</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={require("../assets/icons/time.png")} style={{ height: 30, width: 30 ,marginInline:5}} resizeMode="contain" />
                        <Text style={{fontSize:20}}>: {data.readyInMinutes}Minutes</Text>
                    </View>
                    <FoodType typeColor={(data.vegetarian)?"green":"red"} height={40} />
                </View>
                <View>
                    <Text style={{ textAlign: "center", fontFamily: "AuralyessFreeTrial-RpMrE", color: "#4E070C", fontSize: 30 ,marginBottom:5}}>Ingredients</Text>
                    <FlatList
                        data={data.extendedIngredients}
                        renderItem={({ item }) => 
                            <Item name={item.name}
                                unit={item.measures.metric.amount}
                                unitName={item.measures.metric.unitLong} />}
                                keyExtractor={(item) => item.id}
                                style={{borderRadius:10,borderWidth:1,padding:10,margin:10}}/>
                </View>
                <View>
                    <Text style={{ textAlign: "center", fontFamily: "AuralyessFreeTrial-RpMrE", color: "#4E070C", fontSize: 30 ,marginBottom:5}}>Instructions</Text>
                    <RenderHTML source={{ html: data.instructions }}/>
                </View>
            </ScrollView>
        </SafeAreaView>)
    )
}