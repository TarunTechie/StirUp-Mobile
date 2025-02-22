import { View ,FlatList,TextInput,Text,Image, Pressable} from "react-native"
import { styles } from "../styles/styles"
import { useState } from 'react'
import Animated,{FadeInDown, useAnimatedStyle,useSharedValue} from 'react-native-reanimated'
export default function DropDown({ data }: { data: string[] })
{
    const [visible, setVisible] = useState(false)
    const [value,setValue]=useState("Select from Dropdown")
    const rotate=useSharedValue(0)
    const animatedStyle = useAnimatedStyle(() => ({
        transform:[{rotateX:`${rotate.value}deg`}]
    }))
    const AnimatedImage = Animated.createAnimatedComponent(Image)
    const AnimatedList = Animated.createAnimatedComponent(FlatList)
    type data = {
        name: string,
        id:any
    }
    function changeState()
    {
        setVisible(!visible)
        rotate.value=rotate.value==180?0:180
    }

    const Item = ({name}:{name:string}) => (
        <Pressable onPress={() => { setValue(name) }}>
            <Text style={{ padding: 3, borderBottomWidth: 1 }}>{name}</Text>
        </Pressable>
    )
    return (
        <View>
            <View style={[styles.fields,{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}]}>
                <Text style={{marginLeft:10}}>{value}</Text>
                <Pressable onPress={() => {changeState()}}>
                <AnimatedImage source={require('../assets/icons/arrow.png')} style={[animatedStyle,{width:15,height:15,margin:10}]} resizeMode="contain"/>
                </Pressable>
            </View>
            {visible &&
                <Animated.View
                entering={FadeInDown.duration(500)}
                >
                <FlatList<string>
                style={styles.dropdown}
                data={data}
                        renderItem={({ item }) => <Item name={item} />} />
                </Animated.View>
                }
        </View>
    )
}