const express = require('express');

const app = express();
const port = 3000;

app.post('', express.raw({ type: 'application/pdf'}), async(req,res) => {

    const options = {};
    if(req.query.printer) {
        options.printer = req.query.printer;
    }
    const tmpFilePath = path.join(`./tml/${Math.random().toString(36).substr(7)}.pdf`);
    fs.writeFileSync(tmpFilePath, req.body, 'binary');
    await ptp.print(tmpFilePath, options);
    fs.unlinkSync(tmpFilepath);
    
    res.status(204);
    res.send();
});

app.listen(port, () => {
    console.log(`PDF Printing Service Listing On Port ${port}`);
});