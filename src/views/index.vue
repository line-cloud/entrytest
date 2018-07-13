<template>
	<div>
		<div class="navTop">
			 <span>入班测试</span>
		</div>
		<div class="inContain">
			<div class="wirteInfo">填写信息</div>
			<input type="text" name="" placeholder="请输入姓名" v-model="nameValue">
			<input type="text" name="" placeholder="请输入手机号" v-model="phoneValue">
			<div class="nextPage" @click="nextPageFun">下一页</div>
		</div>
	</div>
</template>
<script>
	      // 设置html字体,使页面在手机端正常显示
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
	export default{
		name:'',
		data(){
			return{
               nameValue:'',
               phoneValue:'',
             
			}
		},
		mounted:function(){
			
		},
		methods:{
            nextPageFun:function() {
            	// this.$router.push('echarts')
            	if(this.nameValue.search("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")!=-1){
            		alert('你的姓名输入不合法,请重试')
            		return
            	}
             //  if(this.phoneValue.search('0?(13|14|15|17|18|19)[0-9]{9}')==-1||this.phoneValue.length>11){
             //           alert('请输入正确的手机号')
             //           return
            	// }
            	if(this.nameValue==''||this.phoneValue==''){
            		alert('请填写完整信息')
            		return
            	}
            	this.judgeIsResult()
            },
            judgeIsResult:function(){
            	  this.axios.get('http://192.168.0.184/tptest/public/index.php/api/entry_test/entry_test_login',{
            	  	 params:{
                          entryTestPid:40,
                          studentName:this.nameValue,
                          phoneNum:this.phoneValue,  
            	  	 }
            	  }).then((res)=>{
            	  	if(res.data.statusCode==0){
            	  		// res.data.returnResult.status=4
            	  		 if(res.data.returnResult.status==1){
            	  		 	   this.$router.push('test')
            	  		 	  
            	  		 }else if(res.data.returnResult.status==2){

            	  		 }else if(res.data.returnResult.status==4){
            	  		 	  // this.showResult=false
                              this.$router.push('resultShow')
            	  		 }
            	  	}
            	  })
            },
        
		}
	}
</script>
<style>
	.navTop{
		width: 100%;
		height: 0.44rem;
		line-height: 0.44rem;
		text-align: center;
		position: relative;
		color: #252729;
		font-family: PingFangSC;
		font-size: 18px;
		border-bottom: 1px solid #DBDDDF;
	}
	.inContain{
		margin-top: 0.46rem;
		margin-left: 0.3rem;
		margin-right: 0.3rem;
	}
	.inContain input{
		display: inline-block;
		border: none;
		width: 100%;
		height: 0.38rem;
		font-size: 16px;
		color: #999EA3;
		line-height: 0.38rem;
		margin-top: 0.18rem;
		outline: none;
		border-bottom: 1px solid #DBDDDF;
	}
	.wirteInfo{
		font-size: 18px;
		font-weight: Medium;
		font-family: PingFangSC;
	}
	.nextPage{
		width: 2.7rem;
		height: 0.45rem;
		line-height: 0.45rem;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		color: #fff;
		font-size: 16px;
		margin-top: 0.45rem;
		border-radius: 0.23rem;
		background-color: #FF6321;
	}
	
</style>