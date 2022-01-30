/**
 * postcss.config.js
 */

module.exports = (cfg) => {

  // const dev = cfg.env === 'development'
  // const scss = cfg.file.extname === '.scss';

  return {
    // map: dev ? { inline: false } : false,
    // parser:  scss ? 'postcss-scss' : false,

    plugins: [
      require('postcss-import'),
      require('tailwindcss')({ config: './config/tailwind.config.js' }),
      require('postcss-nesting'),
      require('tailwindcss/nesting'),
      require('autoprefixer'),
    ]

  }
}
