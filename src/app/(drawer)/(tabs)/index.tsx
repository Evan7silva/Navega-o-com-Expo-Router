import { router } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
export default function Products() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de produtos</Text>
            <TouchableOpacity
                onPress={() => router.navigate("/product/7")}
                style={styles.button}
                >
                <Text style={styles.textButton}>Abrir produto</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
    textButton: {
        color: "#FFF"
    },
    button: {
        paddingHorizontal: 32,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: "#000"
    },
})