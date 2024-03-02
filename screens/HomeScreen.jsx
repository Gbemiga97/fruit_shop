import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { Bars3CenterLeftIcon, ShoppingCartIcon } from 'react-native-heroicons/solid'
import { data } from '../utils'


export default function HomeScreen() {

    const [activeCategory, setActiveCategory] = useState("Oranges")

  return (
    <SafeAreaView style={tw`flex-1 bg-orange-50 pt-6`}>
        {/* top bar */}
        <View style={tw`mx-5 flex-row justify-between items-center`}>  
        <Bars3CenterLeftIcon size="30" color="black" />        
        <TouchableOpacity 
        style={tw`p-2 rounded-xl bg-orange-100`}
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
    </SafeAreaView>
  )
}