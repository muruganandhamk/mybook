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

var urlFeed = Object.create(feed);
var textFeed = Object.create(feed);

urlFeed.prototype.getFeed = function (){
this.url;
}

textFeed.prototype.getFeed = function (){
this.text;
}

var feedService = (function () {

} )