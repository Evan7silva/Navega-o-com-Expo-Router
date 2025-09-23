import { router } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function SignUp() {
    function back() {
        router.back()
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={back}>
                <Text style={styles.title}>Voltar</Text>
            </TouchableOpacity>
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
        color: "#FFF"
    },
     button: {
        paddingHorizontal: 32,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: "#000"
    },
})