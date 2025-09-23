import { router } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
export default function Index() {
    function signUp() {
        router.navigate("/sign-up")
    }

    function signIn() {
        router.navigate("/(drawer)/(tabs)")
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={signIn}>
                <Text style={styles.label}>Entrar</Text>
            </TouchableOpacity>
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
        justifyContent: "center",
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

})