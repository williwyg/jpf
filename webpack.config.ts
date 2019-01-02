import * as webpack from "webpack";
import * as path from "path";

let currentDir = path.resolve("./");

export default webpack.Configuration = {
    entry: currentDir + "/Jpf/FrameworkElement.ts",

    output: {
        path: currentDir + "/dist",
        filename: "jpf.js"
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

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(false)
    ]
};

