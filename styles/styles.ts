import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fields: {
        borderWidth: 1,borderRadius: 10,
        marginInline: 20, marginBlock: 5,
        backgroundColor:"white"
    },
    label: {
        fontSize: 15,
        marginBlock: 10,marginLeft:25
    },
    button:{
        color: "white",backgroundColor: "#FF670E",
        fontWeight: "bold",fontSize:15,
        marginInline: "auto",marginBlock:10,
        paddingBlock: 10,paddingInline:20,
        borderRadius:5
    },
    heading:
    {
        textAlign: "center", fontSize: 40,
        fontFamily: "AuralyessFreeTrial-RpMrE", marginBlock: 5,paddingBottom:10
    },
    dropdown:
    {
        position: "relative",marginInline: 22,zIndex:10,
        borderWidth: 1, borderRadius: 10, borderColor: "#291010",backgroundColor:"white",
        borderTopWidth: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0,
    },
})

