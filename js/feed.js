"use strict";
var feeds = [];

alert(feeds.length);

function feedService() {
	alert('feedService');
	var feed = {
		id:0,
		type: ""
	}

	feed.prototype.getId = function () {
		return this.id;
	}
	
	feed.prototype.getType = function () {
		return this.type;
	}

	function createFeed() {
	alert('createFeed');
		var inFeed = document.getElementById("post").value;
		alert(inFeed);
		if(inFeed.toUpperCase().indexOf('HTTP:') || inFeed.toUpperCase().indexOf('WWW.')) {
			var urlFeed = Object.create(feed);
			urlFeed.id = feeds.length +1;
			urlFeed.type = "URL";
			urlFeed.prototype.getFeed = function (){
				this.url;
			}
			urlFeed.url = inFeed;
			urlFeed.createdOn =  Date.now();
			feeds.push(urlFeed);
			alert(urlFeed);
			alert(feeds.length);
			
		} else {
			var textFeed = Object.create(feed);
			textFeed.id = feeds.length +1;
			textFeed.type = "TEXT";
			textFeed.prototype.getFeed = function (){
				this.text;
			}
			textFeed.text = inFeed;
			textFeed.createdOn =  Date.now();
			feeds.push(textFeed);
			alert(textFeed);
			alert(feeds.length);
		}
	}

	this.deleteFeed = function (){
	}


}

function addFeed(){
alert('addFeed');
feedService.createFeed();
}
