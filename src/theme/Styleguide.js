const darkGray = "#999999";
const gray = "#CCCCCC";
const tiny = 8;
const small = 16;
const borderRadius = tiny;
const shadow = {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.18,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: "white"
};

const styleGuide = {
    palette: {
        black: "black",
        white: "white",
        transparent: "transparent",
        darkGray,
        gray,
        lightGray: "#F3F3F3"
    },
    typography: {
        body: {
            fontSize: 17,
            lineHeight: 20,
            fontFamily: "Lato-Regular"
        },
        callout: {
            fontSize: 16,
            lineHeight: 20,
            fontFamily: "Lato-Regular"
        },
        caption: {
            fontSize: 11,
            lineHeight: 13,
            fontFamily: "Lato-Regular"
        },
        footnote: {
            fontSize: 13,
            lineHeight: 18,
            fontFamily: "Lato-Regular",
            color: darkGray
        },
        headline: {
            fontSize: 17,
            lineHeight: 22,
            fontFamily: "ProximaNova-ExtraBold"
        },
        subhead: {
            fontSize: 15,
            lineHeight: 20,
            fontFamily: "ProximaNova-ExtraBold"
        },
        title1: {
            fontSize: 34,
            lineHeight: 41,
            fontFamily: "ProximaNova-ExtraBold"
        },
        title2: {
            fontSize: 28,
            lineHeight: 34,
            fontFamily: "ProximaNova-ExtraBold"
        },
        title3: {
            fontSize: 22,
            lineHeight: 26,
            fontFamily: "ProximaNova-ExtraBold"
        }
    },
    spacing: {
        tiny,
        small,
        base: 24,
        large: 48,
        xLarge: 64
    },
    styles: {
        barHeight: {
            height: 45
        },
        shadow,
        borderRadius: {
            borderRadius
        },
        separator: {
            borderBottomWidth: 1,
            borderColor: "#ebebeb"
        },
        button: {
            height: 45,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: small,
            padding: tiny,
            borderRadius
        },
        buttonIcon: {
            marginRight: tiny
        }
    }
};

export default styleGuide;