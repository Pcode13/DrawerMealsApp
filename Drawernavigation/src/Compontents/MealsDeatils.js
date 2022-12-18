import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function MealsDeatils({duration,complexity,affordability}){
  return (
   
<View style={styles.details}>
              <Text style={styles.detailItem}>{duration}m</Text>
              <Text style={styles.detailItem}>{complexity}</Text>
              <Text style={styles.detailItem}>{affordability}</Text>
            </View>

  )
}

export default MealsDeatils

const styles = StyleSheet.create({


    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
      },
      detailItem: {
        marginHorizontal: 4,
        fontSize: 14,
      },
})