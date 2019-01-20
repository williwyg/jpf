import * as path from "path";
import * as webpack from "webpack";
import listdirs = require("listdirs");
import * as HtmlWebpackPlugin from "html-webpack-plugin";

export function getConfig() {

    const examplesFolder = path.resolve("./", "examples");


    const webpackConfiguration: webpack.Configuration = {
        entry: {},

        output: {
            path: path.resolve(examplesFolder, "[name]"),
            filename: "[name].js"
        },

        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".js", "min.js"]
        },

        module: {
            rules: [
                // All files with a '.ts' extension will be handled by 'ts-loader'.
                {
                    test: /\.ts$/,
                    use: "ts-loader"
                }
            ]
        },

        plugins: []
    };


    listdirs(
        examplesFolder,
        (err, directories: Array<string>) => {
            for (let directory of directories) {
                const targetFolder = path.resolve(examplesFolder, directory);

                webpackConfiguration.entry[directory] = path.resolve(examplesFolder, directory, "example.ts");

                webpackConfiguration.plugins.push(new HtmlWebpackPlugin({
                    filename: path.resolve(targetFolder, "index.html"),
                    inject: true
                }));

            }
        });

    return webpackConfiguration;
}

