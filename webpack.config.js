import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import TerserPlugin from "terser-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: path.join(__dirname, "src/main.jsx"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.min.js",
    assetModuleFilename: "[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
        options: {
          limit: 10000,
          name: "assets/[name].[ext]",
        },
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          presets: [
            "@babel/preset-env",
            ["@babel/preset-react", { runtime: "automatic" }],
          ],
        },
        loader: "babel-loader",
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
