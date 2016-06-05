var src = "./src";
var dest = "./dist";

module.exports = {
    src: src,
    dest: dest,
    sass: {
        src: [
            src + "/sass/default.scss"
        ],
        name: "drfront-responsive.scss",
        dest: dest + "/css"
    }
}
