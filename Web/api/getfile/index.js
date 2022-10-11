module.exports = async function (context, req) {
    context.res.download("https://testblobstorage2022cxw.blob.core.windows.net/testcontainer/test.json");
}