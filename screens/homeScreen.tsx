import { SafeAreaView ,Text,View} from "react-native";
import FeatureCard from "../components/featureCard";
export default function HomeScreen()
{
    return (
        <SafeAreaView>
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
        </SafeAreaView>
    )
}