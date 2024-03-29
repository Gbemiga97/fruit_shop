import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { Bars3CenterLeftIcon, ShoppingCartIcon } from 'react-native-heroicons/solid'
import { data } from '../utils'
import FruitCard from '../components/FruitCard'
import FruitCardSales from '../components/FruitCardSales'
import { useNavigation } from '@react-navigation/native'


export default function HomeScreen() {

    const [activeCategory, setActiveCategory] = useState("Oranges")
    const navigation = useNavigation()

  return (
    <SafeAreaView style={tw`flex-1 bg-orange-50 pt-6`}>
        {/* top bar */}
        <View style={tw`mx-5 flex-row justify-between items-center`}>  
        <Bars3CenterLeftIcon size="30" color="black" />        
        <TouchableOpacity 
        style={tw`p-2 rounded-xl bg-orange-100`}
        onPress={() => navigation.navigate('Cart')}
        >
            <ShoppingCartIcon size='25' color='orange' />
        </TouchableOpacity>
        </View>

        {/* categories */}
        <View style={tw`mt-4`}>
            <Text style={tw`text-2xl tracking-widest ml-5 font-medium text-gray-500`}>
                Seasonal
            </Text>
            <Text style={tw`text-3xl font-semibold ml-5 text-gray-500`}>
                Fruits and Vegetable
            </Text>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={tw`mt-8 px-5`}
            >
                {
                    data.categories.map((category, i) => (
                        <TouchableOpacity style={tw`mr-8 relative`} onPress={() => setActiveCategory(category)}>
                            <Text style={tw`text-xl text-gray-500 ${category === activeCategory ? 'font-bold' : ''}`}>
                                {category}
                            </Text>
                            {
                                category === activeCategory ? (
                                    <Text style={tw`text-orange-400 font-extrabold -mt-3 ml-2`}>__ _</Text>
                                ) : null
                            }
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>

        {/* Fruit Carousel */} 
        <View style={tw`mt-8`}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                data.featuredFruits.map((fruit, i) => <FruitCard fruit={fruit} key={i}  />)
            }
        </ScrollView>
        </View>

        {/* Hot Sales */}
        <View style={tw`mt-8 pl-5 gap-y-1`}>
            <Text style={tw`text-gray-500 text-xl font-bold`}>
                Hot Sales
            </Text>
            <ScrollView 
            horizontal showsHorizontalScrollIndicator={false} style={tw`overflow-x-visible`}
            >
                {
                    data.featuredFruits.reverse().map((fruit, i) => <FruitCardSales key={i} fruit={fruit} />)
                }
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}