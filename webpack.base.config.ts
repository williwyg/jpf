import * as webpack from "webpack";
import * as path from "path";
import * as dtsWebpackPluging from "dts-bundle-webpack";

let currentDir = path.resolve("./");

export function getConfig(forBrowserUse: boolean, mode: string): webpack.Configuration {
    let entry: Array<string> | string;
    let outputPath: string;
    if (forBrowserUse) {
        entry = ["babel-polyfill", path.resolve("./src/FrameworkElement.ts")];
        outputPath = "dist";
    } else {
        entry = path.resolve("./src/FrameworkElement.ts");
        outputPath = "lib";
    }

    let filename = "jpf.js";
    if (mode.toLocaleLowerCase() === "production") {
        filename = "jpf.min.js";
    }

    const webpackConfiguration = webpack.Configuration = {
        entry: entry,

        output: {
            path: path.resolve(currentDir, outputPath),
            filename: filename
        },

        mode: mode,

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

        plugins: [
            new webpack.optimize.OccurrenceOrderPlugin(false),
            new dtsWebpackPluging({
                name: "jpf",
                main: path.resolve("./declarations/FrameworkElement.d.ts"),
                out: path.resolve("./index.d.ts")
            })
        ]
    };

    return webpackConfiguration;

}
