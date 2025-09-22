import { Redirect, router, useLocalSearchParams } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function Home() {

    const { id } = useLocalSearchParams()

    if (!id) {
        return <Redirect href="/"/>
    }
    function back() {
        router.back()
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Home - {id}</Text>
            <TouchableOpacity onPress={back}>
                <Text style={styles.back}>Voltar</Text>
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
        fontSize: 22,
        fontWeight: "bold",

    },
    back: {
        fontSize: 32
    }
})