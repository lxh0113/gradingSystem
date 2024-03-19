import Mock from 'mockjs'

var Random = Mock.Random;
Random.natural()


export function generateExamAnalysisClass(classId) {
    return Mock.mock(`/examAnalysis/class/${classId}`, 'get', {
      success: true,
      'data|5-8': [{
        'examName': '@ctitle(3, 5)',
        'id': '@natural(1, 100)',
        'schoolId': '@natural(1, 100)',
        'name': '@ctitle(3, 5)',
        'avgScore': '@float(0, 100, 1, "{{integer}}.{{random("0", "5")}}"',
        "minScore": "@float(0, @int({{avgScore}}), 1, '{{integer}}.{{random(\"0\", \"5\")}}')",
        'maxScore': '@float(@int({{avgScore}}), 100, 1, "{{integer}}.{{random("0", "5")}}"',
      }]
    });
  }