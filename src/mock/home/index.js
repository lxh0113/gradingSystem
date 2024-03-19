import Mock from 'mockjs'

var Random = Mock.Random;
Random.natural()


export var userISC = Mock.mock('/user/ISC', 'get', {
    success: true,
    'data|3-6': [{
        'id': '@natural(1, 100)',
        'schoolId': '@natural(1, 100)',
        'name': '@ctitle(3, 5)',
        'garateId': '@natural(1, 100)'
    }]
})