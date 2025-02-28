import { useState } from 'react'
import {TouchableOpacity,SafeAreaView,Text,View,FlatList,TextInput,Image, Pressable} from 'react-native'
import { styles } from '../styles/styles'
import AddButton from '../assets/svg/addButton'
export default function IngridientsScreen()
{
    const [list, setList] = useState([])
    const [name,setName]=useState("")
    function editItem(item:string,action:string)
    {
        if (action === "rem") {
            setList(list.filter(l=>l!==item))
        }
        if (action === "add") { 
            let newList = list
            newList.push(name)
            setList(newList)
            setName("")
        }

    }
    const Item = ({ name }: { name: string }) => (
        <View style={[styles.fields, { backgroundColor: "#F4E3CE", padding: 5 ,flexDirection:"row",justifyContent:"space-between",marginBlock:5}]}>
            <Text>{name}</Text>
            <Pressable onPress={()=>{editItem(name,"rem")}}>
            <Image source={require('../assets/icons/close.png')}/>
            </Pressable>
        </View>
    )
    return (
        <SafeAreaView>
            <Text style={styles.heading}>Ingridients</Text>
            <View style={[styles.fields,{flexDirection:"row"}]}>
                <TextInput style={{ width: "100%" }} onChangeText={setName} value={name} />
            </View>
            <TouchableOpacity onPress={()=>{editItem(name,"add")}} style={[styles.button,{flexDirection:"row",backgroundColor:"white",borderWidth:2,borderColor:"orange",alignItems:"center"}]}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "orange" }}>Add</Text><AddButton height={30} />
            </TouchableOpacity>
            <FlatList
                    data={list}
                    renderItem={({ item }) => <Item name={item}  /> } />
        </SafeAreaView>
    )
}