//version 5.
var map;var p;var zoom;var marker; var markers = []; var gps_button; var hinanj;var marker11;var url_hash;
var todou ;var ido; var keido; var hash;var back_b;

	function start(x, y, z){
		map = L.map('map',{zoomControl: false});
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
  		hash = new L.Hash(map);
  		L.control.zoom({position: 'topright'}).addTo(map);
		back_b = L.easyButton('fa-undo', function(){rn();}, {position: 'topright'}).addTo(map);
		url_hash = location.hash;
		if(url_hash === ""){map.setView([x, y], z);}
	}

function rn(){
		location.href = "../index.html#soutei";
}

	function GPS(){
		if (navigator.geolocation) {
       	navigator.geolocation.getCurrentPosition(gps_get,gps_error);
     	} else {
       	alert("エラーが発生したので、現在地を取得できませんでした。");
     	}
	}

	function gps_get(position) {

    //成功したら…
    ido = position.coords.latitude;
    keido = position.coords.longitude;
    //位置情報取得後、地図表示
   		map.setView([ido, keido], 17);
	//marker = L.marker([ido, keido]);
	//map.addLayer(marker);
	//var pulsingIcon = L.icon.pulse({iconSize:[12,12],color:'blue'});
	
	L.marker([ido, keido]).addTo(map);

	
	}

	function gps_error(error) {
   		//失敗したら…
       alert("エラーが発生したので、現在地を取得できませんでした。");
	}

    function aichi_ini() {
		start(35.002, 137.200, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/23/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/23/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/23/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/23/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/23/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/23/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/23/{z}/{x}/{y}.png', {opacity: 0.8});
		
		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7
		};
		L.control.layers(baseMaps).addTo(map);

	}

    function hokkaido_ini() {
		start(43.469, 141.987, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/01/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/01/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/01/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/01/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/01/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/01/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/01/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7
		};
		L.control.layers(baseMaps).addTo(map);	}

    function aomori_ini() {
    	start(40.651, 140.724, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/02/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/02/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/02/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/02/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/02/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/02/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/02/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function iwate_ini() {
		start(39.686, 141.224, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/03/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/03/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/03/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/03/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/03/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/03/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/03/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function akita_ini() {
		start(39.529, 140.389, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/05/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/05/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/05/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/05/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/05/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/05/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/05/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);
	}

    function miyagi_ini() {
		start(38.505, 140.707, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/04/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/04/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/04/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/04/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/04/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/04/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/04/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);
	}

    function yamagata_ini() {
		start(38.428, 140.026, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/06/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/06/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/06/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/06/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/06/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/06/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/06/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function fukushima_ini() {
		start(37.392, 139.883, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/07/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/07/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/07/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/07/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/07/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/07/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/07/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function nigata_ini() {
		start(37.375, 138.735, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/15/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/15/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/15/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/15/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/15/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/15/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/15/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function tochigi_ini() {
		start(36.673, 139.653, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/09/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/09/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/09/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/09/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/09/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/09/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/09/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function gunma_ini() {
		start(36.461, 138.950, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/10/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/10/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/10/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/10/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/10/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/10/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/10/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function ibaraki_ini() {
		start(36.271, 140.235, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/08/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/08/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/08/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/08/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/08/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/08/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/08/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function tiba_ini() {
		start(35.488, 139.966, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/12/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/12/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/12/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/12/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/12/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/12/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/12/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function saitama_ini() {
		start(35.929, 139.147, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/11/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/11/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/11/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/11/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/11/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/11/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/11/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function tokyo_ini() {
		start(35.595, 139.592, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/13/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/13/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/13/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/13/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/13/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/13/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/13/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function kanagawa_ini() {
		start(35.3980, 139.3314, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/14/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/14/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/14/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/14/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/14/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/14/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/14/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function yamanashi_ini() {
		start(35.532, 138.565, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/19/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/19/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/19/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/19/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/19/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/19/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/19/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);
	}

    function nagano_ini() {
		start(35.960, 137.928, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/20/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/20/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/20/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/20/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/20/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/20/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/20/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function shizuoka_ini() {
		start(35.012, 138.214, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/22/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/22/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/22/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/22/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/22/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/22/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/22/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function gifu_ini() {
		start(35.724, 136.890, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/21/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/21/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/21/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/21/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/21/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/21/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/21/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function toyama_ini() {
		start(36.624, 137.016, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/16/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/16/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/16/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/16/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/16/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/16/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/16/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function ishikawa_ini() {
		start(36.844, 136.785, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/17/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/17/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/17/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/17/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/17/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/17/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/17/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function fukui_ini() {
		start(35.898, 136.192, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/18/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/18/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/18/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/18/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/18/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/18/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/18/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function shiga_ini() {
		start(35.255, 135.950, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/25/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/25/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/25/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/25/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/25/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/25/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/25/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function mie_ini() {
		start(34.606, 136.225, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/24/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/24/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/24/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/24/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/24/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/24/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/24/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function kyoto_ini() {
		start(35.156, 135.368, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/26/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/26/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/26/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/26/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/26/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/26/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/26/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function osaka_ini() {
		start(34.692, 135.511, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/27/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/27/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/27/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/27/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/27/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/27/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/27/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function nara_ini() {
		start(34.207, 135.818, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/29/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/29/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/29/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/29/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/29/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/29/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/29/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function wakayama_ini() {
		start(33.975, 135.368, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/30/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/30/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/30/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/30/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/30/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/30/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/30/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function hyogo_ini() {
		start(35.043, 134.484, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/28/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/28/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/28/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/28/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/28/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/28/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/28/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function tottori_ini() {
		start(35.313, 133.786, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/31/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/31/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/31/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/31/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/31/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/31/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/31/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function okayama_ini() {
		start(34.940, 133.550, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/33/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/33/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/33/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/33/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/33/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/33/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/33/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function shimane_ini() {
		start(34.854, 132.347, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/32/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/32/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/32/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/32/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/32/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/32/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/32/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function hiroshima_ini() {
		start(34.556, 132.512, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/34/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/34/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/34/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/34/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/34/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/34/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/34/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function yamaguchi_ini() {
		start(34.207, 131.550, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/35/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/35/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/35/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/35/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/35/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/35/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/35/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function kagawa_ini() {
		start(34.057, 133.726, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/37/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/37/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/37/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/37/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/37/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/37/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/37/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function tokushima_ini() {
		start(33.852, 133.923, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/36/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/36/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/36/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/36/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/36/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/36/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/36/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function ehime_ini() {
		start(33.679, 132.764, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/38/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/38/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/38/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/38/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/38/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/38/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/38/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function kochi_ini() {
		start(33.390, 133.259, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/39/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/39/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/39/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/39/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/39/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/39/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/39/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function fukuoka_ini() {
		start(33.431, 130.583, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/40/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/40/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/40/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/40/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/40/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/40/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/40/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function saga_ini() {
		start(33.170, 130.073, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/41/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/41/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/41/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/41/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/41/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/41/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/41/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

	function oita_ini() {
		start(33.128, 131.083, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/44/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/44/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/44/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/44/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/44/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/44/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/44/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function nagasaki_ini() {
		start(32.875, 129.661, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/42/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/42/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/42/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/42/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/42/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/42/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/42/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function kumamoto_ini() {
		start(32.426, 130.759, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/43/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/43/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/43/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/43/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/43/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/43/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/43/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function miyazaki_ini() {
		start(32.213, 131.188, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/45/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/45/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/45/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/45/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/45/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/45/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/45/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function kagoshima_ini() {
		start(31.541, 130.715, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/46/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/46/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/46/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/46/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/46/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/46/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/46/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

    function okinawa_ini() {
		start(26.436, 127.996, 8);
    	var t1 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki_data/47/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t2 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki_data/47/{z}/{x}/{y}.png', {opacity: 0.8});
    	var t3 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki_data/47/{z}/{x}/{y}.png', {opacity: 0.8});
		var t4 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_dosekiryukikenkeiryu_data/47/{z}/{x}/{y}.png', {opacity: 0.8});
		var t5 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_kyukeisyachihoukai_data/47/{z}/{x}/{y}.png', {opacity: 0.8});
		var t6 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_jisuberikikenkasyo_data/47/{z}/{x}/{y}.png', {opacity: 0.8});
		var t7 = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/05_nadarekikenkasyo_data/47/{z}/{x}/{y}.png', {opacity: 0.8});

		var baseMaps = {
    		"急傾斜地の崩壊警戒区域": t1,
    		"土石流警戒区域": t2,
    		"地すべり警戒区域": t3, "土石流危険渓流": t4, "急傾斜地崩壊危険箇所": t5, "地すべり危険箇所": t6, "雪崩危険個所": t7    		
		};
		L.control.layers(baseMaps).addTo(map);	}

	function GPS(){
		if (navigator.geolocation) {
       	navigator.geolocation.getCurrentPosition(gps_get,gps_error);
     	} else {
       	alert("エラーが発生したので、現在地を取得できませんでした。");
     	}
	}

	function gps_get(position) {

    //成功したら…
    ido = position.coords.latitude;
    keido = position.coords.longitude;
    
    //位置情報取得後、地図表示
   		map.setView([ido, keido], 17);
	//marker = L.marker([ido, keido]);
	//map.addLayer(marker);
	var pulsingIcon = L.icon.pulse({iconSize:[12,12],color:'blue'});
	
	marker1 = L.marker([ido, keido] ,{icon: pulsingIcon}).addTo(map);
	
	}

	function gps_error(error) {
   		//失敗したら…
       alert("エラーが発生したので、現在地を取得できませんでした。");
	}

	function sty(feature) {return feature.properties && feature.properties.style;}

	function iro(feature, latlng) {
				return L.circleMarker(latlng, {
					radius: 10,
					fillColor: "#2EFE2E",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				});
	}

	function geo_k(feature, layer) {
    var popup;
    if (feature.properties && feature.properties.Name) {
        popup = "名称：" + feature.properties.Name;
    }
    
    if (feature.properties && feature.properties.Jusho){
    	popup += '<br>住所：' + feature.properties.Jusho;
    }

    if (feature.properties && feature.properties.kouzui){
    	popup += '<br>洪水：<span id = "pop_moji">' + feature.properties.kouzui + '</span>';
    }

    if (feature.properties && feature.properties.gake){
    	popup += '　がけ崩れ、土石流及び地滑り：<span id = "pop_moji">' + feature.properties.gake + '</span>';
    }

    if (feature.properties && feature.properties.takashio){
    	popup += '　高潮：<span id = "pop_moji">' + feature.properties.takashio + '</span>';
    }

    if (feature.properties && feature.properties.jishin){
    	popup += '　地震：<span id = "pop_moji">' + feature.properties.jishin + '</span>';
    }

    if (feature.properties && feature.properties.tsunami){
    	popup += '　津波：<span id = "pop_moji">' + feature.properties.tsunami + '</span>';
    }

    if (feature.properties && feature.properties.kaji){
    	popup += '　大規模な火事：<span id = "pop_moji">' + feature.properties.kaji + '</span>';
    }

    if (feature.properties && feature.properties.naisui){
    	popup += '　内水氾濫：<span id = "pop_moji">' + feature.properties.naisui + '</span>';
    }

    if (feature.properties && feature.properties.kazan){
    	popup += '　火山：<span id = "pop_moji">' + feature.properties.kazan + '</span>';
    }

    layer.bindPopup(popup);
	}

