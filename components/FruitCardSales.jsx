import { View, Text, TouchableOpacity, Image } from 'react-native'
import tw from 'twrnc'


export default function FruitCardSales({fruit}) {

    const {img, price, shadow, color} = fruit

  return (
    <View style={tw`mr-6`}>
      <TouchableOpacity style={tw`flex-row justify-center -mb-9 shadow-xs  z-20`}>
        <Image source={img} style={{
            width: 65, height: 65,
            shadowColor: shadow,
            overflow: 'visible',
            shadowRadius: 15,
            shadowOffset: 15,
            shadowOffset: {width: 0, height: 20},
            shadowOpacity: 0.4
        }} />
      </TouchableOpacity>
      <View style={{
        backgroundColor: color(0.4),
        height: 75, width: 80,
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',

      }}>
       <Text style={tw`font-semibold text-center text-gray-800 pb-3 tracking-wide`}>
       $ {price}
       </Text>
      </View>
    </View>
  )
}