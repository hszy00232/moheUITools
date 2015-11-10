<style>
	@font-face{
		font-family:'mh-sick';
		src:url(http://s7.qhimg.com/static/bfd0102582fcca5c/medical.eot);
		src:url(http://s7.qhimg.com/static/bfd0102582fcca5c/medical.eot) format('embedded-opentype'),
		url(http://s6.qhimg.com/static/f4a70aaaaf055fa6/medical.woff) format('woff'),
		url(http://s8.qhimg.com/static/985d17902bdce9fa/medical.ttf) format('truetype'),
		url(http://s7.qhimg.com/static/de7a35dc51c2c5f3/medical.svg) format('svg');
		font-weight:normal;
		font-style:normal;
	}
	#mohe-demo .mh-ui-link:before{
		font-family: 'mh-sick';
		font-size: 15px;
		speak: none;
		font-style: normal;
		font-weight: normal;
		font-variant: normal;
		text-transform: none;
		line-height: 1;
		color: #3eaf1e;
		margin-right: 6px;

		/* Better Font Rendering =========== */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	#mohe-demo .mh-ui-list{
		display: table;
		table-layout: fixed;
		width: 100%;
		border-top:1px solid #eaeaea;
	}
	#mohe-demo .mh-ui-item{
		display: table-row;
	}
	#mohe-demo .mh-ui-item .mh-ui-link{
		display: table-cell;
		vertical-align: middle;
		color: #222;
		width: 27%;
		height: 44px;
		text-align: left;
		border-bottom: 1px dotted #eaeaea;
	}
	#mohe-demo .mh-ui-item .mh-ui-link:last-child{
		width: 18%;
	}
	#mohe-demo .mh-ui-item:last-child .mh-ui-link{
		border-bottom: none;
	}

	#mohe-demo .mh-ui-ico-bingfazheng:before {
		content: "\e600";
	}
	#mohe-demo .mh-ui-ico-zhenduan:before {
		content: "\e601";
	}
	#mohe-demo .mh-ui-ico-zhiliao:before {
		content: "\e602";
	}
	#mohe-demo .mh-ui-ico-jiancha:before {
		content: "\e603";
	}
	#mohe-demo .mh-ui-ico-bingyin:before {
		content: "\e604";
	}
	#mohe-demo .mh-ui-ico-pill:before {
		content: "\e605";
	}
	#mohe-demo .mh-ui-ico-bingzheng:before {
		content: "\e606";
	}
</style>
<div id="mohe-demo" class="g-mohe">
	<ul class="mh-ui-list g-clearfix">
		<li class="mh-ui-item">
			<a href="#" class="mh-ui-link mh-ui-ico-bingzheng">症状</a>
			<a href="#" class="mh-ui-link mh-ui-ico-bingyin">病因</a>
			<a href="#" class="mh-ui-link mh-ui-ico-jiancha">检查</a>
			<a href="#" class="mh-ui-link mh-ui-ico-zhenduan">诊断</a>
		</li>
		<li class="mh-ui-item">
			<a href="#" class="mh-ui-link mh-ui-ico-zhiliao">治疗</a>
			<a href="#" class="mh-ui-link mh-ui-ico-pill">预防</a>
			<a href="#" class="mh-ui-link mh-ui-ico-bingfazheng">并发症</a>
		</li>
	</ul>
</div>