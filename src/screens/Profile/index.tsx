import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Auth } from 'aws-amplify';

const ProfileScreen = () => {
  const logout = () => {
    Auth.signOut();
  };

  return (
    <View
      style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Pressable
        onPress={logout}
        style={{
          width: '100%',
          height: 40,
          backgroundColor: '#04afb9',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff' }}>Sair</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
