import { Stack } from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="cards/InfoDetails"
        options={{ headerTitle: "Info detaljer" }}
      />
      <Stack.Screen
        name="cards/ActivityDetails"
        options={{ headerTitle: "Aktivitets detaljer" }}
      />
      <Stack.Screen
        name="cards/MessageDetails"
        options={{ headerTitle: "Besked detaljer" }}
      />
      <Stack.Screen
        name="cards/BenefitDetails"
        options={{ headerTitle: "Fordele detaljer" }}
      />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      <Stack.Screen
        name="modals/Membership"
        options={{ presentation: "modal", headerTitle: "Medlemskab" }}
      />
      <Stack.Screen
        name="modals/Work"
        options={{ presentation: "modal", headerTitle: "Arbejde" }}
      />
      <Stack.Screen
        name="modals/Education"
        options={{ presentation: "modal", headerTitle: "Uddannelse" }}
      />
      <Stack.Screen
        name="modals/NewMessage"
        options={{ presentation: "modal", headerTitle: "Ny Besked" }}
      />
    </Stack>
  );
}
