// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Hyp Gamification</Text>
      <Button title="Sales Points" onPress={() => navigation.navigate('SalesPoints')} />
      <Button title="Streak Maintenance" onPress={() => navigation.navigate('StreakMaintenance')} />
      <Button title="Promote on Social Media" onPress={() => navigation.navigate('SocialMediaPromotion')} />
      <Button title="Referral Program" onPress={() => navigation.navigate('ReferralProgram')} />
      <Button title="Leaderboard" onPress={() => navigation.navigate('Leaderboard')} />
      <Button title="Analytics" onPress={() => navigation.navigate('Analytics')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
