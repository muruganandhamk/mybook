"use strict";

var profile = {
		userId: "",
		name: "",
		age: "",
		phone: "",
		email: "",
		address: ""
	}
	profile.getUserId = function() {
		return this.userId;
	}
	
	profile.getName = function() {
		return this.name;
	}
	
	profile.getAge = function() {
		return this.age;
	}
	
	profile.getPhone = function() {
		return this.phone;
	}
	
	profile.getEmail = function() {
		return this.email;
	}
	
	profile.getAddress = function() {
		return this.address;
	}
	
var profileService = (function() {

	  return {
		  saveProfile : function(profile) { 
			localStorage.setItem(profile.userId,JSON.stringify(profile));
		  }
	  }
	
} );



function saveProfileData() {

}

//bannerImage = document.getElementById('bannerImg');
//imgData = getBase64Image(bannerImage);
//localStorage.setItem("imgData", imgData);


/*function getBase64Image(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to guess the
    // original format, but be aware the using "image/jpg" will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}*/



//<img src="" id="tableBanner" />


//var dataImage = localStorage.getItem('imgData');
//bannerImg = document.getElementById('tableBanner');
//bannerImg.src = "data:image/png;base64," + dataImage;



