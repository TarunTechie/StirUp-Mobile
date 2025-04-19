import { SafeAreaView ,View,Text,Pressable,Switch, ScrollView,TextInput} from 'react-native'
import DropDown from '../components/dropDown'
import FoodType from '../assets/svg/foodType'
import { styles } from '../styles/styles'
import { diets} from '../constants/lists'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import spoon from '../constants/spoon'
export default function NutritionScreen()
{
    async function getMeals()
    { 
        try {
            const result=await spoon.get()
        } catch (error) {
            throw error
        }
    }
    const Item = ({ item }: { item: string }) => (<Pressable style={styles.button}></Pressable>)
    const [veg,setVeg]=useState(false)
    return (
    <SafeAreaView>
            <ScrollView>
            <Text style={{ fontFamily: "CrispyFoodRegular-6YM5D", color: "#4E070C", fontSize: 50, textAlign: "center", marginBottom: 50 }}>Nutrition</Text>
            <View style={{gap:10}}>
                <Text style={styles.heading}>Meal Prefrences</Text>
                <DropDown data={diets} />
                    <Text style={styles.heading}>Calories</Text>
                    <TextInput style={styles.fields} />
                <View style={{ flexDirection: "row", margin: "auto",gap:10,borderWidth:3,borderColor:"green",padding:10,alignItems:"center",borderRadius:10}}>
                    <Text style={{fontWeight:"bold",color:"green"}}>VEG ONLY</Text>
                <FoodType typeColor={"green"}/>
                    <Switch value={veg} onValueChange={()=>setVeg(!veg)}/>
                </View>
            </View>
            <Pressable>
                <Text style={styles.button}>Generate</Text>
            </Pressable>
                <Text style={styles.heading}>Recipes</Text>
        </ScrollView>
    </SafeAreaView>
    )
}