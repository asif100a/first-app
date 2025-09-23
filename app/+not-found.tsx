import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link, Stack } from "expo-router";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ThemedView>
        <ThemedText type="title">This screen {"doesn't"} exist.</ThemedText>
        <Link href={"/"} style={{ padding: 3, color: "white"}}>Go to Home Screen</Link>
      </ThemedView>
    </>
  );
};

export default NotFoundScreen;
