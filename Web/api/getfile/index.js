module.exports = async function (context, req) {
    request.get({
        url: `${CONFIG.api.speechMark}/file/download?filePath=${req.body.filePath}`,
        json: req.body,
        gzip:true,
        headers:{
            'Content-Type': 'application/octet-stream',
            'usertoken': req.headers.usertoken,
        },
    }).on('response', function(response) {
        console.log(response.statusCode) // 200
        console.log(response.headers)
        // console.log(response.headers['content-type']) // 'image/png'
        // res.headers['content-type'] = response.headers['content-type']
        this.pipe(res)
      });
}