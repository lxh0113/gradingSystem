import Mock from 'mockjs'

var Random = Mock.Random;
Random.natural()

export var examPaperGetAllE = Mock.mock('/examPaper/getAllE', 'get', {
    success: true,
    'data|3-15': [{
        'id': '@natural(1, 100)',
        'title': '@csentence(3, 5)',
        'score': '@natural(0, 1010)',
        'date': '@datetime("yy-MM-dd a HH:mm:ss")',
        'path': Random.image('200x100', '#894FC4', '#FFF', 'png', '!'),
        'amount': {
            'total': '@natural(10, 200)',
            'gradedNumber': function() {
                return Mock.mock('@natural(10, ' + this.total + ')');  
            }
        }    
    }]
})

