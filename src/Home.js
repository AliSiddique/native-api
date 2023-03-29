import { Text,SafeAreaView } from 'react-native'
import { ScrollView,Switch } from 'react-native-gesture-handler'

export default function Home() {
  return (
    <ScrollView>
    <SafeAreaView>
    <Text>Home</Text>
    <Text>Home</Text>
    <Text>Home</Text>
    <Text>Home</Text>
    <Text>Home</Text>
    <Text>Home</Text>
    <Switch
        trackColor={{false: 'white', true: 'white'}}
        thumbColor={'blue'}
        ios_backgroundColor="white"
      />
    </SafeAreaView>
    </ScrollView>
  )
}
