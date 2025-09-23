import { StyleSheet, Text, View } from "react-native"

export default function Order() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>itens do Pedido</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
})