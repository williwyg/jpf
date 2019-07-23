import * as webpack from "webpack";
import * as path from "path";
import * as FileManagerWebpackPlugin from "filemanager-webpack-plugin";

let currentDir = path.resolve("./");

export function getConfig(mode: "development" | "production" | "none"): webpack.Configuration {
    let filename = "jpf.js";

    if (mode.toLocaleLowerCase() === "production") {
        filename = "jpf.min.js";
    }

    const webpackConfiguration: webpack.Configuration = {
        entry: path.resolve("./src/index.ts"),

        output: {
            library: "jpf",
            auxiliaryComment: "Control suite for JPF",
            libraryTarget: "umd",
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
            new webpack.optimize.OccurrenceOrderPlugin(false),
            new FileManagerWebpackPlugin({
                onStart: {
                    delete: [
                        "./declarations",
                        "C:/Data/TFS/Workspaces/OBP/OBP.Clients.Jpf/node_modules/jpf/**/*"
                    ]
                },
                onEnd: {
                    copy: [
                        {
                            source: "./package.json",
                            destination: "C:/Data/TFS/Workspaces/OBP/OBP.Clients.Jpf/node_modules/jpf/package.json"
                        },
                        {
                            source: "./declarations",
                            destination: "C:/Data/TFS/Workspaces/OBP/OBP.Clients.Jpf/node_modules/jpf/declarations"
                        },
                        {
                            source: "./lib",
                            destination: "C:/Data/TFS/Workspaces/OBP/OBP.Clients.Jpf/node_modules/jpf/lib"
                        },
                        {
                            source: "./package.json",
                            destination: "C:/Data/GitHub/jpf-controls/jpf-controls/node_modules/jpf/package.json"
                        },
                        {
                            source: "./declarations",
                            destination: "C:/Data/GitHub/jpf-controls/jpf-controls/node_modules/jpf/declarations"
                        },
                        {
                            source: "./lib",
                            destination: "C:/Data/GitHub/jpf-controls/jpf-controls/node_modules/jpf/lib"
                        }
                    ]
                }
            })
        ],
        externals: "knockout"
    };

    return webpackConfiguration;

}
