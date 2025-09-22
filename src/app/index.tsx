import { DrawerToggleButton } from "@react-navigation/drawer"
import { router } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
export default function Index() {
    function signUp() {
        router.navigate("/sign-up")
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <DrawerToggleButton/>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={signUp}>
                <Text style={styles.label}>Criar Conta</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 32,
        gap: 32,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFF"
    },
    button: {
        paddingHorizontal: 32,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: "#000"
    },
    header: {
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%",
    }
})