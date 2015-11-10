<style>
	#mohe-demo .mh-flex{
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
	}
	#mohe-demo .mh-item{
		-webkit-box-flex:1;
		-webkit-flex:1;
		flex:1;
	}
	#mohe-demo .mh-btn-green,
	#mohe-demo .mh-btn-lightgreen{
		display: block;
		height: 28px;
		line-height: 28px;
		text-align: center;
	}
	#mohe-demo .mh-btn-green{
		background-color: #5cb642;
		color: #fff;
		border:1px solid #5cb642;
		margin-right: 10px;
	}
	#mohe-demo .mh-btn-lightgreen{
		background-color: #effaec;
		color: #38aa07;
		border:1px solid #aad1a8;
	}

</style>
<div id="mohe-demo" class="g-mohe">
	<div class="mh-flex">
		<a href="#btn1" class="mh-item mh-btn-green">从头阅读</a>
		<a href="#btn2" class="mh-item mh-btn-lightgreen">章节目录</a>
	</div>
</div>