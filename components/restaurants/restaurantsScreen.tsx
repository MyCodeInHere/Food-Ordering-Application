import { Image, View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RestaurantsStyle } from './restaurantsStyleScreen'
import { FontAwesome } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Categories } from '../data/localData';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const RestaurantsScreen = () => {
  const navigation = useNavigation();
  const [currentSelected, setCurrentSelected] = useState(0);

  const items = ({item} : {item: Category}) => {
    return (
        <View style={RestaurantsStyle.itemContainer}>
            <View style={RestaurantsStyle.insideItemContainer}>
                <Image style={RestaurantsStyle.imageItem} source={item.image}/>
                <View style={RestaurantsStyle.timeItemContainer}>
                    <Text style={RestaurantsStyle.timeItem}>{item.time}</Text>
                </View>
                <View style={RestaurantsStyle.nameItemContain}>
                    <Text style={RestaurantsStyle.nameItem}>{item.name}</Text>
                </View>
                <View style={RestaurantsStyle.typeItemContain}>
                    <Text style={RestaurantsStyle.typeItem}>{item.type}</Text>
                </View>
                <View style={RestaurantsStyle.shipContain}>
                    <View style={RestaurantsStyle.carContain}>
                        <MaterialIcons name="local-shipping" style={RestaurantsStyle.car} />
                    </View>
                    <View style={RestaurantsStyle.priceContain}>
                        {item.price === 0 ? ( <Text style={RestaurantsStyle.price}>free delivery</Text>)
                        : ( <Text style={RestaurantsStyle.price}>${item.price}</Text>)}
                    </View>
                    <View style={RestaurantsStyle.unitContain}>
                        <Text style={RestaurantsStyle.unit}>$$$</Text>
                        <Text style={RestaurantsStyle.unitBlur}>$$</Text>
                    </View>
                </View>
            </View>
        </View>
    );
  };

  const renderNewCategories = ({ item, index }:{ item: Category, index: number }) => {
    const isLastItem = index === Categories.length - 1;
    if (item.isNew){
        if (isLastItem) {
            return (
            <TouchableOpacity onPress={() => setCurrentSelected(index)}>
               {items({ item })}
            </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity onPress={() => setCurrentSelected(index)}>
                    <View style={RestaurantsStyle.outSideItemContainer}>
                        {items({ item })}
                    </View>
                </TouchableOpacity>
            );
        }
    } else {
        return null;
    }
  }

  const renderPopularCategories = ({ item, index }:{ item: Category, index: number }) => {
    const isLastItem = index === Categories.length - 1;
    if (item.popular){
        if (isLastItem) {
            return (
            <TouchableOpacity onPress={() => setCurrentSelected(index)}>
               {items({ item })}
            </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity onPress={() => setCurrentSelected(index)}>
                    <View style={RestaurantsStyle.outSideItemContainer}>
                        {items({ item })}
                    </View>
                </TouchableOpacity>
            );
        }
    } else {
        return null;
    }
  }

  const renderFreeDeliveryCategories = ({ item, index }:{ item: Category, index: number }) => {
    const isLastItem = index === Categories.length - 1;
    if (item.price === 0){
        if (isLastItem) {
            return (
            <TouchableOpacity onPress={() => setCurrentSelected(index)}>
               {items({ item })}
            </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity onPress={() => setCurrentSelected(index)}>
                    <View style={RestaurantsStyle.outSideItemContainer}>
                        {items({ item })}
                    </View>
                </TouchableOpacity>
            );
        }
    } else {
        return null;
    }
  }

  return (
    <SafeAreaView style={RestaurantsStyle.container}>
        <ScrollView style={RestaurantsStyle.containerMargin} showsVerticalScrollIndicator={false}>
            <View style={RestaurantsStyle.header}>
            <View style={RestaurantsStyle.flexTextHeader}>
                <Text style={RestaurantsStyle.textHeader}>QUICK</Text>
                <Text style={RestaurantsStyle.textHeader}>BITE</Text>
            </View>
            <TouchableOpacity>
                <View style={RestaurantsStyle.flexIconHeader}>
                <FontAwesome5 name="shopping-cart" style={RestaurantsStyle.iconStyle}/>
                </View>
            </TouchableOpacity>
            </View>
            <View style={RestaurantsStyle.containTitleImage}>
                <Image source={require('../../assets/images/Restaurants/titleImage.png')}/>
            </View>
            <View style={RestaurantsStyle.containeFirstHorizontalDirection}>
                 <View style={RestaurantsStyle.horizontalDirection}/>
            </View>
            <View style={RestaurantsStyle.containerTitleContent}>
                <Text style={RestaurantsStyle.titleContent}>New on QuickBite</Text>
            </View>
            <View style={RestaurantsStyle.horizontalDirection}/>
            <View style={RestaurantsStyle.horizontalItemContain}>
                <FlatList
                    style={RestaurantsStyle.quickBiteScrollView}
                    horizontal={true}
                    data={Categories}
                    renderItem={renderNewCategories}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={RestaurantsStyle.horizontalDirection}/>
            <View style={RestaurantsStyle.containerTitleContent}>
                <Text style={RestaurantsStyle.titleContent}>Popular right now</Text>
            </View>
            <View style={RestaurantsStyle.horizontalDirection}/>
            <View style={RestaurantsStyle.horizontalItemContain}>
                <FlatList
                    style={RestaurantsStyle.quickBiteScrollView}
                    horizontal={true}
                    data={Categories}
                    renderItem={renderPopularCategories}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={RestaurantsStyle.horizontalDirection}/>
            <View style={RestaurantsStyle.containerTitleContent}>
                <Text style={RestaurantsStyle.titleContent}>Free delivery</Text>
            </View>
            <View style={RestaurantsStyle.horizontalDirection}/>
            <View style={RestaurantsStyle.horizontalItemContain}>
                <FlatList
                    style={RestaurantsStyle.quickBiteScrollView}
                    horizontal={true}
                    data={Categories}
                    renderItem={renderFreeDeliveryCategories}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default RestaurantsScreen