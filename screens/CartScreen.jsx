import { useNavigation } from '@react-navigation/native'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import tw from 'twrnc'
import { data } from '../utils'
import CartItemCard from '../components/CartItemCard'

export default function CartScreen() {

    const navigation = useNavigation()

  return (
   <SafeAreaView style={tw`flex-1 flex justify-between bg-orange-50 pt-6`}>
    <View style={tw`flex-row justify-start mx-5 `}>
        <TouchableOpacity style={tw`border border-gray-300 rounded-xl`}
        onPress={() => navigation.goBack()}
        >
            <ChevronLeftIcon size='30' color='gray' />
        </TouchableOpacity>
    </View>
    <View style={tw`mx-5 flex-1`}>
        <Text style={tw`text-gray-500 text-2xl py-10`}>
            Your <Text style={tw`font-bold`}>cart</Text>
        </Text>
    <View>
        {
            data.cartItems.map((item, i) => <CartItemCard key={i} item={item} />)
        }
    </View>

    {/* Total Amount */}
    <View style={tw`flex-row justify-between py-6 pb-10`}>
        <Text style={tw`text-lg font-semibold text-gray-700`}>
            Total price:
        </Text>
        <Text style={tw`font-bold text-yellow-500`}>
           $ 420.80
        </Text>
    </View>

    {/* Payment button  */}
    <View style={tw`flex-row justify-center mx-7`}>
        <TouchableOpacity
        style={{
            backgroundColor: 'orange',
            opacity: 0.8,
            shadowColor: 'orange',
            shadowRadius: 25,
            shadowOpacity: 0.4,
            shadowOffset: {width: 0, height: 15},
            padding: 10,
            flex: 1,
            borderRadius: 10
        }}
        >
            <Text style={tw`text-center text-white font-bold text-xl`}>Payment</Text>
        </TouchableOpacity>
    </View>
    </View>
   </SafeAreaView>
  )
}