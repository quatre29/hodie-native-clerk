import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Layout } from "@ui-kitten/components";

export const Settings = () => {
  return (
    <Layout level="2" style={style.container}>
      <View className="mx-4 mt-20">
        <Text>homeSettings</Text>
      </View>
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
