import { View, TextInput, Image, TouchableOpacity,Text ,FlatList, SafeAreaView} from 'react-native'
import {useState} from 'react'
import { styles } from '../styles/styles'
import spoon from '../constants/spoon'

type itemProps = {
    name:string
}

type data = {
    name: string,
    id:any
}
const Item = ({name}:itemProps) => (
    <View style={{padding:3,borderBottomWidth:1}}>
        <Text>{name}</Text>
    </View>
)
export default function SearchBar()
{
    const [search, setSearch] = useState("")
    const [food, setFood] = useState([])
    const[visible,setVisible]=useState("none")
    async function getRecipes()
    {
        try
        {
            const results = await spoon.get('food/search', { params: { 'query': search, number: 10 } })
            console.log(results.data.searchResults[0])
            setFood(results.data.searchResults[0].results)
            setVisible("flex")
        }
        catch (error)
        {
            console.error(error)
        }
    }
    return (
        <SafeAreaView>
        <View style={[styles.fields,{marginTop:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}]}>
            <TextInput placeholder="Search A Dish" onChangeText={setSearch} />
            <TouchableOpacity onPress={getRecipes}>
                <Image source={require("../assets/icons/search.png")} resizeMode="contain" style={{ height: 35 }} />
            </TouchableOpacity>
            </View>
            <View style={{ display: visible }}>
            <TouchableOpacity onPress={()=>{setVisible("none")}}>
                    <Image source={require("../assets/icons/close.png")} style={{position:"absolute",right:0}} />
            </TouchableOpacity>
            <FlatList<data>
                data={food}
                renderItem={({ item }) => <Item name={item.name} />}
                keyExtractor={item => item.id} 
                style={{
                    position: "relative", backgroundColor: "white",
                    marginInline: 22,
                    borderWidth: 1, borderRadius: 10,borderColor:"#291010",
                    borderTopWidth: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0,
                }}
                initialNumToRender={3}
                    nestedScrollEnabled={true} />
            </View>
        </SafeAreaView>
    )
}