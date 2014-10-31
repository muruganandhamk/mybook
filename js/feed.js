"use strict";

var feeds = [];

var feedService = (function() {

	var feed = {
		id:0,
		type: ""
	};
	
	feed.getId = function() {
		return this.id;
	};
	
	feed.getType = function() {
		return this.type;
	};

	return {
		createFeed : function() {
			var inFeed = document.getElementById("post").value;
			var imgPath ="../../img/smiley.gif";
			if( inFeed.length === 0){
				alert("Post can't be empty");
				return;
			}			
			var d = new Date();								
			var createdOn = d.getDate() + '-' +(d.getMonth()+1)+'-'+d.getFullYear()+ ':'+d.getHours()+ ':'+d.getMinutes()+ ':'+d.getSeconds();
			if(inFeed.toUpperCase().indexOf('HTTP:') >= 0 || inFeed.toUpperCase().indexOf('WWW.') >= 0) {			
				var urlFeed = Object.create(feed);
				if(feeds.length > 0) {
					urlFeed.id = feeds[feeds.length-1].id+1;
				} else {
					urlFeed.id = 1 ;
				}
				urlFeed.type = "URL";
				
				urlFeed.getFeed = function() {
					return this.url;
				}
				
				if(inFeed.toUpperCase().indexOf('WWW.') == 0){
				inFeed = "http://"+inFeed;
				}
				urlFeed.url = inFeed;
				urlFeed.createdOn =  createdOn;
				feeds.push(urlFeed);
				addFeedInHTML(urlFeed.type, urlFeed.id, urlFeed.url, imgPath, urlFeed.createdOn);
			} else {
				var textFeed = Object.create(feed);
				if(feeds.length > 0) {
					textFeed.id = feeds[feeds.length-1].id+1;
				} else {
					textFeed.id = 1 ;
				}
				textFeed.type = "TEXT";
				
				textFeed.getFeed = function() {
					return this.text;
				}
				textFeed.text = inFeed;
				
				textFeed.createdOn =  createdOn;
				feeds.push(textFeed);								
				addFeedInHTML(textFeed.type, textFeed.id, textFeed.text, imgPath, textFeed.createdOn);
			}
			document.getElementById("post").value ="";
			localStorage.setItem('testuserfeed',JSON.stringify(feeds));
		},

		deleteFeed : function(feedId) {		
			var i=0;
			for(var feedObj in feeds)	{			
				if(feeds[feedObj].getId() == feedId){				
					feeds.splice(i,1)
				}
				i++;
			}
			localStorage.setItem('testuserfeed',JSON.stringify(feeds));
			var imgPath ="../../img/smiley.gif";
			document.getElementById("feedDisplaySection").innerHTML="";
			for(var feedObj in feeds)	{			
				addFeedInHTML (feeds[feedObj].getType(), feeds[feedObj].getId(), feeds[feedObj].getFeed(), imgPath, feeds[feedObj].createdOn );
			}
		}
	}

} );

function addFeed() {
var feedobj = feedService();
feedobj.createFeed();
}

function deleteFeed(feedId) {
var feedobjtodel = feedService();
feedobjtodel.deleteFeed(feedId);
}

function loadFeeds() {

	/*var retrievedFeedObject = localStorage.getItem('testuserfeed');
	alert('Feeds' + retrievedFeedObject);
	var feeds = JSON.parse(localStorage.getItem('testuserfeed'));
	alert('Feeds object' + feeds);
	if(feeds != undefined && feeds != null) {
		var imgPath ="../../img/smiley.gif";
		document.getElementById("feedDisplaySection").innerHTML="";	
		for(var feedObj in feeds)	{			
			addFeedInHTML (feeds[feedObj].getType(), feeds[feedObj].getId(), feeds[feedObj].getFeed(), imgPath, feeds[feedObj].createdOn );
		}
	} else {
		//feeds = [];
	} */
}

//

function addFeedInHTML (feedtype, feedId, feedtext, imgPath, createdOn ) {
var strPosts = document.getElementById("feedDisplaySection").innerHTML;
var strNode = '<div class="feedDisplay"> ' +
					'<table style="width:100%;  position: absolute;"> ' +
					  '<tr>' +
						'<td rowspan=2 style="width:20%"><img src="' + imgPath + '" style="height=50px; width=50px;"/></td> ' ;
						if(feedtype == "TEXT") {
							strNode = strNode + '<td rowspan=2 style="width:60%">'+feedtext+'</td> ';
						}else if(feedtype == "URL") {
							strNode = strNode + '<td rowspan=2 style="width:60%"> <a href="'+ feedtext+'" target="_blank">'+feedtext+ '</a> </td> ' ;
						}
						strNode = strNode + '<td class="feeddelete"><label onclick="deleteFeed('+feedId+');">X<label></td>' +
					  '<tr> ' +
						'<td nowrap> '+ createdOn + '</td> ' +
					  '</tr> '+
					'</table> ' +
				'</div> '+
				'<div>&nbsp;</div> ';
document.getElementById("feedDisplaySection").innerHTML = strNode + strPosts;
				
}



