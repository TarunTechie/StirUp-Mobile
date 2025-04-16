import { SafeAreaView,Text,ScrollView,FlatList, useWindowDimensions, Dimensions,View} from "react-native";
import FeatureCard from "../components/featureCard";
import { styles } from "../styles/styles";
import RecipeCard from "../components/recipeCard";
import SearchBar from "../components/searchBar";
import { features } from "../constants/lists";
export default function HomeScreen()
{
    const screenWidth = Dimensions.get("window").width
    const cardWidth = screenWidth * 0.7
    const cardSpacing=20
    return (
    <SafeAreaView>
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 10 }} >
            <SearchBar/>
                <Text style={styles.heading}>Unlock the Flavours</Text>
                <FlatList
                    horizontal
                    pagingEnabled={false}
                    snapToInterval={cardWidth + cardSpacing}
                    decelerationRate={"fast"}
                    contentContainerStyle={{ paddingHorizontal: (screenWidth - cardWidth)/4}}
                    data={features}
                    keyExtractor={item => item.id}
                    renderItem={({ item,index }) => (<FeatureCard key={index} name={item.name} path={item.path} navTo={item.navTo} />)}
                    />
                <Text style={styles.heading}>Your Meals</Text>    
                <ScrollView contentContainerStyle={{flexDirection:"row",marginInline:5}} horizontal={true}>
                    <RecipeCard />
                    <RecipeCard/>
                </ScrollView>
        </ScrollView>
    </SafeAreaView>
    )
}