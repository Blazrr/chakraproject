import { extendTheme } from "@chakra-ui/react"

const theme = {
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true,      
    },
    components: {
        Modal: {
          baseStyle: {
            dialogContainer: {
              "@supports(height: -webkit-fill-available)": {},
            },
          },
        },
      },
   
}
export default extendTheme(theme)

