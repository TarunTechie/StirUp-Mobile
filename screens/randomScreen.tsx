import { SafeAreaView ,View,Text,Pressable,Switch, ScrollView, FlatList} from 'react-native'
import DropDown from '../components/dropDown'
import FoodType from '../assets/svg/foodType'
import { styles } from '../styles/styles'
import { mealTypes ,cuisines} from '../constants/lists'
import { useState } from 'react'
import spoon from '../constants/spoon'
import { useQuery } from '@tanstack/react-query'
import FoodCard from '../components/foodCard'
import { ColorSpace } from 'react-native-reanimated'
import Loader from '../components/Loader'
export default function RandomScreen()
{
    const [parameters,setParameters]=useState({} as String[])
    const [veg, setVeg] = useState(false)
    const [requested,setRequested]=useState(false)
    async function getRecipes()
    {
        setRequested(true)
        setParameters((parameters)=>veg?parameters:[...parameters,'vegetarian'])
        try
        {
            const results = await spoon.get('recipes/random', { params: { 'include-tags': parameters.toString(), 'number': 6 } })
            console.log(results)
            return results.data
        }
        catch (error)
        {
            return error
        }
    }
    const { data, error,refetch ,isFetching } = useQuery(
        {
            queryKey: ['recepies',parameters.toString()],
            queryFn: getRecipes,
            enabled:false
        }
    )
    return (
    <SafeAreaView style={{flex:1}}>
            <ScrollView>
            <Text style={{ fontFamily: "CrispyFoodRegular-6YM5D", color: "#4E070C", fontSize: 50, textAlign: "center", marginBottom: 50 }}>SUPRISE</Text>
            <View style={{gap:10,flex:1}}>
                <Text style={styles.heading}>Meal Prefrences</Text>
                <DropDown data={mealTypes} onSelect={(value:String)=>{setParameters([...parameters,value])}}/>
                <Text style={styles.heading}>Cuisines</Text>
                <DropDown data={cuisines} onSelect={(value:String)=>{setParameters([...parameters,value])}}/>
                <View style={{ flexDirection: "row", margin: "auto",gap:10,borderWidth:3,borderColor:"green",padding:10,alignItems:"center",borderRadius:10}}>
                    <Text style={{fontWeight:"bold",color:"green"}}>VEG ONLY</Text>
                <FoodType typeColor={"green"}/>
                    <Switch value={veg} onValueChange={()=>setVeg(!veg)}/>
                </View>
            </View>
            <Pressable onPress={()=>{refetch()}}>
                <Text style={styles.button}>Generate</Text>
            </Pressable>
                {!requested ? null :
                    isFetching?<Loader/>:
                    <FlatList
                    data={data.recipes}
                    keyExtractor={(item)=>item.index}
                    renderItem={({ item }) => <FoodCard id={item.id} image={item.image} title={item.title} />}
                    numColumns={2}        
                />}
        </ScrollView>
    </SafeAreaView>
    )
}