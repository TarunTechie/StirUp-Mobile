import { SafeAreaView, Text ,Image,View, FlatList,ScrollView, Pressable} from "react-native"
import recipes from "../constants/temp"
import RenderHTML from "react-native-render-html"
import FoodType from "../assets/svg/foodType"
import Heart from "../assets/svg/heart"
import { useEffect, useState } from "react"
import { useRoute } from '@react-navigation/native'
import spoon from "../constants/spoon"

type Rec = {
    image: string,
    title: string,
    nutrition: any,
    servings:number,
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
    const [recipe, setRecipe] = useState([])
    const [isLoading,setLoading]=useState(true)
    const route = useRoute()
    const { id } = route.params
    async function getRecipe()
    {
        try {
            const results = await spoon.get(`recipes/${id}/information`, { params: { "includeNutrition": true } })
            console.log(results.data)
            setRecipe(results.data)
            setLoading(false)
        }
        catch (error)
        {
            console.error(error)
        }
    }
    useEffect(()=>{getRecipe()},[])
    return (
        isLoading ? <View>
            <Text>LOADING</Text>
        </View>
            : (<SafeAreaView>
            <ScrollView >
                <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",padding:5}}>
                        <Text style={{ fontFamily: "CrispyFoodRegular-6YM5D", color: "#4E070C", width: "80%", flexWrap: "wrap", fontSize: 25 }}>{recipe.title}</Text>
                    <Pressable onPress={()=>{setLike(like==='none'?'#D22701':'none')}}>
                            <Heart width={50} like={like}/>
                    </Pressable>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginInline: "auto" ,justifyContent:"space-between"}}>
                    <Image source={{ uri: recipe.image }} style={{ height: 200, width: 200, borderRadius: 10 ,marginTop:10,marginRight:10}} resizeMode="cover" />
                    <View style={{flexDirection:"column"}}>
                    <Text style={{fontSize:20,fontWeight:400}}>Calories:</Text>
                    <Text style={{fontSize:20,fontWeight:400}}>Carbs:</Text>
                    <Text style={{fontSize:20,fontWeight:400}}>Fat:</Text>
                    <Text style={{fontSize:20,fontWeight:400}}>Protein:</Text>
                    </View>
                    <View>
                    <Text style={{fontSize:20,fontWeight:500}}>{recipe.nutrition.nutrients[0].amount}{recipe.nutrition.nutrients.unit}</Text>
                    <Text style={{fontSize:20,fontWeight:500}}>{recipe.nutrition.nutrients[2].amount}{recipe.nutrition.nutrients[2].unit}</Text>
                    <Text style={{fontSize:20,fontWeight:500}}>{recipe.nutrition.nutrients[1].amount}{recipe.nutrition.nutrients[1].unit}</Text>
                    <Text style={{fontSize:20,fontWeight:500}}>{recipe.nutrition.nutrients[8].amount}{recipe.nutrition.nutrients[8].unit}</Text>
                    </View>
                </View>
                <View style={{
                    padding:10,margin:10,
                    flexDirection: "row", justifyContent: "space-between",
                    borderWidth: 1,borderRadius:20}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={require("../assets/icons/servings.png")} style={{height:40,width:40,marginInline:5}} resizeMode="contain"/>
                        <Text style={{fontSize:20}}>: {recipe.servings} Servings</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={require("../assets/icons/time.png")} style={{ height: 30, width: 30 ,marginInline:5}} resizeMode="contain" />
                        <Text style={{fontSize:20}}>: {recipe.readyInMinutes}Minutes</Text>
                    </View>
                    <FoodType typeColor={(recipe.vegetarian)?"green":"red"} height={40} />
                </View>
                <View>
                    <Text style={{ textAlign: "center", fontFamily: "AuralyessFreeTrial-RpMrE", color: "#4E070C", fontSize: 30 ,marginBottom:5}}>Ingredients</Text>
                    <FlatList
                        data={recipe.extendedIngredients}
                        renderItem={({ item }) => 
                            <Item name={item.name}
                                unit={item.measures.metric.amount}
                                unitName={item.measures.metric.unitLong} />}
                                keyExtractor={(item) => item.id}
                                style={{borderRadius:10,borderWidth:1,padding:10,margin:10}}/>
                </View>
                <View>
                    <Text style={{ textAlign: "center", fontFamily: "AuralyessFreeTrial-RpMrE", color: "#4E070C", fontSize: 30 ,marginBottom:5}}>Instructions</Text>
                    <RenderHTML source={{ html: recipe.instructions }}/>
                </View>
            </ScrollView>
        </SafeAreaView>)
    )
}