if (typeof(Buffer) !== "undefined") {
    module.exports = Buffer;
} else {
    module.exports = require("./buffer");
}
