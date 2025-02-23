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
        <ScrollView>
            <SearchBar/>
            <Text style={styles.heading}>Unlock the Flavours</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between",margin:15}}>
            <FeatureCard
                path={require("../assets/images/ingri.jpeg")}
                name={"Ingredients"} />
                    
            <Pressable onPress={()=>navigation.navigate("Nutrition")}>
            <FeatureCard
                path={require("../assets/images/nutrition.jpeg")}
                name={"Nutrition"}/>
            </Pressable>  
                    
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",margin:15}}>
            <Pressable onPress={()=>navigation.navigate("Random")}>
            <FeatureCard
                path={require("../assets/images/suprise.jpeg")}
                name={"Suprise"}/>
            </Pressable> 
                <FeatureCard
                path={require("../assets/images/camera.jpeg")}
                name={"Camera"}/>
                </View>
                <Text style={styles.heading}>Your Meals</Text>    
                <View style={{flexDirection:"row",marginInline:5}}>
                    <RecipeCard />
                    <RecipeCard/>
                </View>
        </ScrollView>
    </SafeAreaView>
    )
}