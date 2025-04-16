import { View, TextInput, Image, TouchableOpacity,Text ,FlatList, SafeAreaView} from 'react-native'
import Animated,{FadeInDown,FadeOutUp} from 'react-native-reanimated'
import { useState } from 'react'
import { styles } from '../styles/styles'
import spoon from '../constants/spoon'
import { useNavigation } from '@react-navigation/native'
type data = {
    name: string,
    id:any
}
export default function SearchBar()
{
    const navigation=useNavigation()
    const Item = ({ name, id }: { name: string, id: number }) => (
    <TouchableOpacity onPress={()=>{navigation.navigate("Recipe",{id})}}>
        <View style={{padding:3,borderBottomWidth:1}}>
            <Text>{name}</Text>
        </View>
    </TouchableOpacity>)
    const [search, setSearch] = useState("")
    const [food, setFood] = useState([])
    const[visible,setVisible]=useState(false)
    async function getRecipes()
    {
        try
        {
            const results = await spoon.get('food/search', { params: { 'query': search, number: 10 } })
            setFood(results.data.searchResults[0].results)
            setVisible(true)
        }
        catch (error)
        {
            console.error(error)
        }
    }
    return (
        <SafeAreaView>
        <View style={[styles.fields,{marginTop:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"white"}]}>
            <TextInput placeholder="Search A Dish" onChangeText={setSearch} style={{width:"80%"}} />
            <TouchableOpacity onPress={getRecipes}>
                <Image source={require("../assets/icons/search.png")} resizeMode="contain" style={{ height: 35 }} />
            </TouchableOpacity>
            </View>

            {visible && (<Animated.View
                entering={FadeInDown.duration(500)}
                exiting={FadeOutUp.duration(500)}  >
                <TouchableOpacity onPress={() => { setVisible(false) }}>
                    <Image source={require("../assets/icons/close.png")} style={{ position: "absolute", right: 0 }} />
                </TouchableOpacity>
                <FlatList<data>
                    data={food}
                    renderItem={({ item }) => <Item name={item.name} id={item.id}/>}
                    keyExtractor={item => item.id}
                    style={styles.dropdown}
                    initialNumToRender={3}
                    nestedScrollEnabled={true} />
            </Animated.View>)}
        </SafeAreaView>
    )
}