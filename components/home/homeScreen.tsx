import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { HomeStyles } from './homeStyleScreen'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { Directions } from 'react-native-gesture-handler';

const HomeScreen = () => {
  return (
    <SafeAreaView style={HomeStyles.container}>
      <ScrollView style={HomeStyles.containerMargin}>
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
        <View style={HomeStyles.containerContent}>
          <View style={HomeStyles.containFirstDirection}>
            <View style={HomeStyles.horizontalDirection}/>
          </View>
          <View style={HomeStyles.containerTitleContent}>
            <Text style={HomeStyles.titleContent}>How it works</Text>
          </View>
          <View style={HomeStyles.horizontalDirection}/>
          <ScrollView horizontal={true}>
            <View style={HomeStyles.containStepByStep}>
              <View style={HomeStyles.stepByStep}>
                <Image style={HomeStyles.stepImage} source={require('../../assets/images/Step/StepByStep.png')}/>
                <View style={HomeStyles.contaniTextStep}>
                  <Text style={HomeStyles.textStep}>Step 1</Text>
                </View>
              </View>
              <View style={HomeStyles.containContentStep}>
                <Text style={HomeStyles.contentStep}>Enter your location. Type in your</Text>
                <Text style={HomeStyles.contentStep}>address, or pin your location by</Text>
                <Text style={HomeStyles.contentStep}>enabling location services.</Text>
              </View>
            </View>
            <View style={HomeStyles.verticalDirection}/>
            <View style={HomeStyles.containStepByStep}>
              <View style={HomeStyles.stepByStep}>
                <Image style={HomeStyles.stepImage} source={require('../../assets/images/Step/StepByStep.png')}/>
                <View style={HomeStyles.contaniTextStep}>
                  <Text style={HomeStyles.textStep}>Step 2</Text>
                </View>
              </View>
              <View style={HomeStyles.containContentStep}>
                <Text style={HomeStyles.contentStep}>Enter your location. Type in your</Text>
                <Text style={HomeStyles.contentStep}>address, or pin your location by</Text>
                <Text style={HomeStyles.contentStep}>enabling location services.</Text>
              </View>
            </View>
            <View style={HomeStyles.verticalDirection}/>
            <View style={HomeStyles.containStepByStep}>
              <View style={HomeStyles.stepByStep}>
                <Image style={HomeStyles.stepImage} source={require('../../assets/images/Step/StepByStep.png')}/>
                <View style={HomeStyles.contaniTextStep}>
                  <Text style={HomeStyles.textStep}>Step 3</Text>
                </View>
              </View>
              <View style={HomeStyles.containContentStep}>
                <Text style={HomeStyles.contentStep}>Enter your location. Type in your</Text>
                <Text style={HomeStyles.contentStep}>address, or pin your location by</Text>
                <Text style={HomeStyles.contentStep}>enabling location services.</Text>
              </View>
            </View>
          </ScrollView>
          <View style={HomeStyles.horizontalDirection}/>
          <View style={HomeStyles.containerTitleContent}>
            <Text style={HomeStyles.titleContent}>Work with QuickBite</Text>
          </View>
          <View style={HomeStyles.horizontalDirection}/>
          <View style={HomeStyles.containItem}>
            <Image style={HomeStyles.itemImageContain} source={require('../../assets/images/Step/rider.png')}/>
            <View style={HomeStyles.titleItemContain}>
              <Text style={HomeStyles.titleItem}>As a rider</Text>
            </View>
            <View style={HomeStyles.contenTitleItemContain}>
              <Text style={HomeStyles.contentTitleItem}>Earn money by delivering food</Text>
              <Text style={HomeStyles.contentTitleItem}>from restaurants. Everything you need</Text>
              <Text style={HomeStyles.contentTitleItem}>are the skill and a bike.</Text>
            </View>
            <TouchableOpacity>
              <View style={HomeStyles.buttonItemContain}>
                <Text style={HomeStyles.textButtonItem}>Ride with us</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={HomeStyles.horizontalDirectionCotainItem}>
          <View style={HomeStyles.horizontalDirection}/>
        </View>
        <View style={HomeStyles.containItem}>
          <Image style={HomeStyles.itemImageContain} source={require('../../assets/images/Step/restaurant.png')}/>
          <View style={HomeStyles.titleItemContain}>
            <Text style={HomeStyles.titleItem}>As a partner</Text>
          </View>
          <View style={HomeStyles.contenTitleItemContain}>
            <Text style={HomeStyles.contentTitleItem}>QuickBike helps restaurants</Text>
            <Text style={HomeStyles.contentTitleItem}>grow with online ordering, loyalty</Text>
            <Text style={HomeStyles.contentTitleItem}>programs, and more.</Text>
          </View>
          <TouchableOpacity>
            <View style={HomeStyles.buttonItemContain}>
              <Text style={HomeStyles.textButtonItem}>Partner with us</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.horizontalDirectionCotainItem}>
          <View style={HomeStyles.horizontalDirection}/>
        </View>
        <View style={HomeStyles.containItem}>
          <Image style={HomeStyles.itemImageContain} source={require('../../assets/images/Step/orderStep.png')}/>
          <View style={HomeStyles.titleItemContain}>
            <Text style={HomeStyles.titleItem}>As a colleague</Text>
          </View>
          <View style={HomeStyles.contenTitleItemContain}>
            <Text style={HomeStyles.contentTitleItem}>Be part of a team that's building</Text>
            <Text style={HomeStyles.contentTitleItem}>a top-notch delivery service.</Text>
          </View>
          <TouchableOpacity>
            <View style={HomeStyles.buttonItemContain}>
              <Text style={HomeStyles.textButtonItem}>Work with us</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.horizontalDirectionCotainItem}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen