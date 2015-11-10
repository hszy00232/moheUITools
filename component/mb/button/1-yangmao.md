<style type="text/css">
	#mohe-demo .mh-switch {
		display: block;
		position: relative;
		overflow: hidden;
		width: 70px;
		height: 26px;
		background: #ddd;
		border: 1px solid #eee;
	}
	#mohe-demo .mh-switch-slider {
		position: relative;
		margin-right: 30px;
		height: 26px;
		background: #5cb642;
		-webkit-transition: all 0.1s;
		transition: all 0.1s;
	}
	#mohe-demo .mh-switch-slider::before {
		content: '';
		display: block;
		float: right;
		width: 30px;
		height: 26px;
		margin-right: -30px;
		background: #fdfdfd;
	}
	#mohe-demo .mh-switch-slider::after {
		content: '';
		display: block;
		width: 0;
		height: 15px;
		border-left: 1px solid #b6b6b6;
		-webkit-box-shadow: 0 5px 0 0;
		box-shadow: 5px 0 0 0 #b6b6b6, -5px 0 0 0 #b6b6b6;

		position: absolute;
		right: -16px;
		top: 50%;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	#mohe-demo .mh-switch.off .mh-switch-slider {
		-webkit-transform: translateX(-100%);
		transform: translateX(-100%);
	}
</style>
<div id="mohe-demo" class="g-mohe">
	<a class="mh-switch" href="#switch">
		<div class="mh-switch-slider"></div>
	</a>
</div>
<script type="text/javascript">
	_loader.use('zepto',function(){

		var scope = $('#mohe-demo');

		var saveBtn = $('.mh-switch', scope)
		saveBtn.on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('off');
		});
	});
</script>