<template> 
  <div>
  
  </div>
</template>
   
<script setup>
  import axios from 'axios'
  
  import Mock from 'mockjs'
  var Random = Mock.Random;
  Random.natural()
  var data = Mock.mock('test/data', 'get', {
      success: true,
      data: {
          'xData|7': ['@natural(1, 12)'],
          'bar1': {
              name: 'Evaporation',
              'data|12': ['@natural(10, 50)']
          },
          'bar2': {
              name: 'Precipitation',
              'data|12': ['@natural(10, 50)']
          },
          'line1': {
              name: 'Temperature',
              'data|12': ['@natural(10, 50)']
          }
   
      }
  })
   
  const getData = () => {
    axios.get('test/data').then(res => {
      console.log(res.data)
    })
      .catch((err) => {
        console.log(err);
      });
  }
  getData()
   
</script>
   
<style scoped>
  
</style>