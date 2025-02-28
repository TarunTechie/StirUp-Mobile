import { SafeAreaView,Text,View,ScrollView, Pressable} from "react-native";
import FeatureCard from "../components/featureCard";
import { styles } from "../styles/styles";
import RecipeCard from "../components/recipeCard";
import SearchBar from "../components/searchBar";
import { useNavigation } from "@react-navigation/native";
export default function HomeScreen()
{
    const navigation=useNavigation()
    return (
    <SafeAreaView>
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 10 }} >
            <SearchBar/>
            <Text style={styles.heading}>Unlock the Flavours</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginBlock: 15 }}>
            <Pressable onPress={()=>navigation.navigate('Ingridients')}>
            <FeatureCard
                path={require("../assets/images/ingri.jpeg")}
                name={"Ingredients"} />
            </Pressable>
                    
            <Pressable onPress={()=>navigation.navigate("Nutrition")}>
            <FeatureCard
                path={require("../assets/images/nutrition.jpeg")}
                name={"Nutrition"}/>
            </Pressable>  
                    
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginBlock:15}}>
            <Pressable onPress={()=>navigation.navigate("Random")}>
            <FeatureCard
                path={require("../assets/images/suprise.jpeg")}
                name={"Suprise"}/>
            </Pressable> 
                </View>
                <Text style={styles.heading}>Your Meals</Text>    
                <ScrollView contentContainerStyle={{flexDirection:"row",marginInline:5}} horizontal={true}>
                    <RecipeCard />
                    <RecipeCard/>
                </ScrollView>
        </ScrollView>
    </SafeAreaView>
    )
}