import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'

export default function HomeScreen() {
  return (
    <SafeAreaView>
        {/* top bar */}
        <View>
           
        <TouchableOpacity 
        style={tw-`p-2 rounded-xl bg-orange-100`}
        >
            <Text>Home Screen here</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}