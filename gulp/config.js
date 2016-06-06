var src = "./src";
var dest = "./dist";

module.exports = {
    src: src,
    dest: dest,
    sass: {
    	default: src + "/sass/default.scss",
        src: [
            src + "/sass/**/*.s+(a|c)ss"
        ],
        name: "drfront-responsive.scss",
        dest: dest + "/css"
    }
}
