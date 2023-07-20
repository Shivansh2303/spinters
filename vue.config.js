const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const GoogleFontsPlugin = require("google-fonts-webpack-plugin")
module.exports = {
    chainWebpack: config => {
        plugins: [
            new GoogleFontsPlugin({
                fonts: [
                    { family: "Source Sans Pro" },
                { family: "Manrope",variants: [ "400", "500","700" ] },
                { family: "Poppins", variants: [ "400", "500","700" ] }
                ]
            })
        ]
     }
 } 