import { View, Text, TouchableOpacity, Image } from 'react-native'
import { MinusIcon, PlusIcon } from 'react-native-heroicons/solid'
import tw from 'twrnc'


export default function CartItemCard({item}) {
  const {img, name, price, shadow, color, qty} = item

  return (
    <View style={tw`flex-row justify-between items-center gap-x-5 mb-5`}>
    <View style={tw`ml-7`}>
    <TouchableOpacity
    style={tw`flex-row -mb-10 -ml-8 shadow-xs  z-20`}>
      <Image source={img} style={{
          width: 65, height: 65,
          shadowColor: shadow,
          overflow: 'visible',
          shadowRadius: 15,
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

    </View>
  </View>
  <View style={tw`flex-1 gap-y-1`}>
    <Text style={tw`text-gray-500 text-base font-bold`}>
      {name}
    </Text>
    <Text style={tw`text-yellow-500 font-extrabold`}>
      $ {price}
    </Text>
  </View>
  <View style={tw`flex-row items-center gap-x-2`}>
    <TouchableOpacity style={tw`bg-gray-300 p-1 rounded-lg`} >
      <PlusIcon size='15' color='white' />
    </TouchableOpacity>
    <Text>{qty}</Text>
    <TouchableOpacity style={tw`bg-gray-300 p-1 rounded-lg`} >
      <MinusIcon size='15' color='white' />
    </TouchableOpacity>
  </View>
  </View>
  )
}