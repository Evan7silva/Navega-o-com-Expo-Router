import { Link } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function Index() {
    return (
        <View style={styles.container}>
            <Link href="/sign-up" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.label}>Criar Conta</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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