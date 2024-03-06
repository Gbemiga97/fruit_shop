import { View, Text, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import StarRating from 'react-native-star-rating-widget'


export default function ProductScreen(props) {
    let fruit = props.route.params

    const {color, img, desc, stars, name, price, shadow} = fruit

    const navigation = useNavigation()

  return (
    <View style={{backgroundColor: color, flex: 1,}}>
     <SafeAreaView style={tw`pt-6`}>
        <View style={tw`flex-row justify-start mx-5`} >
            <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={tw`border border-gray-50 rounded-xl bg-[rgba(255,255,255,0.2)]`}>
                <ChevronLeftIcon size='30' color='white' />
            </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center mt-5 pb-10 `}>
            <Image source={img} style={{width: 290, height: 290}} />
        </View>
     </SafeAreaView>
     <View style={tw`bg-orange-50 rounded-tr-[10] rounded-tl-[10] px-6 gap-y-2 flex-1`}>
        <Text style={tw`text-2xl font-bold text-gray-500 mt-8`}>
            {name}
        </Text>
        <View style={tw`flex-row justify-between mb-3`}>
            <Text style={tw`text-gray-500 font-semibold`}>{desc}</Text>
            <Text style={tw`text-gray-500 font-semibold`}>
                Sold <Text style={tw`text-gray-800 font-extrabold`}>239</Text> 
            </Text>
        </View>
        <StarRating
        rating={stars}
        starSize={20}
        maxStars={5}
        />
        <View style={{height: 165}}>
            <Text style={tw`tracking-wider py-3 text-gray-500`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error alias deserunt repudiandae exercitationem molestiae in id saepe dolorem quia omnis iste quaerat sint suscipit accusantium, placeat quod earum ad architecto doloremque. Nostrum est, nam reiciendis ipsum quasi ullam quo vitae, ad saepe soluta odit nesciunt modi laboriosam iure possimus perferendis, tenetur error et magnam delectus recusandae voluptatibus. A, magnam incidunt.
           </Text>
        </View>
        <View style={tw`flex-row justify-between items-center mt-8`}>
            <Text style={tw`text-3xl text-gray-700 font-bold`}>
                $ {price}</Text>
            <TouchableOpacity
            style={{
                backgroundColor: shadow,
                opacity: 0.6,
                flex: 1,
                padding: 12,
                borderRadius: 4,
                marginLeft: 34,
                shadowColor: shadow,
                shadowRadius: 25,
                shadowOffset: {width: 0, height: 15},
                shadowOpacity: 0.5
            }}
            onPress={() => navigation.navigate('Cart')}
            >
               <Text style={tw`text-center text-xl text-white font-bold`}>Add to cart</Text>
            </TouchableOpacity>
        </View>
     </View>
    </View>
  )
}