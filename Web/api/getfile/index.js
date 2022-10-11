module.exports = async function (context, req) {
    context.res.send(req.query.name);
}
