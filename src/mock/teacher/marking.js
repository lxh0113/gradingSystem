import Mock from 'mockjs'

var Random = Mock.Random;
Random.natural()

export var examPaperGetAllE = Mock.mock('/examPaper/getAllE', 'get', {
    success: true,
    'data|3-15': [{
        'id': '@natural(1, 100)',
        'title': '@ctitle(3, 5)',
        'score': '@natural(0, 1010)',
        'date': function() {
            return Mock.mock('@datetime("yyyy-MM-dd HH:mm", "now")');
        },
        'path': Random.image('200x100', '#894FC4', '#FFF', 'png', '!'),
        'amount': {
            'total': '@natural(10, 200)',
            'gradedNumber': function() {
                return Mock.mock('@natural(10, ' + this.total + ')');  
            }
        }    
    }]
})


export var examPaperGetAllEP = Mock.mock('/examPaper/getAllEP', 'get', {
    success: true,
    'data|4-15': [{
        'id': '@natural(1, 100)',
        'name': '@cname()',
        'studentNumber': '@natural(1,100)',
        'path': Random.dataImage("200x100", "Hello Mock.js!"),
        'score': '@natural(0, 100)',
        'comment': '@csentence(5,20)',
        'state': '@boolean',
        'pages': {
            'id': '@natural(1, 100)',
            'pageNumber': '@natural(1, 10)',
            'content': '@cparagraph',
            'path': Random.dataImage("200x200", "Hello Mock.js!"),
        }    
    }]
})
