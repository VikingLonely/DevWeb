exports.post = (req, res, next) => {
    res.status(200).send("Req Post ok");
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    console.log(id);
    res.status(200).send("Req PUT OK");

};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    console.log(id);
    res.status(200).send("Req DELETE OK");
};