import React, { useCallback, useMemo, useRef } from 'react';
import { Text,SafeAreaView,View,ImageBackground, Switch,Button } from 'react-native'
import { useState } from 'react';
import { SFSymbol } from "react-native-sfsymbols";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
export default function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <>
    <ImageBackground source={{uri:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"}} style={{width: '100%', height: '100%'}}>
    <SafeAreaView>
      <View style={{padding:10}}>
        <Text style={{color:'white',fontSize:20}}>Settings</Text>
      </View>
      <View style={{padding:10,backgroundColor:'white',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <Switch
        trackColor={{false: '#fffff', true: 'black'}}
        thumbColor={isEnabled ? 'white' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
            <SFSymbol
              name="link"
              weight="semibold"
              scale="large"
              color="black"
              size={16}
              resizeMode="center"
              multicolor={false}
              style={{ width: 32, height: 32 }}
            />
      </View>
      <View style={{padding:10,backgroundColor:'white',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <Switch
        trackColor={{false: '#fffff', true: 'black'}}
        thumbColor={isEnabled ? 'white' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
            <SFSymbol
              name="link"
              weight="semibold"
              scale="large"
              color="black"
              size={16}
              resizeMode="center"
              multicolor={false}
              style={{ width: 32, height: 32 }}
            />
      </View>
      <View style={{padding:10,backgroundColor:'white',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <Switch
        trackColor={{false: '#fffff', true: 'black'}}
        thumbColor={isEnabled ? 'white' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
            <SFSymbol
              name="person"
              weight="semibold"
              scale="large"
              color="black"
              size={16}
              resizeMode="center"
              multicolor={false}
              style={{ width: 32, height: 32 }}
            />
      </View>


    <View style={{borderWidth:1,borderColor:'black',marginTop:10}}/>
    <View style={{padding:10,backgroundColor:'white',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <Switch
        trackColor={{false: '#fffff', true: 'black'}}
        thumbColor={isEnabled ? 'white' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
            <SFSymbol
              name="creditcard"
              weight="semibold"
              scale="large"
              color="black"
              size={16}
              resizeMode="center"
              multicolor={false}
              style={{ width: 32, height: 32 }}
            />
      </View>


      <View style={{padding:10,backgroundColor:'white',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <Switch
        trackColor={{false: '#fffff', true: 'black'}}
        thumbColor={isEnabled ? 'white' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
            <SFSymbol
              name="creditcard"
              weight="semibold"
              scale="large"
              color="black"
              size={16}
              resizeMode="center"
              multicolor={false}
              style={{ width: 32, height: 32 }}
            />
      </View>


      <View style={{padding:10,backgroundColor:'white',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <Switch
        trackColor={{false: '#fffff', true: 'black'}}
        thumbColor={isEnabled ? 'white' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
           <SFSymbol
              name="creditcard"
              weight="semibold"
              scale="large"
              color="black"
              size={16}
              resizeMode="center"
              multicolor={false}
              style={{ width: 32, height: 32 }}
            />
      </View>
      <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        />

    </SafeAreaView>
    </ImageBackground>
    <BottomSheetModalProvider>
      <View style={{zIndex:1000}} >
      
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View >
            <ImageBackground source={{uri:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"}} style={{width: '100%', height: '100%'}}>
            <Text>Awesome 🎉</Text>
            </ImageBackground>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
    </>
  )
}
