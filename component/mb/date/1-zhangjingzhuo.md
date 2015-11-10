<style>
	#mohe-demo .mh-ui-calendar{
		position:relative;
		z-index: 1;
	}
	#mohe-demo .mh-ui-calendar .mh-fold{
		position: absolute;
		color: #fff;
		display: block;
		right: 0;
		top: 0px;
		width: 35px;
		height: 35px;
		z-index: 3;
	}
	#mohe-demo .mh-ui-calendar .mh-fold::after{
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -5px;
		content: '';
		display: block;
		width: 0;
		height: 0;
		border: 5px solid #c7c7c7;
		border-color: #c7c7c7 transparent transparent transparent;
	}
	#mohe-demo .mh-ui-calendar.mh-ui-focus .mh-fold::after{
		margin-top: -8px;
		border-color: transparent transparent #c7c7c7 transparent;
	}
	#mohe-demo .mh-ui-calendar .mh-ui-label{
		position: absolute;
		color: #fff;
		display: block;
		top: 19px;
		margin-top: -0.625em;
		background-color: #00aac3;
		font-size: 12px;
		width: 33px;
		height: 15px;
		text-align: center;
		line-height: 15px;
		left:10px;
	}
	#mohe-demo .mh-ui-calendar .mh-ui-week{
		position:absolute;
		top:9px;
		left:145px;
	}
	#mohe-demo .mh-ui-calendar .mh-ui-text{
		width: 100%;
		height: 36px;
		padding: 8px 29px 8px 48px;
		background:none;
		font: 14px/20px '\5FAE\8F6F\96C5\9ED1';
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		position:relative;
		z-index:2;
		border:1px solid #ddd;
	}
	/* calendar default */
	#mohe-demo .mh-ui-calist{
		display: none;
	}
	#mohe-demo .mh-ui-focus .mh-ui-calist{
		display: block;
	}
	#mohe-demo .ui-calendar {
		width: 100%;
		height: 264px;
		line-height: 25px;
		font-size: 14px;
		border:1px solid #d8d8d8;
		box-sizing:border-box;
		margin-top: -1px;
		background-color: #fff;
	}
	#mohe-demo .ui-calendar-header {
		height: 30px;
		line-height: 30px;
		border-bottom: 1px solid #d8d8d8;
		background-color: #fafafa;
		display: -webkit-box;
		display: -moz-box;
		display: box;
	}

	#mohe-demo .ui-calendar-header a {
		display: block;
		width: 11.76%;
		text-align: center;
	}
	#mohe-demo .ui-calendar-prev{
		border-right: 1px solid #ddd;
	}
	#mohe-demo .ui-calendar-next{
		border-left: 1px solid #ddd;
	}
	#mohe-demo .ui-calendar-prev:after,
	#mohe-demo .ui-calendar-next:after{
		content: '';
		display: inline-block;
		width: 7px;
		height: 7px;
		border-bottom: 2px solid #bbb;
		border-right: 2px solid #bbb;
		-webkit-transform: rotate(135deg);
		transform: rotate(135deg);
		margin-left: 5px;
		margin-top: 12px;
	}
	#mohe-demo .ui-calendar-next:after{
		-webkit-transform: rotate(-45deg);
		transform: rotate(-45deg);
		margin-left: -2px;
	}
	#mohe-demo .ui-calendar-header a.ui-state-hover {
		background-color: #ccc;
	}
	#mohe-demo .ui-calendar-header .ui-calendar-title {
		display: block;
		-webkit-box-flex: 1.0;
		-moz-box-flex: 1.0;
		box-flex: 1.0;
		text-align: center;
		font-size: 13px;
		color: #333;
	}
	#mohe-demo .ui-calendar-calendar {
		width: 100%;
		border-collapse: collapse;
	}

	#mohe-demo .ui-calendar-calendar th,
	#mohe-demo .ui-calendar-calendar td {
		text-align: center;
		color: #666;
		background: #fff;
		font-weight: normal;
		height: 29px;
		line-height: 29px;
		border-left: 10px solid #fff;
	}
	#mohe-demo .ui-calendar-calendar tr th:first-child,
	#mohe-demo .ui-calendar-calendar tr td:first-child{
		border-left-width:5px;
	}
	#mohe-demo .ui-calendar-calendar tr th:last-child,
	#mohe-demo .ui-calendar-calendar tr td:last-child{
		border-right:5px solid #fff;
	}
	#mohe-demo .ui-calendar-calendar td{
		border-bottom:4px solid #fff;
	}
	#mohe-demo .ui-calendar-calendar thead th {
		height: 31px;
		line-height: 31px;
		font-size: 12px;
	}

	#mohe-demo .ui-calendar-gap{
		display: none;
	}
	#mohe-demo .ui-calendar-calendar a,
	#mohe-demo .ui-calendar-calendar span {
		text-decoration: none;
		color:#000;
		display: block;
		font-size: 12px;
	}

	#mohe-demo .ui-calendar-calendar tr.ui-calendar-gap td {
		line-height: 5px;
		font-size: 0;
		border: none;
		background: transparent;
	}
	#mohe-demo .ui-calendar-calendar .ui-calendar-week-end span{
		color: #5cb642;
	}
	#mohe-demo .ui-calendar-calendar .ui-calendar-unSelectable span{
		color: #c8c8c8;
	}

	#mohe-demo .ui-calendar-calendar .ui-calendar-today {
		background: #f0f0f0;
	}
	#mohe-demo .ui-calendar-calendar .ui-calendar-current-day {
		background: #5cb642;
	}
	#mohe-demo .ui-calendar-calendar .ui-calendar-current-day a{
		color: #fff;
	}

	#mohe-demo .ui-calendar-calendar td.ui-state-hover {
		background: #ccc;
	}
</style>
<div id="mohe-demo" class="g-mohe">
	<div class="mh-ui-calendar">
		<div class="mh-item mh-out">
			<span class="mh-ui-label">日期</span>
			<span class="mh-ui-week">星期五</span>
			<input type="text" name="date" class="mh-ui-text js-date-input" data-day="out" readonly="readonly" value="2014-08-29" autocomplete="off">
			<a href="javascript:;" class="mh-fold js-mh-fold"></a>
		</div>
		<div class="mh-ui-calist js-mh-date"></div>
	</div>
</div>
<script>
	_loader.add("novaui","http://s0.qhimg.com/static/0a1bdb02d160ab04.js");
	_loader.add("calendar","http://s6.qhimg.com/!d4aef3a1/calendar.js");
	_loader.use("zepto,novaui,calendar",function(){
		var root = $("#mohe-demo"),
			dataInput = root.find('.js-mh-date').eq(0),
			inputs = root.find('.js-date-input'),
			startMinDate = showDate(0);

		/*文本框显示判断*/
		$('.js-date-input',root).on('focus',function(e){
			e.preventDefault();
			var t = $(this),
				wrap = t.closest('.mh-ui-calendar');
			wrap.addClass('mh-ui-focus');
		});

		$('.js-mh-fold',root).on('click',function(e){
			e.preventDefault();
			var t = $(this),
				wrap = t.closest('.mh-ui-calendar');
			wrap.toggleClass('mh-ui-focus');
		});
		/*得到前n天或后n天的日期*/
		function showDate(n,day){
			var date,m,d;
			if(day){
				date = new Date(day);
			}else{
				date = new Date();
			}
			date.setDate(date.getDate()+n);
			date = $.calendar.formatDate(date);/*调用calendar.js中的格式化日期方法*/
			return date;
		};
		/*日历*/
		function initCalendar(input,date,minDate,effect){
			var calendar = new Calendar({
				minDate: minDate,
				element: input,
				firstDay: 0,
				swipeable: true
			});
			calendar.selectedDate(date);
			calendar.refresh();
			calendar.on('select',function(e,date,dateStr){
				var week = ["日","一","二","三","四","五","六"],
					day = date.getDay(),
					weekStr = dateStr,
					wrap = $(e.target.element).closest('.mh-ui-calendar'),
					input = wrap.find('.js-date-input'),
					inDateInput = $('input[name="checkin"]',root),
					inDateInputXC = $('input[name="atime"]',root),
					outDateInput = $('input[name="checkout"]',root),
					offDateInput = $('input[name="days"]',root);
				input.val(weekStr);
				$('.mh-ui-week').html('星期'+week[day]);
				var dateInputs = $('.js-mh-date',root);
				if(dateInputs.index($(e.target.element)) == 0){
					inDateInput.val(dateStr);
					inDateInputXC.val(dateStr);
				};
				if(dateInputs.index($(e.target.element)) == 1){
					outDateInput.val(dateStr);
				};
				wrap.removeClass('mh-ui-focus');
				// 判断该日历是否有关联
			});
		};
		initCalendar(dataInput,startMinDate,showDate(0),true);
	});
</script>