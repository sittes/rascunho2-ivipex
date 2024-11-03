import React from 'react'

import { View, Text,StyleSheet } from 'react-native';

export  function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screns</Text>
        </View>
    )   
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0A011a',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: 'blue'
    }
})






































// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Home = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Home Screen</Text>
//     </View>
//   )
// }

// export default Home

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })