//consfirguração do plugin de imagens do next
const withImages = require('next-images');
module.exports = withImages({
    //possibilitar a importação de imagems com o import
    esModule: true,
});