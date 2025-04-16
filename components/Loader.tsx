import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, Dimensions,SafeAreaView } from 'react-native';

const OFFSET = 30;
const SQUARE = 26;
const screenWidth = Dimensions.get('window').width;

export default function Loader() {
  const positions = useRef(
    Array.from({ length: 5 }, () => new Animated.ValueXY({ x: 0, y: 0 }))
  ).current;

  const animateSquare = (index: number, sequence: { x: number; y: number }[]) => {
    const anim = sequence.map((pos, i) =>
      Animated.timing(positions[index], {
        toValue: { x: pos.x * OFFSET, y: pos.y * OFFSET },
        duration: 300,
        delay: i * 100,
        useNativeDriver: false,
        easing: Easing.inOut(Easing.ease),
      })
    );
    return Animated.sequence(anim);
  };

  useEffect(() => {
    const loop = () => {
      Animated.parallel([
        animateSquare(0, [
          { x: 0, y: 0 },
          { x: 0, y: 1 },
        ]),
        animateSquare(1, [
          { x: 0, y: 1 },
          { x: 1, y: 1 },
          { x: 1, y: 0 },
          { x: 0, y: 0 },
        ]),
        animateSquare(2, [
          { x: 1, y: 1 },
          { x: 2, y: 1 },
          { x: 2, y: 0 },
          { x: 3, y: 0 },
          { x: 3, y: 1 },
        ]),
        animateSquare(3, [
          { x: 2, y: 1 },
          { x: 3, y: 1 },
          { x: 3, y: 0 },
          { x: 2, y: 0 },
        ]),
        animateSquare(4, [
          { x: 3, y: 1 },
          { x: 2, y: 1 },
          { x: 1, y: 1 },
          { x: 1, y: 0 },
        ]),
      ]).start(() => {
        loop();
      });
    };
    loop();
  }, []);

    return (
    <SafeAreaView style={{justifyContent:"center",alignItems:"center",flex:1}}>
    <View
      style={{
          width: 4 * OFFSET + SQUARE,
          height: 2 * OFFSET + SQUARE,
          marginTop: 10,
          marginBottom: 30,
          alignSelf: 'center',
          position: 'relative',
        }}
        >
      {positions.map((pos, index) => (
          <Animated.View
          key={index}
          style={{
              position: 'absolute',
              width: SQUARE,
              height: SQUARE,
              backgroundColor: 'darkorange',
              borderRadius: 2,
              transform: [{ translateX: pos.x }, { translateY: pos.y }],
            }}
            />
        ))}
    </View>
    </SafeAreaView>
  )
}
