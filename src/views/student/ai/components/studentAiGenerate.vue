<template>
  <div class="bigBox">
    <div class="top">
        <el-form label-position="left" size="large" style="min-width: 560px" label-width="120px">
            <el-form-item label="请输入名称：">
                <el-col>
                    <el-input name="name" placeholder="试题名称" />
                </el-col>
            </el-form-item>
            <el-form-item label="请选择科目：">
                    <el-select name="subject" placeholder="选择科目"></el-select>
            </el-form-item>
            <el-form-item label="生成题目数：">
                <el-col>
                    <el-input name="count" placeholder="题目数量"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="上传题目材料：">
                <el-col>
                    <el-input placeholder="输入相关材料" rows="10" type="textarea" resize="none"/>
                </el-col>
            </el-form-item>
        </el-form>
    
    </div>
    <div class="bottom">
        <button>确认生成</button>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.bigBox{
    margin-top:25px;
    
    display: flex;
    position: relative;
    min-height: 685px;

    .top{
        margin-left:30px;
    }

    .bottom{
        position: absolute;
        display: flex;
        justify-content: right;
        bottom:0;
        left:0;
        height: 100px;
        width: 100%;
        background-color: #ebeffe;

        button{
            margin-right:10%;
            height: 50px;
            padding:0 40px 0 40px;
            line-height: 50px;
            margin-top:25px;
            border-radius: 40px;
            color:#3a63f3;
            font-weight: bold;
            font-size: 20px;
            border:none;
            background-color: #fff;

        }
    }
}
</style>