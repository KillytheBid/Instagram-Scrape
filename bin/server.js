const app = require('../app.js');
const config = require('../config/config.js');
const PORT = config.port;

app.listen(PORT, (err) => {
    if (err) {
        console.log({ err: err });
    }

    console.log(`Server started on http://localhost:${PORT}`);
});
