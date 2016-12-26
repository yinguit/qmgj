module.exports = function(app) {
    app.get('/getSlideInfo', function(req, res) {
        res.send({
            resultCode: '0000',
            result: [{
                imgUrl: 'http://192.168.1.61:3000/static/img/1.png',
                id: 1
            }, {
                imgUrl: 'http://192.168.1.61:3000/static/img/2.jpg',
                id: 2
            }, {
                imgUrl: 'http://192.168.1.61:3000/static/img/3.jpg',
                id: 3
            }],
            resultMsg: '返回成功'
        });
    });
};
