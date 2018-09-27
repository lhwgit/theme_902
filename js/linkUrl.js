(function(){
                var url_param = document.getElementById('J-call-app').getAttribute('link');
                var ua = navigator.userAgent.toLowerCase();
                var t;
                var config = {
                    /*scheme:必须*/
                    scheme_IOS: 'fabloox-ios://api.fabloox.com' + url_param,
                    scheme_Android: 'fabloox-android://api.fabloox.com' + url_param,
                    //download_url: document.getElementById('J-download-app').value,
                    ios_download_url: 'https://itunes.apple.com/cn/app/fabloox-makeup-tips/id1354875964?mt=8&uo=4',
                    android_download_url: 'https://play.google.com/store/apps/details?id=com.adc.fabloox',
                    timeout: 600
                };

                function openclient() {
                    var startTime = Date.now();

                    var ifr = document.createElement('iframe');

                    if (ua.indexOf('os') > 0) {
                    		//window.open(config.scheme_IOS);
                    		window.location = config.scheme_IOS
                    } else {
                    		ifr.src = ua.indexOf('os') > 0 ? config.scheme_IOS : config.scheme_Android;
                    		ifr.style.display = 'none';
                    		document.body.appendChild(ifr);
                    }
                    //ifr.src = ua.indexOf('os') > 0 ? config.scheme_IOS : config.scheme_Android;
                    //ifr.style.display = 'none';
                    //document.body.appendChild(ifr);

                    var t = setTimeout(function() {
                        var endTime = Date.now();
                        
                        // document.getElementById("elapse_time").value = endTime - startTime;
                        if (!startTime || endTime - startTime < config.timeout + 200) {
                        	//window.location = config.download_url;
                        	if (ua.indexOf('os') > 0) {
                        		window.location = config.ios_download_url;
                        	} else {
                        		window.location = config.android_download_url;
                        	}  
                        } else {
                            
                        }
                    }, config.timeout);

                    window.onblur = function() {
                        clearTimeout(t);
                    }
                }
                window.addEventListener("DOMContentLoaded", function(){
                    document.getElementById("J-call-app").addEventListener('click', openclient, false);

                }, false);
            })()