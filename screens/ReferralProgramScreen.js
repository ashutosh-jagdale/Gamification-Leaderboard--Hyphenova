// screens/ReferralProgramScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReferralProgramScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Referral Program</Text>
      {/* Add your referral program logic here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ReferralProgramScreen;
