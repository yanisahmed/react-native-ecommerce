import { View, Text, StyleSheet,SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

export default function Home({navigation}) {
    const [fontsLoaded] = useFonts({
        'Inter-Black': require('../../assets/fonts/Inter-Black.ttf'),
        'Inter-Bold': require('../../assets/fonts/Inter-Bold.ttf'),
        'Inter-ExtraBold': require('../../assets/fonts/Inter-ExtraBold.ttf'),
        'Inter-ExtraLight': require('../../assets/fonts/Inter-ExtraLight.ttf'),
        'Inter-Light': require('../../assets/fonts/Inter-Light.ttf'),
        'Inter-Medium': require('../../assets/fonts/Inter-Medium.ttf'),
        'Inter-Regular': require('../../assets/fonts/Inter-Regular.ttf'),
        'Inter-SemiBold': require('../../assets/fonts/Inter-SemiBold.ttf'),
        'Inter-Thin': require('../../assets/fonts/Inter-Thin.ttf'),
    })
    
    if (!fontsLoaded) {
        return <Text>Font is loading....</Text>;
    }
  
    const handOrderNow = () => {
        navigation.navigate('Details');
    }
  return (
    <View style={styles.container}>
        <View style={styles.appHeader }>
           <Image style={styles.appLogo} source={require('../../assets/images/logo.png')} />
        </View>
        <View style={styles.appBody }>
            <View style={styles.giftBox}>
                <Image style={styles.giftBoxImage} source={require('../../assets/images/giftbox.png')} />
            </View>
            <View>
            <Text style={styles.title}>Non-Contact Deliveries</Text>
            <Text style={styles.description}>Lorem Ipsum familiar ipsum dummy text for the product description.</Text>
        </View>
        <View style={styles.btnContainer}>
            <Pressable style={styles.btn} onPress={handOrderNow}>
                <Text 
                style={{textAlign: 'center', fontFamily: 'Inter-ExtraBold', color: 'white', textTransform: 'uppercase'}}>Order Now</Text></Pressable>
        </View>
        <View style={styles.btnContainer}>
            <Pressable><Text style={{textAlign: 'center',textDecorationLine:'underline', fontFamily: 'Inter-SemiBold', textTransform: 'uppercase'}} >Dismiss</Text></Pressable>
        </View>
        </View>
    
    </View>
  )
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4D4DFF',
    },
    appHeader: {
       
        flex: 1,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    appBody: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    appLogo:{
        width: 100,
        height: 100,
        borderRadius: 100,
        marginLeft: 30,
        marginTop: 30
    },
    giftBox:{
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: '#ededed',
        marginHorizontal: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:60
    },
    giftBoxImage:{
        width: 100,
        height: 100,
        justifyContent:'center',
        alignItems: 'center'
    },
    title:{
        fontWeight: 'bold',
        fontFamily: 'Inter-Bold',
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center'
    },
    description:{
        textAlign: 'center',
        fontFamily: 'Inter-Regular',
        marginBottom: 20
    },
    btnContainer:{
        alignItems: 'center',
    },
    btn:{
        width: 300,
        paddingVertical:12,
        paddingHorizontal: 32,
        backgroundColor: 'green',
        borderRadius: 15,
        marginBottom: 10
    }
  })