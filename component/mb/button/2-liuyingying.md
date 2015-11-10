<style>
	#mohe-demo .mh-ui-flex{
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
	}
	#mohe-demo .mh-ui-item{
		-webkit-box-flex:1;
		-webkit-flex:1;
		flex:1;
		display: block;
		line-height: 1.5;
	}
	#mohe-demo .mh-ui-tel a{
		display: block;
		text-align: center;
		color: #222;
		height: 30px;
		line-height: 1.8;
		border:1px solid #eaeaea;
		background-color: #fafafa;
	}
	#mohe-demo .mh-ui-ml10{
		margin-left: 10px;
	}
	#mohe-demo .mh-ui-ico-tel,
	#mohe-demo .mh-ui-ico-web{
		display: inline-block;
		width: 14px;
		height: 15px;
		margin-right: 5px;
		background-image:url(http://p8.qhimg.com/d/inn/68b44795/icon.png);
		background-position: 0 0;
		background-repeat: no-repeat;
		background-size:14px auto;
	}
	#mohe-demo .mh-ui-tel span,
	#mohe-demo .mh-ui-tel i{
		vertical-align: middle;
	}
	#mohe-demo .mh-ui-ico-web{
		background-position: 0 -29px;
	}

</style>
<div id="mohe-demo" class="g-mohe">
	<div class="mh-ui-flex mh-ui-tel">
		<a href="tel:010114" class="mh-ui-item"><span class="mh-ui-ico-tel"></span><i>114电话预约</i></a>
		<a href="#" class="mh-ui-item mh-ui-ml10"><span class="mh-ui-ico-web"></span><i>网络预约</i></a>
	</div>
</div>