<template>
  <div class="bigBox">
    <div class="top">
        <el-form label-position="left" size="large" style="max-width: 640px" label-width="120px">
            <el-form-item label="请输入名称：">
                <el-col>
                    <el-input name="name" placeholder="试题名称" />
                </el-col>
            </el-form-item>
            <el-form-item label="生成题目：">
                <el-col style="display: grid;grid-template-columns: 1fr 1fr 1fr 1fr;gap:20px;">
                    <el-input placeholder="选择题数量"></el-input>
                    <el-input placeholder="填空题数量"></el-input>
                    <el-input placeholder="材料题数量"></el-input>
                    <el-input placeholder="判断题数量"></el-input>
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