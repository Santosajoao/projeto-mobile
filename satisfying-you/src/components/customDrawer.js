import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";

import { useNavigation } from "@react-navigation/native";

export default function CustomDrawerContent(props) {
  const userEmail = "usuario@dominio.com";
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "autenticacao/login" }],
    });
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      <View>
        <View style={styles.userInfoSection}>
          <Text style={styles.userEmail}>{userEmail}</Text>
        </View>
        <View style={styles.divider} />
        <DrawerItemList {...props} />
      </View>
      <View style={styles.footer}>
        <DrawerItem
          style={styles.drawerItem}
          label="Sair"
          labelStyle={styles.drawerItemLabel}
          onPress={handleLogout}
          icon={({ size }) => <Icon name="logout" size={size} color="#fff" />}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  userInfoSection: {
    padding: 16,
  },
  userEmail: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "AveriaLibre",
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 8,
  },
  drawerItem: {
    color: "#fff",
    fontFamily: "AveriaLibre",
  },
  drawerItemLabel: {
    color: "#fff",
  },
  footer: {
    marginBottom: 16,
  },
});
