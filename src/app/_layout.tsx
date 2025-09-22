import { MaterialIcons } from "@expo/vector-icons"
import { Tabs } from "expo-router"

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarLabelPosition: "beside-icon",
                tabBarInactiveTintColor: "#CECECE",
                tabBarActiveTintColor: "#000",
            }}
        >
            <Tabs.Screen
                name="Index"
                options={{
                    tabBarLabel: "Sign In",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="home" size={20} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="SignUp"
                options={{
                    tabBarLabel: "person",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="home" size={20} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}