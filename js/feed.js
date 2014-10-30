"use strict";

var feeds = [];
alert('test');

var feedService = (function() {
	alert('feedService');
	var feed = {
		id:0,
		type: ""
	};
	
	alert(feed);
	
	feed.getId = function() {
		return this.id;
	};
	
	feed.getType = function() {
		return this.type;
	};
	return {
		createFeed : function() {
		alert('createFeed');
			var inFeed = document.getElementById("post").value;
			var imgPath ="../../img/smiley.gif";
			if( inFeed.length === 0){
				alert("Post can't be empty");
				return;
			}
			alert(inFeed);
			if(inFeed.toUpperCase().indexOf('HTTP:') > 0 || inFeed.toUpperCase().indexOf('WWW.') > 0) {
				var urlFeed = Object.create(feed);
				if(feeds.length > 0) {
					textFeed.id = feeds[feeds.length-1].id+1;
				} else {
					textFeed.id = 1 ;
				}
				urlFeed.type = "URL";
				urlFeed.getFeed = function() {
					this.url;
				}
				urlFeed.url = inFeed;
				urlFeed.createdOn =  Date.now();
				feeds.push(urlFeed);
				alert(urlFeed);
				alert(feeds.length);
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
					this.text;
				}
				textFeed.text = inFeed;
				textFeed.createdOn =  Date.now();
				feeds.push(textFeed);
				alert(textFeed);
				alert(feeds.length);
				alert(textFeed.id);
				addFeedInHTML(textFeed.type, textFeed.id, textFeed.text, imgPath, textFeed.createdOn);
			}
			
		},

		deleteFeed : function() {
		alert('inside deleteFeed')			
		}
	}

} );

function addFeed() {
alert('addFeed');
var feedobj = feedService();
feedobj.createFeed();
}

function deleteFeed(feedId) {
alert(feedId);
alert('deleteFeed');
var feedobjtodel = feedService();
feedobjtodel.deleteFeed();
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