import { SafeAreaView ,View,Text,Pressable,Switch, ScrollView,TextInput,FlatList,Dimensions} from 'react-native'
import DropDown from '../components/dropDown'
import FoodType from '../assets/svg/foodType'
import { styles } from '../styles/styles'
import { diets} from '../constants/lists'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import spoon from '../constants/spoon'
import Loader from '../components/Loader'
import FoodCard from '../components/foodCard'
export default function MealScreen() {

  const cardWidth=Dimensions.get('window').width/2

  const [veg, setVeg] = useState(false);
  const[parameters,setParameters]=useState({"diet":"","cals":""})
  const[requested,setRequested]=useState(true)

  async function getMeals() {
    let mealIds=""
    setRequested(true)
    try {
      const result = await spoon.get('mealplanner/generate?timeFrame=day',
        { params: { 'diet': parameters.diet, 'targetCalories': parameters.cals } });
      mealIds=mealIds+result.data.meals.map((d)=>d.id.toString())
      console.log(mealIds)
      const results = await spoon.get('recipes/informationBulk', { params: { 'ids': mealIds, 'includeNutrition': true } })
      return results.data
    }
    catch (error) {
      return error  
    }
  }

  const { data, error,refetch ,isFetching } = useQuery({
    queryKey: ['recipe', parameters.cals, parameters.diet],
    queryFn: getMeals,
    enabled:false
  })
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView>
        <Text
          style={{
            fontFamily: 'CrispyFoodRegular-6YM5D',
            color: '#4E070C',
            fontSize: 50,
            textAlign: 'center',
            marginBottom: 50,
          }}>
          Meal for the Day
        </Text>
        <View style={{gap: 10}}>
          <Text style={styles.heading}>Meal Prefrences</Text>
          <DropDown
            data={diets}
            onSelect={value => {
              setParameters((parameters)=>({...parameters,['diet']:value}))
            }}
          />
          <Text style={styles.heading}>Calories</Text>
          <TextInput style={styles.fields}
            onChangeText={(value) =>{setParameters(parameters=>({...parameters,['cals']:value}))} } />
          <View
            style={{
              flexDirection: 'row',
              margin: 'auto',
              gap: 10,
              borderWidth: 3,
              borderColor: 'green',
              padding: 10,
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text style={{fontWeight: 'bold', color: 'green'}}>VEG ONLY</Text>
            <FoodType typeColor={'green'} />
            <Switch value={veg} onValueChange={() => setVeg(!veg)} />
          </View>
        </View>
        <Pressable onPress={() => {refetch()}}>
          <Text style={styles.button}>Generate</Text>
        </Pressable>
        {!requested?null:
          isFetching ? <Loader /> :
            <FlatList
              horizontal
              pagingEnabled
              snapToInterval={cardWidth}
              data={data}
              renderItem={({ item }) => <FoodCard id={item.id} image={item.image} title={item.title}/>}
            />
        }
      </ScrollView>
    </SafeAreaView>
  );
}