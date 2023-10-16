module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer")({
      browsers: ["last 2 versions", "ie 6-8"],
    }),
    // require("cssnano"),
  ],
};
