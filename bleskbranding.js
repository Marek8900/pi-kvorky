

<script src="https://cdn.performax.cz/acc/accp.js"></script>
<div id="ssp-zone-269327" align="center" style="margin: auto;"></div>
<script>
  if (window.innerWidth >= 1366) {
		document.body.insertAdjacentHTML('afterbegin', '<div id="ssp-branding-269327"></div>');
		var adZone = {
		zoneId: 269327,
		width: 2000,
		id: "ssp-branding-269327",
		elements: [
	{id: "ssp-zone-269327", width: 970, height: 210},
	{id: "ssp-branding-269327", width: 2000, height: 1400}
    ],
      options:{
                infoCallback: function(ad, data) {
                    new Image().src="https://cdn.performax.cz/sssp.gif?"+ad.zoneId+","+ad.type+","+new Date().getTime();
                    if(ad.type == "empty"){
                      console.log("[px branding]", ad.type);
                    }
                }
            }
	};
	} else {
		var adZone = {
		zoneId: 269327,
		width: 970,
		height: 210,
		id: "ssp-zone-269327",
    options:{
                infoCallback: function(ad, data) {
                    new Image().src="https://cdn.performax.cz/sssp.gif?"+ad.zoneId+","+ad.type+","+new Date().getTime();
                    if(ad.type == "empty"){
                      console.log("[px leaderboard]", ad.type);
                    }
                }
            }  
	}
	}
	
	accp.conf.documentWriteOverride = false;
	accp.getAds(adZone);
   
</script>