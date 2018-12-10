$(function(){
	var song = [
		{
			'cover' : 'msc/images/1001.png',
			'src' : 'msc/music/pdd.mp3',
			'title' : 'test demo fine music of pdd'
		},	
		
	];

	var audioFn = audioPlay({
		song : song,
		autoPlay : true
	});	
});