<template>
	<div class="overReview">
		<header class="header">
			 <div class="heaTitle">
			 	<svg t="1530863986937" class="icon" style="width: 0.25rem; vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3117" data-spm-anchor-id="a313x.7781069.0.i6"><path d="M704 143.36h-358.4c-56.32 0-102.4 46.08-102.4 102.4v563.2c0 56.32 46.08 102.4 102.4 102.4l179.2-179.2 179.2 179.2c56.32 0 102.4-46.08 102.4-102.4v-563.2c0-56.32-46.08-102.4-102.4-102.4z m51.2 665.6c0 28.16-23.04 51.2-51.2 51.2l-179.2-179.2-179.2 179.2c-28.16 0-51.2-23.04-51.2-51.2v-563.2c0-28.16 23.04-51.2 51.2-51.2h358.4c28.16 0 51.2 23.04 51.2 51.2v563.2z" p-id="3118" fill="#FF9019"></path></svg>
			 总体点评</div>
			 <div class="IntroduInfo">
			 	<div class="containInfo">【问题暴露】{{data.question_expose}}</div>
			 	<div class="containInfo">【解决方案】{{data.solution}}</div>
			 </div>
			 <div class="knowPointLevel">
			 	<div class="knowWeak">
			 		   <span>【薄弱知识点】</span>
			 		  <ul class="section">
			 			<li v-for="item in data.weak_knowledge" v-show="data.weak_knowledge[0]!='' ">{{item}}</li>
				 	  </ul>
			 	</div>
			 	<div class="knowGood">
			 		<span>【良好知识点】</span>
			 		<ul class="section">
			 			<li v-for="item in data.good_knowledge" v-show="data.good_knowledge[0]!='' ">{{item}}</li>
			 		</ul>
			 	</div>
			 	<div class="knowExcell">
			 		<span>【优势知识点】</span>
			 		<ul class="section">
				 		<li v-for="item in data.dominant_knowledge" v-show="data.dominant_knowledge[0]!='' ">{{item}}</li>
			 		</ul>
			 	</div>
			 </div>
		</header>
		<div class="echContent">
			 <div class="square">
			 	 <div class="sortColor">
			 	<svg t="1530863986937" class="icon" style="width: 0.25rem; vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3117" data-spm-anchor-id="a313x.7781069.0.i6"><path d="M704 143.36h-358.4c-56.32 0-102.4 46.08-102.4 102.4v563.2c0 56.32 46.08 102.4 102.4 102.4l179.2-179.2 179.2 179.2c56.32 0 102.4-46.08 102.4-102.4v-563.2c0-56.32-46.08-102.4-102.4-102.4z m51.2 665.6c0 28.16-23.04 51.2-51.2 51.2l-179.2-179.2-179.2 179.2c-28.16 0-51.2-23.04-51.2-51.2v-563.2c0-28.16 23.04-51.2 51.2-51.2h358.4c28.16 0 51.2 23.04 51.2 51.2v563.2z" p-id="3118" fill="#64B6FC"></path></svg>
			   知识点分析</div>
			   <div id="echContain" style="text-align: left;"></div>
			   <div class="questShow">【问题暴露】{{data.knowledge_question_expose}}
                </div>
			 </div>
			 <div class="square">
			 	 <div class="sortColor">
			 	<svg t="1530863986937" class="icon" style="width: 0.25rem; vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3117" data-spm-anchor-id="a313x.7781069.0.i6"><path d="M704 143.36h-358.4c-56.32 0-102.4 46.08-102.4 102.4v563.2c0 56.32 46.08 102.4 102.4 102.4l179.2-179.2 179.2 179.2c56.32 0 102.4-46.08 102.4-102.4v-563.2c0-56.32-46.08-102.4-102.4-102.4z m51.2 665.6c0 28.16-23.04 51.2-51.2 51.2l-179.2-179.2-179.2 179.2c-28.16 0-51.2-23.04-51.2-51.2v-563.2c0-28.16 23.04-51.2 51.2-51.2h358.4c28.16 0 51.2 23.04 51.2 51.2v563.2z" p-id="3118" fill="#57DFEB"></path></svg>
			   数学能力分析</div>
			   <div id="echContain1"></div>
			   <div class="questShow">【问题暴露】{{data.ability_question_expose}}
                </div>
			 </div>
			 <div class="square">
			 	 <div class="sortColor">
			 	<svg t="1530863986937" class="icon" style="width: 0.25rem; vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3117" data-spm-anchor-id="a313x.7781069.0.i6"><path d="M704 143.36h-358.4c-56.32 0-102.4 46.08-102.4 102.4v563.2c0 56.32 46.08 102.4 102.4 102.4l179.2-179.2 179.2 179.2c56.32 0 102.4-46.08 102.4-102.4v-563.2c0-56.32-46.08-102.4-102.4-102.4z m51.2 665.6c0 28.16-23.04 51.2-51.2 51.2l-179.2-179.2-179.2 179.2c-28.16 0-51.2-23.04-51.2-51.2v-563.2c0-28.16 23.04-51.2 51.2-51.2h358.4c28.16 0 51.2 23.04 51.2 51.2v563.2z" p-id="3118" fill="#FFAE22"></path></svg>
			   数学思想能力分析</div>
			   <div id="echContain2"></div>
			   <div class="questShow">【问题暴露】{{data.thought_question_expose}}
                </div>
			 </div>
			 <div class="square">
			 	 <div class="sortColor">
			 	<svg t="1530863986937" class="icon" style="width: 0.25rem; vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3117" data-spm-anchor-id="a313x.7781069.0.i6"><path d="M704 143.36h-358.4c-56.32 0-102.4 46.08-102.4 102.4v563.2c0 56.32 46.08 102.4 102.4 102.4l179.2-179.2 179.2 179.2c56.32 0 102.4-46.08 102.4-102.4v-563.2c0-56.32-46.08-102.4-102.4-102.4z m51.2 665.6c0 28.16-23.04 51.2-51.2 51.2l-179.2-179.2-179.2 179.2c-28.16 0-51.2-23.04-51.2-51.2v-563.2c0-28.16 23.04-51.2 51.2-51.2h358.4c28.16 0 51.2 23.04 51.2 51.2v563.2z" p-id="3118" fill="#FF7979"></path></svg>
			   难易程度分析</div>
			   <div id="echContain3"></div>
			   <div class="questShow">【问题暴露】{{data.difficult_question_expose}}
                </div>
			 </div>
			  <div class="square">
			 	 <div class="sortColor">
			 	<svg t="1530863986937" class="icon" style="width: 0.25rem; vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3117" data-spm-anchor-id="a313x.7781069.0.i6"><path d="M704 143.36h-358.4c-56.32 0-102.4 46.08-102.4 102.4v563.2c0 56.32 46.08 102.4 102.4 102.4l179.2-179.2 179.2 179.2c56.32 0 102.4-46.08 102.4-102.4v-563.2c0-56.32-46.08-102.4-102.4-102.4z m51.2 665.6c0 28.16-23.04 51.2-51.2 51.2l-179.2-179.2-179.2 179.2c-28.16 0-51.2-23.04-51.2-51.2v-563.2c0-28.16 23.04-51.2 51.2-51.2h358.4c28.16 0 51.2 23.04 51.2 51.2v563.2z" p-id="3118" fill="#2c3e50"></path></svg>
			   失分原因</div>
			   <div id="reFooter" v-show="!isLossMark"></div>
			   <div v-show="isLossMark">非常优秀，没有失分呦</div>
			   <div class="questShow">【问题暴露】{{data.teacher_suggest}}
                </div>
			 </div>
		</div>
	</div>
</template>
<script type="text/javascript" >
	import html2canvas from 'html2canvas';
	export default{
		name:'',
		data(){
           return{
           	  data:{},
              teacherSuggest:'',
              knowledgeAnalysis:[],
              abilityAnalysis:[],
              thoughtAnalysis:[],
              difficultIndex:[],
              knowValue:[],
              abilityValue:[],
              thoughtValue:[],
              difficultValue:[],
              loss:[],
              outerLayData:[],
              innerLayData:[],
              isLossMark:false,
           }
		},
		mounted:function(){

			var str="这是一句完整的话这是一句完整的话这是一句完整的话"
			str=str.split('')
            for(let i=0;i<str.length;i++){
                  if(i%8==0&&i!=0){
                  	   str.splice(i+1,0,'\n')
                  }  
            }
            str=str.join('')                           
			this.echartsFun()
			this.getResultList()
		},
		methods:{
			outImgFun:function(){
				var containInfo=document.getElementsByClassName('containInfo')[0]
				html2canvas(containInfo).then(function(canvas) {
				    document.body.appendChild(canvas);
				});
			},
			getResultList:function(){
				this.axios.get('http://192.168.0.184/tptest/public/index.php/api/entry_test/student_entry_test_analysis_detail',{
					params:{
                        phoneNum:'12345678912',
                        stuEntTestId:'1',
					}
				}).then((res)=>{
					if(res.data.statusCode==0){
						this.data=res.data.returnResult
						const rest=res.data.returnResult
						  this.knowledgeAnalysis=rest.knowledge_analysis
						  this.abilityAnalysis=rest.ability_analysis
						  this.thoughtAnalysis=rest.thought_analysis
						  this.difficultIndex=rest.difficult_index
						  if(rest.loss){
						  	this.loss=rest.loss
						  	this.isLossMark=false
						    this.dealWithData(true)
						  }else{
						  	this.dealWithData(false)
                             this.isLossMark=true
						  }
						  
					}
				})
			},
			dealWithData:function(isshowFooter){
				for(let i=0;i<this.knowledgeAnalysis.length;i++){
					   console.log(this.knowledgeAnalysis[i].title.length)
					   if(this.knowledgeAnalysis[i].title.length>=8){
					   	       var str=this.knowledgeAnalysis[i].title
					   	       	str=str.split('')
					            for(let j=0;j<str.length;j++){
					                  if(j%7==0&&j!=0){
					                  	   str.splice(j+1,0,'\n')
					                  }  
					            }
					            str=str.join('')  
					           this.knowledgeAnalysis[i].name=str
					   }else{
					      this.knowledgeAnalysis[i].name=this.knowledgeAnalysis[i].title
					   }
					    // this.knowledgeAnalysis[i].name=this.knowledgeAnalysis[i].name+this.knowledgeAnalysis[i].percent
					    this.knowledgeAnalysis[i].max=100
                        this.knowValue.push(this.knowledgeAnalysis[i].percent)
				}
				for(let i=0;i<this.abilityAnalysis.length;i++){
					    this.abilityAnalysis[i].name=this.abilityAnalysis[i].title
					     this.abilityAnalysis[i].max=100
                        this.abilityValue.push(this.abilityAnalysis[i].percent)
				}
				for(let i=0;i<this.thoughtAnalysis.length;i++){
					    this.thoughtAnalysis[i].name=this.thoughtAnalysis[i].title
					     this.thoughtAnalysis[i].max=100
                        this.thoughtValue.push(this.thoughtAnalysis[i].percent)
				}
				for(let i=0;i<this.difficultIndex.length;i++){
					    this.difficultIndex[i].name=this.difficultIndex[i].title
					     this.difficultIndex[i].max=100
                        this.difficultValue.push(this.difficultIndex[i].percent)
				}
				// console.log(this.loss)
				 var myChart = this.$echarts.init(document.getElementById('echContain'));
				 var myChart1 = this.$echarts.init(document.getElementById('echContain1'));
				 var myChart2 = this.$echarts.init(document.getElementById('echContain2'));
				 var myChart3 = this.$echarts.init(document.getElementById('echContain3'));
				 var reFooter = this.$echarts.init(document.getElementById('reFooter'));
				 myChart.setOption({
				 	radar: {
                        indicator:this.knowledgeAnalysis
				 	},
				 	series:[{
				 		data:[
                        {
                          value:this.knowValue
                        }
				 	  ]
				 	}]
				 })
				 myChart1.setOption({
				 	radar: {
                        indicator:this.abilityAnalysis
				 	},
				 	series:[{
				 		data:[
                        {
                        	value:this.abilityValue
                        }
				 	  ]
				 	}]
				 })
				 myChart2.setOption({
				 	radar: {
                        indicator:this.thoughtAnalysis
				 	},
				 	series:[{
				 		data:[
                        {
                        	value:this.thoughtValue
                        }
				 	  ]
				 	}]
				 })
				 myChart3.setOption({
				 	radar: {
                        indicator:this.difficultIndex
				 	},
				 	series:[{
				 		data:[
                        {
                        	value:this.difficultValue
                        }
				 	  ]
				 	}]
				 })
				  if(isshowFooter){
                	for(let i=0;i<this.loss.length;i++){
                		    var obj={value:100}
                		    obj.name=this.loss[i].title
					       this.innerLayData.push(obj)
					       for(let j=0;j<this.loss[i].loss_data.length;j++){
					       	         var objs={}
					       	         objs.value=this.loss[i].loss_data[j].percent
					       	         if(this.loss[i].loss_data[j].title.length>=5){
					       	         	    var str=this.loss[i].loss_data[j].title
									   	       	str=str.split('')
									            for(let j=0;j<str.length;j++){
									                  if(j%5==0&&j!=0){
									                  	   str.splice(j+1,0,'\n')
									                  }  
									            }
									            str=str.join('') 
									             objs.name=str
					       	         }else{
					       	            objs.name=this.loss[i].loss_data[j].title
					       	         }
                                    this.outerLayData.push(objs)
					       }
				    }
				    // console.log(this.innerLayData)
				    // console.log(this.outerLayData)
				    reFooter.setOption({
				 	series:[
                       {
                       	data:this.innerLayData
                       },
                       {
                       	data:this.outerLayData
                       }
				 	]
				 })
                }
				
				 
			},
			echartsFun:function(){
	           var myChart = this.$echarts.init(document.getElementById('echContain'));
	           var myChart1 = this.$echarts.init(document.getElementById('echContain1'));
	            var myChart2 = this.$echarts.init(document.getElementById('echContain2'));
				 var myChart3 = this.$echarts.init(document.getElementById('echContain3'));
				 var reFooter = this.$echarts.init(document.getElementById('reFooter'));
	           myChart.setOption({
					    tooltip: {},
					    legend:{},
					    radar: {
					        radius:50,
					        top:-50,
					        name: {
					            textStyle: {
					                color: '#5A5A5A',
					                borderRadius: 3,
					                padding: [3, 5]
					           }
					        },
					        indicator:[{}]
						    },
						    series: [{
						        type: 'radar',
						        itemStyle: {
			                        normal: {
			                            lineStyle: {
			                                color :"#64B6FC",
			                                width : 2
			                            },
			                            areaStyle: {
			                                color:"#64B6FC",
			                                type: 'default',
			                            }
			                        }
			                    },
						        data : [
						            {
						                value :[],
						                // name : '预算分配（Allocated Budget）'
						            },
						        ]
						    }]
					});
	                myChart1.setOption({
					    tooltip: {},
					    legend:{},
					    radar: {
					        radius:50,
					        top:-50,
					        name: {
					            textStyle: {
					                color: '#5A5A5A',
					                borderRadius: 3,
					                padding: [3, 5]
					           }
					        },
					        indicator:[{}]
						    },
						    series: [{
						        type: 'radar',
						        itemStyle: {
			                        normal: {
			                            lineStyle: {
			                                color :"#57DFEB",
			                                width : 2
			                            },
			                            areaStyle: {
			                                color:"#57DFEB",
			                                type: 'default',
			                            }
			                        }
			                    },
						        data : [
						            {
						                value :[],
						                // name : '预算分配（Allocated Budget）'
						            },
						        ]
						    }]
					});
					 myChart2.setOption({
					    tooltip: {},
					    legend:{},
					    radar: {
					        radius:50,
					        top:-50,
					        name: {
					            textStyle: {
					                color: '#5A5A5A',
					                borderRadius: 3,
					                padding: [3, 5]
					           }
					        },
					        indicator:[{}]
						    },
						    series: [{
						        type: 'radar',
						        itemStyle: {
			                        normal: {
			                            lineStyle: {
			                                color :"#FFAE22",
			                                width : 2
			                            },
			                            areaStyle: {
			                                color:"#FFAE22",
			                                type: 'default',
			                            }
			                        }
			                    },
						        data : [
						            {
						                value :[],
						                // name : '预算分配（Allocated Budget）'
						            },
						        ]
						    }]
					});
					  myChart3.setOption({
					    tooltip: {},
					    legend:{},
					    radar: {
					        radius:50,
					        top:-50,
					        name: {
					            textStyle: {
					                color: '#5A5A5A',
					                borderRadius: 3,
					                padding: [3, 5]
					           }
					        },
					        indicator:[{}]
						    },
						    series: [{
						        type: 'radar',
						        itemStyle: {
			                        normal: {
			                            lineStyle: {
			                                color :"#FF7979",
			                                width : 2
			                            },
			                            areaStyle: {
			                                color:"#FF7979",
			                                type: 'default',
			                            }
			                        }
			                    },
						        data : [
						            {
						                value :[],
						                // name : '预算分配（Allocated Budget）'
						            },
						        ]
						    }]
					});
				   reFooter.setOption({
						tooltip: {
					        trigger: 'item',
					        formatter: "{a} <br/>{b}: {c} ({d}%)"
					    },
					    legend: {
					        orient: 'vertical',
					        x: 'left',
					        data:[]
					    },
					    series: [
					        {
					          
					            type:'pie',
					            selectedMode: 'single',
					            radius: [0, '40%'],

					            label: {
					                normal: {
					                    position: 'inner',
					                    fontSize : 12
					                }
					            },
					            labelLine: {
					                normal: {
					                    show: true
					                }
					            },
					            data:[
					                
					            ]
					        },
					        {
					        
					            type:'pie',
					            radius: ['50%', '60%'],
					            label: {
					                normal: {
					                    // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
					                    // backgroundColor: '#eee',
					                    // borderColor: '#aaa',
					                    borderWidth: 1,
					                    borderRadius: 4,
					                    // shadowBlur:3,
					                    // shadowOffsetX: 2,
					                    // shadowOffsetY: 2,
					                    // shadowColor: '#999',
					                    // padding: [0, 7],
					                    rich: {
					                        a: {
					                            color: '#999',
					                            lineHeight: 22,
					                            align: 'center'
					                        },
					                        // abg: {
					                        //     backgroundColor: '#333',
					                        //     width: '100%',
					                        //     align: 'right',
					                        //     height: 22,
					                        //     borderRadius: [4, 4, 0, 0]
					                        // },
					                        hr: {
					                            borderColor: '#aaa',
					                            width: '100%',
					                            borderWidth: 0.5,
					                            height: 0
					                        },
					                        b: {
					                            fontSize: 16,
					                            lineHeight: 33
					                        },
					                        per: {
					                            color: '#eee',
					                            backgroundColor: '#334455',
					                            padding: [2, 4],
					                            borderRadius: 2
					                        }
					                    }
					                }
					            },
					            data:[
					                
					            ]
					        }
					    ],
					   
                      
				   })
			}
		}
	}
</script>
<style>
   .overReview{
	}
	.contain{
		width: 3rem;
		height: 3rem;
		border: 1px solid black;
	}
	.heaTitle{
		font-size: 17px;
		text-align: center;
		margin-top: 0.2rem;
	}
	.IntroduInfo{
         margin: 0.2rem auto;
         width: 3.48rem;
	}
    .containInfo{
    	color: #5A5A5A;
    	font-size: 13px;
    	line-height: 0.19rem;
    }
    .knowPointLevel{
    	margin: 0.27rem auto;
        width: 3.48rem;
    }
    .knowWeak{
    	margin-bottom: 0.05rem;
    }
    .knowGood{
    	margin-bottom: 0.05rem;
    }
    .section{
    	margin-left: 0.1rem;
    }
    .section  li{
    	padding: 0rem 0.05rem;
    	display: inline-block;
    	box-sizing: border-box;
    	height: 0.17rem;
    	margin-top: 0.05rem;
    	line-height: 0.17rem;
    	text-align: center;
    	margin-left: 0.05rem;
    	border-radius: 0.05rem;
    	color: #fff;
    }
    .knowWeak span:nth-child(1){
          color: #FCB353;
          background-color: #fff;
    }
     .knowGood span:nth-child(1){
          color: #78E75A;
           background-color: #fff;
    }
     .knowExcell span:nth-child(1){
          color: #4AABEC;
           background-color: #fff;
    }
     .knowWeak .section li{
          background-color: #FCB353;
     }
     .knowGood .section li{
     	  background-color: #78E75A;
     }
     .knowExcell .section li{
     	  background-color: #4AABEC;
     }
	.overReview .heaTitle:nth-child(1){
		color:#FF9019;
	}
	.echContent .sortColor{
		font-size: 17px;
		text-align: center;
		padding-top: 0.18rem;
		box-sizing: border-box;
	}
.echContent .square:nth-child(1) .sortColor{
		color:#64B6FC;
	}
.echContent .square:nth-child(2) .sortColor{
		color:#57DFEB;
	}
.echContent .square:nth-child(3) .sortColor{
		color:#FFAE22;
	}
.echContent .square:nth-child(4) .sortColor{
		color:#FF7979;
	}

	.echContent{
		width: 3.55rem;
		margin: 0.2rem auto;
	}
	.square{
		width: 100%;
		border-radius: 0.03rem;
	   -webkit-box-shadow: 0 0 0.06rem #AFAFAF;
	   margin-bottom: 0.3rem;
	}
	#echContain{
		width: 100%;
		height: 2.3rem;
		margin: 0rem auto;
		position: relative;

	}
	#echContain1{
		width: 100%;
		height: 2.3rem;
		margin: 0rem auto;
		position: relative;
	}
	#echContain2{
		width: 100%;
		height: 2.3rem;
		margin: 0rem auto;
		position: relative;
	}
	#echContain3{
		width: 100%;
		height: 2.3rem;
		margin: 0rem auto;
		position: relative;
	}
	.questShow{
        color: #5A5A5A;
        font-size: 13px;
        line-height: 0.19rem;
        width: 3.25rem;
        margin: 0.1rem auto;
        padding-bottom: 0.1rem;
	}
    #reFooter{
    	width: 100%;
    	height: 3rem;
    }
</style>