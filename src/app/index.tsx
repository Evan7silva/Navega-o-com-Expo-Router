import { Link, router } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function Index() {
    function signUp() {
        router.navigate("/sign-up")
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={signUp}>
                <Text style={styles.label}>Criar Conta</Text>
            </TouchableOpacity>
            <Link href={{pathname: "/sign-up", params: { name: "Evan", id: "7" }}}>Enviar parâmentro</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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