import { View, TextInput, Image } from 'react-native'
import { styles } from '../styles/styles'
export default function SearchBar()
{
    return (
        <View style={[styles.fields,{marginBlock:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}]}>
            <TextInput placeholder="Search A Dish" />
            <Image source={require("../assets/icons/search.png")} resizeMode="contain" style={{height:35}} />
        </View>
    )
}