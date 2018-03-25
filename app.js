var bs = require("browser-sync").create();

bs.watch(['jsts1/*.*', 'jsts1/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
    server: "./jsts1"
});