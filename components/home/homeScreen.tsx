import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { HomeStyles } from './homeStyleScreen'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={HomeStyles.container}>
      <ScrollView>
        <View style={HomeStyles.header}>
          <View style={HomeStyles.flexTextHeader}>
            <Text style={HomeStyles.textHeader}>QUICK</Text>
            <Text style={HomeStyles.textHeader}>BITE</Text>
          </View>
          <TouchableOpacity>
            <View style={HomeStyles.flexIconHeader}>
              <FontAwesome5 name="shopping-cart" style={HomeStyles.iconStyle}/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.flexTitle}>
          <Image style={HomeStyles.imageTitle1} source={require('../../assets/images/HomeTitle/HomeTitle1.png')} />
          <Image style={HomeStyles.imageTitle2} source={require('../../assets/images/HomeTitle/HomeTitle2.png')} />
        </View>
        <View style={HomeStyles.containerTextTilte}>
          <Text style={HomeStyles.textTilte}>The quickest</Text>
          <Text style={HomeStyles.textTilte}>way to find the</Text>
          <Text style={HomeStyles.textTilte}>perfect bite</Text>
        </View>
        <View style={HomeStyles.containerTextInput}>
          <TextInput
            style={HomeStyles.textInput}
            placeholder='Search for specific restaurant'
            placeholderTextColor={'#BBBBBB'}
          />
          <TouchableOpacity style={HomeStyles.iconTextInput}>
           <FontAwesome name="search" size={15} color="#1f2750"/>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen