import {
  StyleSheet,
  Appearance,
  Platform,
  ScrollView,
  SafeAreaView,
  FlatList,
  View,
  Text,
  Image,
} from "react-native";
import { Colors } from "@/constants/theme";
import { MENU_ITEMS } from "@/constants/menuItems";
import MENU_IMAGES from "@/constants/menuImages";

const MenuScreen = () => {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const styles = createStyles(theme, colorScheme);

  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  return (
    <Container>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={}
        renderItem={({ item }) => (
          <View>
            <View>
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
            </View>
            <Image source={MENU_IMAGES[item.id - 1]} />
          </View>
        )}
      />
    </Container>
  );
};

export default MenuScreen;

function createStyles(theme, colorScheme) {
  return StyleSheet.create({});
}
