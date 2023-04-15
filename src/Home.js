// import { Text,SafeAreaView,View,TextInput } from 'react-native'
// import {FlatList } from 'react-native-gesture-handler'
// import axios from 'axios'
// import { useQuery } from 'react-query'

// export default function Home() {
//   const fetchUsers = async () => {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users')
//     const data = await response.data
//     return data
//   }
//   const usePosts = () => useQuery('posts', fetchUsers);
//   const { data, isLoading, isSuccess } = usePosts();
//   console.log(data);
//   return (
//     <SafeAreaView>
//       <TextInput placeholder="Search" style={{borderWidth:1,borderColor:'black',borderRadius:10,margin:10,padding:10}} />
//     <FlatList 
//       data={data}
//       renderItem={({item}) => (
//         <>
//         <View style={{textAlign:'center'}}>
//         <Text style={{textAlign:'center'}}>{item.name}</Text>
//           <Text>{item.street}</Text>
//         </View>
//         </>    
//       )
//     }
//       keyExtractor={item => item.id}
//     />
   
//     </SafeAreaView>
//   )
// }
import { Text, View, TextInput, Button, Alert, SafeAreaView, ImageBackground } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { LineChart, Grid } from 'react-native-svg-charts'

export default function Home() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  });
  const onSubmit = data => Alert.alert('Form Data', JSON.stringify(data));
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

  return (
    <ImageBackground source={{uri:"https://cdn.dribbble.com/userupload/5577165/file/original-f1d1bec21bf77be48ca004b207f147f4.png?compress=1&resize=752x"}} style={{width: '100%', height: '100%'}}>
    <SafeAreaView>
      {/* <View style={{borderWidth:1,borderRadius:10,borderColor:'white'}}>
      <LineChart
                style={{ height: 200,padding:10 }}
                data={data}
                svg={{ stroke: 'rgb(255, 255, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
            </LineChart>
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
            <Text style={{color:"white",fontWeight:500,fontSize:10,textAlign:'center',backgroundColor:'#212121',padding:10,borderRadius:50,fontWeight:'600'}}>1W</Text>
            <Text style={{color:"white",fontWeight:500,fontSize:10,textAlign:'center',backgroundColor:'#212121',padding:10,borderRadius:100,fontWeight:'600'}}>1M</Text>
            <Text style={{color:"white",fontWeight:500,fontSize:10,textAlign:'center',backgroundColor:'#212121',padding:10,borderRadius:10,fontWeight:'600'}}>All time</Text>

            </View>
      </View> */}

    <Text style={{color:"white",fontWeight:500,fontSize:40,textAlign:'center'}}>Enter your details</Text>
    <View style={{margin:20}}>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          style={{borderWidth:1,borderColor:'white',borderRadius:10,margin:10,padding:10,color:"white",fontWeight:'500'}}
          onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="First Name"
          />
        )}
        name="firstName"
      />
      {/* {errors.firstName && Alert.alert('First name is required')} */}

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            style={{borderWidth:1,borderColor:'white',borderRadius:10,margin:10,padding:10,color:"white",fontWeight:'500'}}
            value={value}
            placeholder="Last Name"
          />
        )}
        name="lastName"
      />
    <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            style={{borderWidth:1,borderColor:'white',borderRadius:10,margin:10,padding:10,color:"white",fontWeight:'500'}}
            value={value}
            placeholder="Email"
          />
        )}
        name="email"
      />
          <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
                          <TextInput
            onBlur={onBlur}
            placeholder="Password"
            onChangeText={onChange}
            style={{borderWidth:1,borderColor:'white',borderRadius:10,margin:10,padding:10,color:"white",fontWeight:'500'}}
            value={value}
            secureTextEntry={true}
          />

        )}
        name="password"
      />
      <Button  title="Submit" style={{color:"white"}} onPress={handleSubmit(onSubmit)} />
    </View>
    </SafeAreaView>
    </ImageBackground>

  );
}
