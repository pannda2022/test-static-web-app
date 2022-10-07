module.exports = async function (context, req) {
    context.res.get({
        url: `https://testblobstorage2022cxw.blob.core.windows.net/testcontainer/test.json`,
        json: req.body,
        gzip:true,
        headers:{
            'Content-Type': 'application/octet-stream',
            'usertoken': req.headers.usertoken,
        },
    });
}