import Mock from 'mockjs'

var Random = Mock.Random;
Random.natural()


export var studentGetStudents= Mock.mock('/student/getStudents', 'get', {
    success: true,
    'data|5-18': [{
      'id': '@natural(1, 100)',
      'account': '@string("number", 1, 3)',
      'grated': '@natural(1, 100)',
      'userId': '@natural(1, 100)',
      'studentNumber': '@string("number", 1, 3)',
      'classId': '@natural(1, 100)',
      'name': '@cname()',
      'schoolId': '@natural(1, 100)',
      'tag': '@natural(1, 100)',
      'avatar': Random.dataImage('200x100', '头像')
    }]
  });