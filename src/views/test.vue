<template>
	<div>
		<div class="navTop">
			 <span>入班测试</span>
		</div>
	<div class="queContain">
			 <div class="questList">
			 	 <div  v-for="(item,index) in questionList" v-show="index==pageIndex">
			 	  <div v-html="index+1+'<span>. </span>'+item.question_text" ></div>
			           <div class="ansOptions" >
                            <span  class="optionsChoose">
                                <span>A .</span>
                                <span v-html=item.question_options.A></span>
                            </span>
                            <span class="optionsChoose">
                                <span>B .</span>
                                <span v-html=item.question_options.B ></span>
                            </span><br/>
                            <span class="optionsChoose">
                                <span>C .</span>
                                <span v-html=item.question_options.C ></span>
                            </span>
                            <span class="optionsChoose">
                                <span>D .</span>
                                <span v-html=item.question_options.D ></span>
                            </span>
                       </div>
                  </div>
                </div>
             <div class="chooseContent">
             	 <div class="chooseRight">请选择正确答案</div>
             	 <div class="options">
             	 	 <span v-for="(item,index) in optionList" @click="chooseOption(index)" :class="[bgColorIndex==index?'bgColorActive':'']">{{item}}</span>
             	 </div>
             	 <div class="footer">
             	 	 <span v-show="pageIndex==0" style="color: #fff">
             	 	 上一页</span>
             	 	 <span @click="prevTipFun" v-show="pageIndex!=0">
             	 	 	<img src="../assets/image/cfbackleft.png" class="cfbackleft">
             	 	 	上一题
             	 	 </span>
             	 	 <span><i class="curPage">{{pageIndex+1}}</i>/{{totalPage}}</span>
             	 	 <span @click="nextTipFun" v-show="pageIndex+1<totalPage">
             	 	 	下一题
             	 	 	<img src="../assets/image/cfintoright.png" class="cfintoright">
             	 	 </span>
             	 	 <span v-show="pageIndex+1==totalPage" style="color: #fff">下一题啊</span>
             	 </div>
             	 <div class="submitClass"  v-show="pageIndex+1==totalPage" @click="submitFun">提交</div>
             </div>
		</div>
    </div>
</template>
<script>
	export default{
		data(){
			return{
			   pageIndex:0,
               totalPage:0,
               bgColorIndex:-1,
               togglePage:true,
               showResult:true,
               questionList:[],
               collectAnswer:[],
               optionList:['A','B','C','D',],
               testId:[],
               answerId:[],
			}
		},
		mounted:function(){
			this.getquestion()
		},
		methods:{
			    goBackPage:function(){
                   this.$router.push('/')
            },
            chooseOption:function(index){
                  this.bgColorIndex=index
                  this.collectAnswer[this.pageIndex]=index
            },
            prevTipFun:function(){
                 this.pageIndex--
                 this.bgColorIndex=this.collectAnswer[this.pageIndex]
            },
            nextTipFun:function(){
            	if(this.collectAnswer.length<=this.pageIndex){
            		alert('请选择一个正确答案')
            		return
            	}else{
                   this.pageIndex++
                   this.bgColorIndex=this.collectAnswer[this.pageIndex] 
            	} 
            },
            getquestion:function(){
            	this.axios.get('http://192.168.0.184/tptest/public/index.php/api/entry_test/entry_test_detail',{
            		params:{
                       entryTestPid:40
            		}
            	}).then((res)=>{
            		if(res.data.statusCode==0){
            			this.totalPage=res.data.returnResult.questions.length
                        this.questionList=res.data.returnResult.questions
                        this.togglePage=false
            		}else{
            			this.totalPage=0
            			this.questionList=[]
            			this.togglePage=true
            		}
            	})
            },
            submitFun:function() {
            	this.initData()
            	this.axios.get('http://192.168.0.184/tptest/public/index.php/api/entry_test/student_entry_test_submit',{
            		  params:{
            		  	  studentName:this.nameValue,
            		  	  phoneNum:this.phoneValue,
            		  	  entryTestPid:40,
            		  	  questionIds:this.testId,
            		  	  studentAnswers:this.answerId,
            		  }
            	}).then((res)=>{
            		console.log(res.data)
            	})
            },
            initData:function(){
            	if(this.collectAnswer.length<=this.pageIndex){
            		alert('请选择一个正确答案')
            		return
            	}
            	this.testId=[]
            	this.answerId=[]
                for(let i=0;i<this.questionList.length;i++){
                        this.testId.push(this.questionList[i].question_id)
                }
                 for(let j=0;j<this.collectAnswer.length;j++){
                 	   this.answerId.push(this.optionList[this.collectAnswer[j]])
                 }
                console.log(this.answerId)
            }
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
	.queContain{
		margin-top: 0.55rem;
	}
	.questList{
        width: 3.45rem;
        margin-left: auto;
        margin-right:auto;
	}
	.ansOptions{
		margin-top: 0.5rem;
		/*display: flex;*/
		/*justify-content: space-between;*/
	}
	.optionsChoose{
		display: inline-block;
		margin-left: 15%;
		margin-bottom: 0.3rem;
	}
	.chooseContent{
		margin-top: 0.34rem;
	}
	.chooseRight{
		font-size: 14px;
		color: #252729;
		font-weight: Regular;
		margin-left: 0.15rem;
	}
	.options{
		display: inline-block;
		display: flex;
		justify-content: space-around;
		margin-top: 0.3rem;
	}
	.options span{
		width: 0.42rem;
		height: 0.42rem;
		display: inline-block;
	    background-color: #fff;
        color:#252729;
        border-radius: 50%;
        line-height: 0.42rem;
        text-align: center;
        border: 1px solid #DCDEE0;
	}
	.footer{
		margin-top: 0.5rem;
		margin-left: 0.35rem;
		margin-right: 0.35rem;
		display: flex;
		line-height: 0.18rem;
		justify-content: space-between;
	}
	.footer span{
       color: #6E747A;
       font-size: 13px;
	}
	.curPage{
		color: #252729;
		font-style: normal;
	}
	.footer img{
		width: 0.15rem;
		height: 0.15rem;
		position: relative;
		top: 3px;
	}
   .options .bgColorActive{
		background-color: #FF6321;
		color: #fff;
	}
	.submitClass{
		width: 2.7rem;
		height: 0.45rem;
		line-height: 0.45rem;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		color: #fff;
		font-size: 16px;
		margin-top: 0.6rem;
		border-radius: 0.23rem;
		background-color: #FF6321;
	}
</style>