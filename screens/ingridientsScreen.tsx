import { useState } from 'react'
import {TouchableOpacity,SafeAreaView,Text,View,FlatList,TextInput,Image, Pressable} from 'react-native'
import { styles } from '../styles/styles'
import AddButton from '../assets/svg/addButton'
import spoon from '../constants/spoon';
import {useQuery} from '@tanstack/react-query';
import FoodCard from '../components/foodCard';
export default function IngridientsScreen() {
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  function editItem(item: string, action: string) {
    if (action === 'rem') {
      setList(list.filter(l => l !== item));
    }
    if (action === 'add') {
      let newList = list;
      newList.push(name);
      setList(newList);
      setName('');
    }
  }

  async function getRecipes() {
    console.log('Called');
    try {
      const results = await spoon.get('recipes/findByIngredients', {
        params: {ingredients: list.toString()},
      });
      return results.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  const {data, error, refetch, isFetching} = useQuery({
    queryKey: ['recipes', list.toString()],
    queryFn: getRecipes,
    enabled: false,
  });
  const Item = ({name}: {name: string}) => (
    <View
      style={[
        styles.fields,
        {
          backgroundColor: '#F4E3CE',
          padding: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBlock: 5,
        },
      ]}>
      <Text>{name}</Text>
      <Pressable
        onPress={() => {
          editItem(name, 'rem');
        }}>
        <Image source={require('../assets/icons/close.png')} />
      </Pressable>
    </View>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.heading}>Ingridients</Text>
      <View style={[styles.fields, {flexDirection: 'row'}]}>
        <TextInput
          style={{width: '100%'}}
          onChangeText={setName}
          value={name}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          editItem(name, 'add');
        }}
        style={[
          styles.button,
          {
            flexDirection: 'row',
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: 'orange',
            alignItems: 'center',
          },
        ]}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'orange'}}>
          Add
        </Text>
        <AddButton height={30} />
      </TouchableOpacity>
      <FlatList data={list} renderItem={({item}) => <Item name={item} />} />
      {list.length === 0 ? null : (
        <TouchableOpacity
          onPress={() => {
            refetch();
          }}>
          <Text style={styles.button}>GET RECIPES</Text>
        </TouchableOpacity>
      )}
      <FlatList
        data={data}
        renderItem={({item}) => (
          <FoodCard image={item.image} title={item.title} id={item.id} />
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
}