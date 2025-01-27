import { View, ScrollView } from "react-native";
import Constants from 'expo-constants';

import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from "../components/list";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
    style={{ flex: 1}} 
    className="bg-slate-200"
    showsVerticalScrollIndicator = {false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8}}>
        <Header />
        <Banner />
        <Search />
        
      </View>
      <Section 
        name="Comidas em alta"
        size="text-2xl"
        label="Veja todas"
        action={ () => console.log("Clicou no veja mais")}
      />

      <TrendingFoods />

      <Section 
        name="Famosos no Ifood"
        size="text-xl"
        label="Veja todas"
        action={ () => console.log("Clicou no veja mais")}
      />

      <Restaurants />

      <Section 
        name="Lojas"
        size="text-xl"
        label="Veja todas"
        action={ () => console.log("Clicou no veja mais")}
      />

      <RestaurantVerticalList/>

    </ScrollView>
  );
}
