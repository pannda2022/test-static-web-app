var m_https = require("https");
    
module.exports = async function (context, req) {
    //var url = "http://localhost:60430/" + req.query.name;
    var url = "https://testblobstorage2022cxw2.blob.core.windows.net/testcontainer/" + req.query.name;
    var type = "";
    var resData = "";
    let synchronous_post = function (url, params) {
        return new Promise(function (resolve, reject) {
            m_https.get(url, (res)=>{
                type = res.headers["content-type"]
                res.setEncoding("binary");
                res.on("data", (data) => {
                    resData+=data;
                }).on("end", () => {
                    resolve();
                });
            });
        });
    }
    await synchronous_post(url);

    context.res.set("Content-Type",type);
    context.res.send(new Buffer(resData, 'binary'));
}
