import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    menuItems: {
        marginTop: "20",
        marginLeft:"20",
        marginRight: "20"
    },
    icon: {
        color: "white"
    },
    menuText: {
        color:"white",
        fontSize: 16,
        fontWeight:"bold",
        marginLeft: 15,
        textTransform:"uppercase"
    },
    menuRow:{
        marginTop: 15,
        marginBotton: 15,
        flexGrow:1,
        flexDirection:"row",
        
        // flex:1,
        display:"flex",
        flexDirection: "row",
        alignItems:"center",
        
    },
    menuTextBox: {
        flexGrow: 1,
    },
    arrowIcon: {
        color: "#4D4D4E",
        

    },
    subTitle: {
        color: "grey",
        fontSize: 20,
        marginLeft: 15,
    },

});

export default styles;