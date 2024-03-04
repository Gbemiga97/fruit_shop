import { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { HeartIcon } from 'react-native-heroicons/solid'
import tw from 'twrnc'


export default function FruitCard({fruit}) {

    const {name, price, desc, stars, shadow, img, color} = fruit

    const [isFavorite, setIsFavorite] = useState(false)

  return (
    <View style={{width: 270, borderRadius: 40, backgroundColor: color(1), marginHorizontal: 20}}>
     <View style={tw`flex-row justify-end`}>
       <TouchableOpacity
       onPress={() => setIsFavorite(prev => !prev)}
       style={tw`p-3 rounded-full mr-4 mt-4 bg-[rgba(255,255,255,0.3)]`}>
       <HeartIcon size='24' color={isFavorite ? shadow : 'white'} />
       </TouchableOpacity>
     </View>
      <View
      style={
        {
            display: 'flex',
            justifyContent: 'center',
            shadowColor: shadow,
            paddingTop: 40
          }
      }
      >
        <Image source={img} style={{width: "100%", height: 210}} />
      </View>
      <View style={tw`ml-4 my-4`}>
        <Text style={tw`text-white font-bold text-xl`}>
            {name}
        </Text>
        <Text style={tw`text-lg tracking-wide font-bold text-white`}>
            ${price}
        </Text>
      </View>
    </View>
  )
}