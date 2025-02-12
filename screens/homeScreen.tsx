import { SafeAreaView,Text,View,TextInput,Image, ScrollView} from "react-native";
import FeatureCard from "../components/featureCard";
import { styles } from "../styles/styles";
import RecipeCard from "../components/recipeCard";
import SearchBar from "../components/searchBar";
export default function HomeScreen()
{
    return (
        <SafeAreaView>
            <ScrollView>
            <SearchBar/>
            <Text style={{ textAlign: "center", fontSize: 40 ,fontFamily:"AuralyessFreeTrial-RpMrE"}}>Unlock the Flavours</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between",margin:15}}>
            <FeatureCard
                path={require("../assets/images/ingri.jpeg")}
                name={"Ingredients"}/>
                <FeatureCard
                path={require("../assets/images/nutrition.jpeg")}
                name={"Nutrition"}/>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",margin:15}}>
            <FeatureCard
                path={require("../assets/images/suprise.jpeg")}
                name={"Suprise"}/>
                <FeatureCard
                path={require("../assets/images/camera.jpeg")}
                name={"Camera"}/>
                </View>
                </ScrollView>
        </SafeAreaView>
    )
}