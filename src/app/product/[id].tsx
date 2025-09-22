import { router, useLocalSearchParams } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function Product() {
    const { id } = useLocalSearchParams()

    function back() {
        router.back()
    }
    return (
        <View style={styles.container}>
            <Text>Id do produto: {id}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={back}>
                <Text style={styles.label}>Voltar</Text>
            </TouchableOpacity>
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