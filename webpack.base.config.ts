import * as webpack from "webpack";
import * as path from "path";

let currentDir = path.resolve("./");

export function getConfig(mode: string): webpack.Configuration {
    let filename = "jpf.js";
    if (mode.toLocaleLowerCase() === "production") {
        filename = "jpf.min.js";
    }

    const webpackConfiguration = webpack.Configuration = {
        entry: path.resolve("./src/index.ts"),

        output: {
            path: path.resolve(currentDir, "lib"),
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
            new webpack.optimize.OccurrenceOrderPlugin(false)
        ]
    };

    return webpackConfiguration;

}
