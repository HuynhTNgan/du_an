function doSearch(){
    var frm=document.forms["frm-search"];
    if(frm.words.value.length>0)
    frm.submit();

}

function showSearch()
{
	var url = new URL(window.location);
	var ws = url.searchParams.get("words");
	document.getElementById("searchDetail").innerHTML="<h1>Từ khóa tìm: </h1> <b>"+ws+"</b>";
}

function checkKeySearch(e){

var key =Event.which|| Event.keyCode;
    if(key==32) {doSearch();}

}



    var itemList={
	//ALBUM

    //17Carat  
       "sp17Carat":{
    "name": "17 Carat", "price":490000,
    "photo":"image/17Carat.png"	},

    
	//ALBUM

	//Boys Be
	"spBoysBe":{
		"name": "Boys Be", "price":480000,
		"photo":"image/BoysBe.jpeg"	},

    


	//ALBUM

	//LoveandLetter
	"spLoveandLetter":{
		"name": "Love & Letter", "price":480000,
		"photo":"image/LoveandLetter.jpg"	},


	//ALBUM

	//LoveandLetter Repackage
	"spLoveandLetterRe":{
		"name": "Love & Letter  Repackage", "price":490000,
		"photo":"image/LoveandLetterRepackage.jpg"	},


    //ALBUM

	//Going SEVENTEEN
	"spGoingSEVENTEEN":{
		"name": "Going SEVENTEEN", "price":480000,
		"photo":"image/GoingSEVENTEEN.jpg"	},

    //ALBUM

	//Al1
	"spAl1":{
		"name": "Al1", "price":480000,
		"photo":"image/Al1.jpg"	},

    //ALBUM

	//TEEN, AGE
	"spTeenAge":{
		"name": "TEEN, AGE", "price":390000,
		"photo":"image/TeenAge.jpg"	},


     //ALBUM

	//DIRECTOR'S CUT
	"spDirectorsCut":{
		"name": "DIRECTOR'S CUT", "price":490000,
		"photo":"image/DirectorsCut.jpg"	},


	 //ALBUM

	//We Make You
	"spWeMakeYou":{
		"name": "We Make You", "price":400000,
		"photo":"image/WeMakeYou.jpg"	},


	//ALBUM

	//You Make My Day
	"spYouMakeMyDay":{
		"name": "You Make My Day", "price":490000,
		"photo":"image/YouMakeMyDay.jpg"	},


	//ALBUM

	//You Make My Dawn
	"spYouMakeMyDawn":{
		"name": "You Make My Dawn", "price":420000,
		"photo":"image/YouMakeMyDawn.jpg"	},

	//ALBUM

	//An Ode
	"spAnOde":{
		"name": "An Ode", "price":500000,
		"photo":"image/AnOde.jpg"	},

	//헹가래 Heng:garæ
	"spHenggarae":{
		"name": "헹가래 Heng:garæ", "price":500000,
		"photo":"image/Henggarae.jpg"	},


	//24H
	"sp24H":{
		"name": "24H", "price":500000,
		"photo":"image/24H.jpg"	},


    //; [Semicolon]
	"spSemicolon":{
		"name": "; [Semicolon]", "price":345000,
		"photo":"image/Semicolon.png"	},

	//ひとりじゃない
	"spNotAlone":{
		"name": "ひとりじゃない", "price":400000,
		"photo":"image/NotAlone.jpg"	},


    //Your Choice
	"spYourChoice":{
		"name": "Your Choice", "price":375000,
		"photo":"image/YourChoice.jpg"	},


    //Attacca
	"spAttacca":{
		"name": "Attacca", "price":410000,
		"photo":"image/Attacca.png"	},


	//あいのちから
	"spPowerOfLove":{
		"name": "あいのちから", "price":400000,
		"photo":"image/PowerOfLove.jpg"	},



	//LIGHTSTICK

	//Shining Diamond Concert
	"spLightstickDebut":{
		"name": "Shining Diamond Concert", "price":129000,
		"photo":"lightstick/LightstickDebut.jpg"	},


	//LIGHTSTICK

	//Carat Bong
	"spCaratBongVer1":{
		"name": "Carat Bong", "price":900000,
		"photo":"lightstick/CaratBongVer1.jpg"	},

	//LIGHTSTICK

	//Carat Bong Ver.2
	"spCaratBongVer2":{
		"name": "Carat Bong  Ver.2", "price":950000,
		"photo":"lightstick/CaratBongVer2.jpg"	},


	//LIGHTSTICK

	//SEVENTEEN - SOGO
	"spSogo":{
		"name": "SEVENTEEN - SOGO", "price":950000,
		"photo":"lightstick/Sogo.jpg"	},


	//CARDS

	//Postcard 17 Carat
	"spCards17Carat":{
		"name": "Postcard 17 Carat", "price":500000,
		"photo":"cards/Cards17Carat.jpg"	},


	//CARDS

	//Photocard Boys Be
	"spPhotoCardBoysBe":{
		"name": "Photocard Boys Be", "price":100000,
		"photo":"cards/PhotoCardBoysBe.jpg"	},

	//CARDS

	//Postcard Boys Be
	"spPostCardBoysBe":{
		"name": "Postcard Boys Be", "price":100000,
		"photo":"cards/PostCardBoysBe.jpg"	},


	//CARDS

	//Poster Love & Letter
	"spPosterLoveandLetter":{
		"name": "Poster Love & Letter", "price":65000,
		"photo":"cards/PosterLoveandLetter.jpg"	},

	//CARDS

	//Bookmark Love & Letter
	"spBookmarkLoveandLetter":{
		"name": "Bookmark Love & Letter", "price":120000,
		"photo":"cards/BookmarkLoveandLetter.jpg"	},


	


	//CARDS

	//Poster Going SEVENTEEN
	"spPosterGoingSEVENTEEN":{
		"name": "Poster Going SEVENTEEN", "price":50000,
		"photo":"cards/PosterGoingSEVENTEEN.jpg"	},


	//CARDS

	//Photocards Al1
	"spCardAl1":{
		"name": "Photocards Al1", "price":200000,
		"photo":"cards/CardAl1.jpg"	},

	//CARDS

	//CGV - Cards (Power of Love - The Movie)
	"spCGVCardMovie":{
		"name": "CGV - Cards (Power of Love - The Movie)", "price":300000,
		"photo":"cards/CGVCardMovie.jpg"	},


	


	//CARDS

	//ID Cards
	"spIDCards":{
		"name": "ID Cards", "price":350000,
		"photo":"cards/IDCards.jpg"	},


	//CARDS

	//Netflix Cards
	"spNetflixCards":{
		"name": "Netflix Cards", "price":200000,
		"photo":"cards/NetflixCards.jpg"	},



	//Goods KPOP

	//Fan
	"spSEVENTEENFan":{
		"name": "Fan", "price":250000,
		"photo":"goods/SEVENTEENFan.jpg"	},


	//Goods KPOP

	//Binder
	"spBinder":{
		"name": "Binder", "price":150000,
		"photo":"goods/Binder.jpg"	},


	//Goods KPOP

	//Gel Pen
	"spGelPen":{
		"name": "Gel Pen", "price":200000,
		"photo":"goods/GelPen.png"	},


	//Goods KPOP

	//Cold Cup
	"spColdCup":{
		"name": "Cold Cup", "price":390000,
		"photo":"goods/ColdCup.png"	},



	//Goods KPOP

	//Keyring
	"spKeyring":{
		"name": "Keyring", "price":180000,
		"photo":"goods/Keyring.png"	},


	//Goods KPOP

	//Hoodie
	"spHoodie":{
		"name": "Hoodie", "price":450000,
		"photo":"goods/Hoodie.jpg"	},


	//Goods KPOP

	//Backpack
	"spBackpack":{
		"name": "Backpack", "price":240000,
		"photo":"goods/Backpack.jpg"	},


	//Goods Anime

	//Figure Uzui Tengen
	"spFigureUzui":{
		"name": "Figure Uzui Tengen", "price":900000,
		"photo":"animegoods/FigureUzui.jpg"	},


	//Goods Anime

	//Figure Tomioka
	"spFigureTomioka":{
		"name": "Figure Tomioka", "price":900000,
		"photo":"animegoods/FigureTomioka.jpg"	},


	//Goods Anime

	//Figure Rengoku
	"spFigureRengoku":{
		"name": "Figure Rengoku", "price":900000,
		"photo":"animegoods/FigureRengoku.jpg"	},


	//Goods Anime

	//Naruto 72 Limited
	"spNaruto72":{
		"name": "Naruto 72 Limited", "price":110000,
		"photo":"animegoods/Naruto72.png"	},


	//Goods Anime

	//Conan 100
	"spConan100":{
		"name": "Conan 100", "price":150000,
		"photo":"animegoods/Conan100.png"	},


	//Goods Anime

	//Figure Todoroki
	"spFigureShoto":{
		"name": "Figure Todoroki", "price":1000000,
		"photo":"animegoods/FigureShoto.jpg"	},


	//Goods Anime

	//Jujutsu Kaisen 0
	"spJujutsuKaisen0":{
		"name": "Jujutsu Kaisen 0", "price":300000,
		"photo":"animegoods/JujutsuKaisen0.png"	},


	//Goods Anime

	//Figure Naruto
	"spFigureNaruto":{
		"name": "Figure Naruto", "price":900000,
		"photo":"animegoods/FigureNaruto.jpg"	},


	//Goods Anime

	//Figure Sakura
	"spFigureSakura":{
		"name": "Figure Sakura", "price":1000000,
		"photo":"animegoods/FigureSakura.jpg"	},


	//Goods Anime

	//Figure Sasuke
	"spFigureSasuke":{
		"name": "Figure Sasuke", "price":1000000,
		"photo":"animegoods/FigureSasuke.jpg"	},


	//SALE

	//You Make My Day
	"spYouMakeMyDay17K":{
		"name": "You Make My Day (Sale 17K)", "price":17000,
		"photo":"image/YouMakeMyDay.jpg"	},


	//SALE

	//Shining Diamond Concert
	"spLightstickDebut17K":{
		"name": "Shining Diamond Concert (Sale 17K)", "price":17000,
		"photo":"lightstick/LightstickDebut.jpg"	},

	//SALE

	//Poster Love & Letter
	"spPosterLoveandLetter17K":{
		"name": "Poster Love & Letter (Sale 17K)", "price":17000,
		"photo":"cards/PosterLoveandLetter.jpg"	},

	//SALE

	//Gel Pen
	"spGelPen17K":{
		"name": "Gel Pen (Sale 17K)", "price":17000,
		"photo":"goods/GelPen.png"	},


	//SALE

	//Conan 100
	"spConan10017K":{
		"name": "Conan 100 (Sale 17K)", "price":17000,
		"photo":"animegoods/Conan100.png"	},


	




    }


	//ALBUM

    function addCart(sp17Carat){
    var number =parseInt(document.getElementById(sp17Carat).value);
    var name=itemList[sp17Carat].name;

    if(number == 0) return 0;

    if(typeof localStorage[sp17Carat] === "undefined"){
    window.localStorage.setItem(sp17Carat, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(sp17Carat));
    if (current+number > 100){
        window.localStorage.setItem(sp17Carat,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(sp17Carat, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(sp17Carat))+".");
}
}   


    function addCart(spBoysBe){
    var number =parseInt(document.getElementById(spBoysBe).value);
    var name=itemList[spBoysBe].name;

    if(number == 0) return 0;

    if(typeof localStorage[spBoysBe] === "undefined"){
    window.localStorage.setItem(spBoysBe, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spBoysBe));
    if (current+number > 100){
        window.localStorage.setItem(spBoysBe,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spBoysBe, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spBoysBe))+".");
}
} 

    function addCart(spLoveandLetter){
    var number =parseInt(document.getElementById(spLoveandLetter).value);
    var name=itemList[spLoveandLetter].name;

    if(number == 0) return 0;

    if(typeof localStorage[spLoveandLetter] === "undefined"){
    window.localStorage.setItem(spLoveandLetter, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spLoveandLetter));
    if (current+number > 100){
        window.localStorage.setItem(spLoveandLetter,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spLoveandLetter, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spLoveandLetter))+".");
}
} 


    function addCart(spLoveandLetterRe){
    var number =parseInt(document.getElementById(spLoveandLetterRe).value);
    var name=itemList[spLoveandLetterRe].name;

    if(number == 0) return 0;

    if(typeof localStorage[spLoveandLetterRe] === "undefined"){
    window.localStorage.setItem(spLoveandLetterRe, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spLoveandLetterRe));
    if (current+number > 100){
        window.localStorage.setItem(spLoveandLetterRe,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spLoveandLetterRe, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spLoveandLetterRe))+".");
}
}   

    function addCart(spGoingSEVENTEEN){
    var number =parseInt(document.getElementById(spGoingSEVENTEEN).value);
    var name=itemList[spGoingSEVENTEEN].name;

    if(number == 0) return 0;

    if(typeof localStorage[spGoingSEVENTEEN] === "undefined"){
    window.localStorage.setItem(spGoingSEVENTEEN, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spGoingSEVENTEEN));
    if (current+number > 100){
        window.localStorage.setItem(spGoingSEVENTEEN,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spGoingSEVENTEEN, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spGoingSEVENTEEN))+".");
}
}   


    function addCart(spAl1){
    var number =parseInt(document.getElementById(spAl1).value);
    var name=itemList[spAl1].name;

    if(number == 0) return 0;

    if(typeof localStorage[spAl1] === "undefined"){
    window.localStorage.setItem(spAl1, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spAl1));
    if (current+number > 100){
        window.localStorage.setItem(spAl1,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spAl1, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spAl1))+".");
}
}   

    function addCart(spTeenAge){
    var number =parseInt(document.getElementById(spTeenAge).value);
    var name=itemList[spTeenAge].name;

    if(number == 0) return 0;

    if(typeof localStorage[spTeenAge] === "undefined"){
    window.localStorage.setItem(spTeenAge, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spTeenAge));
    if (current+number > 100){
        window.localStorage.setItem(spTeenAge,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spTeenAge, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spTeenAge))+".");
}
}   


    function addCart(spDirectorsCut){
    var number =parseInt(document.getElementById(spDirectorsCut).value);
    var name=itemList[spDirectorsCut].name;

    if(number == 0) return 0;

    if(typeof localStorage[spDirectorsCut] === "undefined"){
    window.localStorage.setItem(spDirectorsCut, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spDirectorsCut));
    if (current+number > 100){
        window.localStorage.setItem(spDirectorsCut,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spDirectorsCut, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spDirectorsCut))+".");
}
}   

    function addCart(spWeMakeYou){
    var number =parseInt(document.getElementById(spWeMakeYou).value);
    var name=itemList[spWeMakeYou].name;

    if(number == 0) return 0;

    if(typeof localStorage[spWeMakeYou] === "undefined"){
    window.localStorage.setItem(spWeMakeYou, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spWeMakeYou));
    if (current+number > 100){
        window.localStorage.setItem(spWeMakeYou,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spWeMakeYou, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spWeMakeYou))+".");
}
}   


    function addCart(spYouMakeMyDay){
    var number =parseInt(document.getElementById(spYouMakeMyDay).value);
    var name=itemList[spYouMakeMyDay].name;

    if(number == 0) return 0;

    if(typeof localStorage[spYouMakeMyDay] === "undefined"){
    window.localStorage.setItem(spYouMakeMyDay, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spYouMakeMyDay));
    if (current+number > 100){
        window.localStorage.setItem(spYouMakeMyDay,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spYouMakeMyDay, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spYouMakeMyDay))+".");
}
}   


    function addCart(spYouMakeMyDawn){
    var number =parseInt(document.getElementById(spYouMakeMyDawn).value);
    var name=itemList[spYouMakeMyDawn].name;

    if(number == 0) return 0;

    if(typeof localStorage[spYouMakeMyDawn] === "undefined"){
    window.localStorage.setItem(spYouMakeMyDawn, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spYouMakeMyDawn));
    if (current+number > 100){
        window.localStorage.setItem(spYouMakeMyDawn,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spYouMakeMyDawn, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spYouMakeMyDawn))+".");
}
}   

    function addCart(spAnOde){
    var number =parseInt(document.getElementById(spAnOde).value);
    var name=itemList[spAnOde].name;

    if(number == 0) return 0;

    if(typeof localStorage[spAnOde] === "undefined"){
    window.localStorage.setItem(spAnOde, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spAnOde));
    if (current+number > 100){
        window.localStorage.setItem(spAnOde,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spAnOde, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spAnOde))+".");
}
}   

    function addCart(spHenggarae){
    var number =parseInt(document.getElementById(spHenggarae).value);
    var name=itemList[spHenggarae].name;

    if(number == 0) return 0;

    if(typeof localStorage[spHenggarae] === "undefined"){
    window.localStorage.setItem(spHenggarae, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spHenggarae));
    if (current+number > 100){
        window.localStorage.setItem(spHenggarae,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spHenggarae, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spHenggarae))+".");
}
}   


    function addCart(sp24H){
    var number =parseInt(document.getElementById(sp24H).value);
    var name=itemList[sp24H].name;

    if(number == 0) return 0;

    if(typeof localStorage[sp24H] === "undefined"){
    window.localStorage.setItem(sp24H, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(sp24H));
    if (current+number > 100){
        window.localStorage.setItem(sp24H,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(sp24H, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(sp24H))+".");
}
}   


    function addCart(spSemicolon){
    var number =parseInt(document.getElementById(spSemicolon).value);
    var name=itemList[spSemicolon].name;

    if(number == 0) return 0;

    if(typeof localStorage[spSemicolon] === "undefined"){
    window.localStorage.setItem(spSemicolon, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spSemicolon));
    if (current+number > 100){
        window.localStorage.setItem(spSemicolon,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spSemicolon, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spSemicolon))+".");
}
}   


    function addCart(spNotAlone){
    var number =parseInt(document.getElementById(spNotAlone).value);
    var name=itemList[spNotAlone].name;

    if(number == 0) return 0;

    if(typeof localStorage[spNotAlone] === "undefined"){
    window.localStorage.setItem(spNotAlone, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spNotAlone));
    if (current+number > 100){
        window.localStorage.setItem(spNotAlone,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spNotAlone, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spNotAlone))+".");
}
}   


    function addCart(spYourChoice){
    var number =parseInt(document.getElementById(spYourChoice).value);
    var name=itemList[spYourChoice].name;

    if(number == 0) return 0;

    if(typeof localStorage[spYourChoice] === "undefined"){
    window.localStorage.setItem(spYourChoice, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spYourChoice));
    if (current+number > 100){
        window.localStorage.setItem(spYourChoice,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spYourChoice, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spYourChoice))+".");
}
}   


    function addCart(spAttacca){
    var number =parseInt(document.getElementById(spAttacca).value);
    var name=itemList[spAttacca].name;

    if(number == 0) return 0;

    if(typeof localStorage[spAttacca] === "undefined"){
    window.localStorage.setItem(spAttacca, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spAttacca));
    if (current+number > 100){
        window.localStorage.setItem(spAttacca,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spAttacca, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spAttacca))+".");
}
}  


    function addCart(spPowerOfLove){
    var number =parseInt(document.getElementById(spPowerOfLove).value);
    var name=itemList[spPowerOfLove].name;

    if(number == 0) return 0;

    if(typeof localStorage[spPowerOfLove] === "undefined"){
    window.localStorage.setItem(spPowerOfLove, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spPowerOfLove));
    if (current+number > 100){
        window.localStorage.setItem(spPowerOfLove,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spPowerOfLove, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spPowerOfLove))+".");
}
}  


//LIGHTSTICK 
    function addCart(spLightstickDebut){
    var number =parseInt(document.getElementById(spLightstickDebut).value);
    var name=itemList[spLightstickDebut].name;

    if(number == 0) return 0;

    if(typeof localStorage[spLightstickDebut] === "undefined"){
    window.localStorage.setItem(spLightstickDebut, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spLightstickDebut));
    if (current+number > 100){
        window.localStorage.setItem(spLightstickDebut,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spLightstickDebut, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spLightstickDebut))+".");
}
}  

    function addCart(spCaratBongVer1){
    var number =parseInt(document.getElementById(spCaratBongVer1).value);
    var name=itemList[spCaratBongVer1].name;

    if(number == 0) return 0;

    if(typeof localStorage[spCaratBongVer1] === "undefined"){
    window.localStorage.setItem(spCaratBongVer1, number);
    }
    else {
    var current=parseInt(window.localStorage.getItem(spCaratBongVer1));
    if (current+number > 100){
        window.localStorage.setItem(spCaratBongVer1,100)
        alert("Bạn đã đặt quá số lượng có thể cho phép.");
        return;
    }
    else {
        window.localStorage.setItem(spCaratBongVer1, current+number);
    }
    alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spCaratBongVer1))+".");
}
    }  

	function addCart(spCaratBongVer2){
		var number =parseInt(document.getElementById(spCaratBongVer2).value);
		var name=itemList[spCaratBongVer2].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spCaratBongVer2] === "undefined"){
		window.localStorage.setItem(spCaratBongVer2, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spCaratBongVer2));
		if (current+number > 100){
			window.localStorage.setItem(spCaratBongVer2,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spCaratBongVer2, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spCaratBongVer2))+".");
	}
		}  


		function addCart(spSogo){
			var number =parseInt(document.getElementById(spSogo).value);
			var name=itemList[spSogo].name;
		
			if(number == 0) return 0;
		
			if(typeof localStorage[spSogo] === "undefined"){
			window.localStorage.setItem(spSogo, number);
			}
			else {
			var current=parseInt(window.localStorage.getItem(spSogo));
			if (current+number > 100){
				window.localStorage.setItem(spSogo,100)
				alert("Bạn đã đặt quá số lượng có thể cho phép.");
				return;
			}
			else {
				window.localStorage.setItem(spSogo, current+number);
			}
			alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spSogo))+".");
		}
			}  


			//CARDS
			function addCart(spCards17Carat){
				var number =parseInt(document.getElementById(spCards17Carat).value);
				var name=itemList[spCards17Carat].name;
			
				if(number == 0) return 0;
			
				if(typeof localStorage[spCards17Carat] === "undefined"){
				window.localStorage.setItem(spCards17Carat, number);
				}
				else {
				var current=parseInt(window.localStorage.getItem(spCards17Carat));
				if (current+number > 100){
					window.localStorage.setItem(spCards17Carat,100)
					alert("Bạn đã đặt quá số lượng có thể cho phép.");
					return;
				}
				else {
					window.localStorage.setItem(spCards17Carat, current+number);
				}
				alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spCards17Carat))+".");
			}
				}  


	function addCart(spPhotoCardBoysBe){
					var number =parseInt(document.getElementById(spPhotoCardBoysBe).value);
					var name=itemList[spPhotoCardBoysBe].name;
				
					if(number == 0) return 0;
				
					if(typeof localStorage[spPhotoCardBoysBe] === "undefined"){
					window.localStorage.setItem(spPhotoCardBoysBe, number);
					}
					else {
					var current=parseInt(window.localStorage.getItem(spPhotoCardBoysBe));
					if (current+number > 100){
						window.localStorage.setItem(spPhotoCardBoysBe,100)
						alert("Bạn đã đặt quá số lượng có thể cho phép.");
						return;
					}
					else {
						window.localStorage.setItem(spPhotoCardBoysBe, current+number);
					}
					alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spPhotoCardBoysBe))+".");
	}
	}  

	function addCart(spPostCardBoysBe){
		var number =parseInt(document.getElementById(spPostCardBoysBe).value);
		var name=itemList[spPostCardBoysBe].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spPostCardBoysBe] === "undefined"){
		window.localStorage.setItem(spPostCardBoysBe, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spPostCardBoysBe));
		if (current+number > 100){
			window.localStorage.setItem(spPostCardBoysBe,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spPostCardBoysBe, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spPostCardBoysBe))+".");
}
	} 


	function addCart(spPosterLoveandLetter){
		var number =parseInt(document.getElementById(spPosterLoveandLetter).value);
		var name=itemList[spPosterLoveandLetter].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spPosterLoveandLetter] === "undefined"){
		window.localStorage.setItem(spPosterLoveandLetter, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spPosterLoveandLetter));
		if (current+number > 100){
			window.localStorage.setItem(spPosterLoveandLetter,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spPosterLoveandLetter, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spPosterLoveandLetter))+".");
}
    } 

	function addCart(spBookmarkLoveandLetter){
		var number =parseInt(document.getElementById(spBookmarkLoveandLetter).value);
		var name=itemList[spBookmarkLoveandLetter].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spBookmarkLoveandLetter] === "undefined"){
		window.localStorage.setItem(spBookmarkLoveandLetter, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spBookmarkLoveandLetter));
		if (current+number > 100){
			window.localStorage.setItem(spBookmarkLoveandLetter,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spBookmarkLoveandLetter, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spBookmarkLoveandLetter))+".");
}
    } 


	function addCart(spPosterGoingSEVENTEEN){
		var number =parseInt(document.getElementById(spPosterGoingSEVENTEEN).value);
		var name=itemList[spPosterGoingSEVENTEEN].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spPosterGoingSEVENTEEN] === "undefined"){
		window.localStorage.setItem(spPosterGoingSEVENTEEN, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spPosterGoingSEVENTEEN));
		if (current+number > 100){
			window.localStorage.setItem(spPosterGoingSEVENTEEN,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spPosterGoingSEVENTEEN, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spPosterGoingSEVENTEEN))+".");
}
    } 


	function addCart(spCardAl1){
		var number =parseInt(document.getElementById(spCardAl1).value);
		var name=itemList[spCardAl1].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spCardAl1] === "undefined"){
		window.localStorage.setItem(spCardAl1, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spCardAl1));
		if (current+number > 100){
			window.localStorage.setItem(spCardAl1,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spCardAl1, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spCardAl1))+".");
}
    } 


	function addCart(spCGVCardMovie){
		var number =parseInt(document.getElementById(spCGVCardMovie).value);
		var name=itemList[spCGVCardMovie].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spCGVCardMovie] === "undefined"){
		window.localStorage.setItem(spCGVCardMovie, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spCGVCardMovie));
		if (current+number > 100){
			window.localStorage.setItem(spCGVCardMovie,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spCGVCardMovie, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spCGVCardMovie))+".");
}
    } 


	function addCart(spIDCards){
		var number =parseInt(document.getElementById(spIDCards).value);
		var name=itemList[spIDCards].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spIDCards] === "undefined"){
		window.localStorage.setItem(spIDCards, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spIDCards));
		if (current+number > 100){
			window.localStorage.setItem(spIDCards,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spIDCards, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spIDCards))+".");
}
    } 


	function addCart(spNetflixCards){
		var number =parseInt(document.getElementById(spNetflixCards).value);
		var name=itemList[spNetflixCards].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spNetflixCards] === "undefined"){
		window.localStorage.setItem(spNetflixCards, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spNetflixCards));
		if (current+number > 100){
			window.localStorage.setItem(spNetflixCards,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spNetflixCards, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spNetflixCards))+".");
}
    } 


	//Goods KPOP
	function addCart(spSEVENTEENFan){
		var number =parseInt(document.getElementById(spSEVENTEENFan).value);
		var name=itemList[spSEVENTEENFan].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spSEVENTEENFan] === "undefined"){
		window.localStorage.setItem(spSEVENTEENFan, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spSEVENTEENFan));
		if (current+number > 100){
			window.localStorage.setItem(spSEVENTEENFan,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spSEVENTEENFan, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spSEVENTEENFan))+".");
}
    } 


	function addCart(spBinder){
		var number =parseInt(document.getElementById(spBinder).value);
		var name=itemList[spBinder].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spBinder] === "undefined"){
		window.localStorage.setItem(spBinder, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spBinder));
		if (current+number > 100){
			window.localStorage.setItem(spBinder,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spBinder, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spBinder))+".");
}
    }


	function addCart(spGelPen){
		var number =parseInt(document.getElementById(spGelPen).value);
		var name=itemList[spGelPen].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spGelPen] === "undefined"){
		window.localStorage.setItem(spGelPen, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spGelPen));
		if (current+number > 100){
			window.localStorage.setItem(spGelPen,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spGelPen, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spGelPen))+".");
}
    }


	function addCart(spColdCup){
		var number =parseInt(document.getElementById(spColdCup).value);
		var name=itemList[spColdCup].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spColdCup] === "undefined"){
		window.localStorage.setItem(spColdCup, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spColdCup));
		if (current+number > 100){
			window.localStorage.setItem(spColdCup,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spColdCup, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spColdCup))+".");
}
    } 


	function addCart(spKeyring){
		var number =parseInt(document.getElementById(spKeyring).value);
		var name=itemList[spKeyring].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spKeyring] === "undefined"){
		window.localStorage.setItem(spKeyring, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spKeyring));
		if (current+number > 100){
			window.localStorage.setItem(spKeyring,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spKeyring, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spKeyring))+".");
}
    } 



	function addCart(spHoodie){
		var number =parseInt(document.getElementById(spHoodie).value);
		var name=itemList[spHoodie].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spHoodie] === "undefined"){
		window.localStorage.setItem(spHoodie, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spHoodie));
		if (current+number > 100){
			window.localStorage.setItem(spHoodie,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spHoodie, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spHoodie))+".");
}
    } 



	function addCart(spBackpack){
		var number =parseInt(document.getElementById(spBackpack).value);
		var name=itemList[spBackpack].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spBackpack] === "undefined"){
		window.localStorage.setItem(spBackpack, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spBackpack));
		if (current+number > 100){
			window.localStorage.setItem(spBackpack,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spBackpack, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spBackpack))+".");
}
    } 



	//Goods Anime
	function addCart(spFigureUzui){
		var number =parseInt(document.getElementById(spFigureUzui).value);
		var name=itemList[spFigureUzui].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spFigureUzui] === "undefined"){
		window.localStorage.setItem(spFigureUzui, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spFigureUzui));
		if (current+number > 100){
			window.localStorage.setItem(spFigureUzui,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spFigureUzui, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spFigureUzui))+".");
}
    } 


	function addCart(spFigureTomioka){
		var number =parseInt(document.getElementById(spFigureTomioka).value);
		var name=itemList[spFigureTomioka].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spFigureTomioka] === "undefined"){
		window.localStorage.setItem(spFigureTomioka, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spFigureTomioka));
		if (current+number > 100){
			window.localStorage.setItem(spFigureTomioka,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spFigureTomioka, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spFigureTomioka))+".");
}
    } 


	function addCart(spFigureRengoku){
		var number =parseInt(document.getElementById(spFigureRengoku).value);
		var name=itemList[spFigureRengoku].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spFigureRengoku] === "undefined"){
		window.localStorage.setItem(spFigureRengoku, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spFigureRengoku));
		if (current+number > 100){
			window.localStorage.setItem(spFigureRengoku,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spFigureRengoku, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spFigureRengoku))+".");
}
    } 


	function addCart(spNaruto72){
		var number =parseInt(document.getElementById(spNaruto72).value);
		var name=itemList[spNaruto72].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spNaruto72] === "undefined"){
		window.localStorage.setItem(spNaruto72, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spNaruto72));
		if (current+number > 100){
			window.localStorage.setItem(spNaruto72,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spNaruto72, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spNaruto72))+".");
}
    } 


	function addCart(spConan100){
		var number =parseInt(document.getElementById(spConan100).value);
		var name=itemList[spConan100].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spConan100] === "undefined"){
		window.localStorage.setItem(spConan100, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spConan100));
		if (current+number > 100){
			window.localStorage.setItem(spConan100,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spConan100, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spConan100))+".");
}
    } 

	function addCart(spFigureShoto){
		var number =parseInt(document.getElementById(spFigureShoto).value);
		var name=itemList[spFigureShoto].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spFigureShoto] === "undefined"){
		window.localStorage.setItem(spFigureShoto, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spFigureShoto));
		if (current+number > 100){
			window.localStorage.setItem(spFigureShoto,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spFigureShoto, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spFigureShoto))+".");
}
    } 

	function addCart(spJujutsuKaisen0){
		var number =parseInt(document.getElementById(spJujutsuKaisen0).value);
		var name=itemList[spJujutsuKaisen0].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spJujutsuKaisen0] === "undefined"){
		window.localStorage.setItem(spJujutsuKaisen0, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spJujutsuKaisen0));
		if (current+number > 100){
			window.localStorage.setItem(spJujutsuKaisen0,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spJujutsuKaisen0, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spJujutsuKaisen0))+".");
}
    } 

	function addCart(spFigureNaruto){
		var number =parseInt(document.getElementById(spFigureNaruto).value);
		var name=itemList[spFigureNaruto].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spFigureNaruto] === "undefined"){
		window.localStorage.setItem(spFigureNaruto, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spFigureNaruto));
		if (current+number > 100){
			window.localStorage.setItem(spFigureNaruto,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spFigureNaruto, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spFigureNaruto))+".");
}
    } 

	function addCart(spFigureSakura){
		var number =parseInt(document.getElementById(spFigureSakura).value);
		var name=itemList[spFigureSakura].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spFigureSakura] === "undefined"){
		window.localStorage.setItem(spFigureSakura, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spFigureSakura));
		if (current+number > 100){
			window.localStorage.setItem(spFigureSakura,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spFigureSakura, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spFigureSakura))+".");
}
    } 


	function addCart(spFigureSasuke){
		var number =parseInt(document.getElementById(spFigureSasuke).value);
		var name=itemList[spFigureSasuke].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spFigureSasuke] === "undefined"){
		window.localStorage.setItem(spFigureSasuke, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spFigureSasuke));
		if (current+number > 100){
			window.localStorage.setItem(spFigureSasuke,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spFigureSasuke, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spFigureSasuke))+".");
}
    } 



	//SALE
	function addCart(spYouMakeMyDay17K){
		var number =parseInt(document.getElementById(spYouMakeMyDay17K).value);
		var name=itemList[spYouMakeMyDay17K].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spYouMakeMyDay17K] === "undefined"){
		window.localStorage.setItem(spYouMakeMyDay17K, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spYouMakeMyDay17K));
		if (current+number > 100){
			window.localStorage.setItem(spYouMakeMyDay17K,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spYouMakeMyDay17K, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spYouMakeMyDay17K))+".");
}
    } 

	function addCart(spLightstickDebut17K){
		var number =parseInt(document.getElementById(spLightstickDebut17K).value);
		var name=itemList[spLightstickDebut17K].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spLightstickDebut17K] === "undefined"){
		window.localStorage.setItem(spLightstickDebut17K, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spLightstickDebut17K));
		if (current+number > 100){
			window.localStorage.setItem(spLightstickDebut17K,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spLightstickDebut17K, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spLightstickDebut17K))+".");
}
    } 

	function addCart(spPosterLoveandLetter17K){
		var number =parseInt(document.getElementById(spPosterLoveandLetter17K).value);
		var name=itemList[spPosterLoveandLetter17K].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spPosterLoveandLetter17K] === "undefined"){
		window.localStorage.setItem(spPosterLoveandLetter17K, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spPosterLoveandLetter17K));
		if (current+number > 100){
			window.localStorage.setItem(spPosterLoveandLetter17K,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spPosterLoveandLetter17K, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spPosterLoveandLetter17K))+".");
}
    } 

	function addCart(spGelPen17K){
		var number =parseInt(document.getElementById(spGelPen17K).value);
		var name=itemList[spGelPen17K].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spGelPen17K] === "undefined"){
		window.localStorage.setItem(spGelPen17K, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spGelPen17K));
		if (current+number > 100){
			window.localStorage.setItem(spGelPen17K,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spGelPen17K, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spGelPen17K))+".");
}
    } 


	function addCart(spConan10017K){
		var number =parseInt(document.getElementById(spConan10017K).value);
		var name=itemList[spConan10017K].name;
	
		if(number == 0) return 0;
	
		if(typeof localStorage[spConan10017K] === "undefined"){
		window.localStorage.setItem(spConan10017K, number);
		}
		else {
		var current=parseInt(window.localStorage.getItem(spConan10017K));
		if (current+number > 100){
			window.localStorage.setItem(spConan10017K,100)
			alert("Bạn đã đặt quá số lượng có thể cho phép.");
			return;
		}
		else {
			window.localStorage.setItem(spConan10017K, current+number);
		}
		alert("Đã cập nhật sản phẩm " +name+ " với số lượng " +number+ " vào giỏ hàng. Số lượng sản phẩm " +name+ " đã đặt là "+parseInt(window.localStorage.getItem(spConan10017K))+".");
}
    } 




	











//Ham mo trang gio hang
function openCart()
{
window.location.href = "GioHang.html";
}




//Ham hien thi noi dung gio hang
function showCart(){

	var formatter = new Intl.NumberFormat('vi-VN',{
		style: 'currency',
		currency: 'VND'
	});

	var container=document.getElementById("cartDetail").getElementsByTagName('tbody')[0];
	container.innerHTML="";

	var sum=0;
	var totalPreTax=0;
	var discountRate=getDiscountRate();
	var taxRate=0.1;
	var discount=0;
	var tax=0;
	for(var i=0; i<window.localStorage.length; i++){
		if(typeof itemList[localStorage.key(i)] === "underfined")
			continue;
		
		var tr=document.createElement("tr");
		var photocell=document.createElement("td");
		var namecell=document.createElement("td");
		var pricecell=document.createElement("td");
		var numbercell=document.createElement("td");
		var sumcell=document.createElement("td");
		var removecell=document.createElement("td");
		var removeLink=document.createElement("a");

		var item=itemList[localStorage.key(i)];
		var number=localStorage.getItem(localStorage.key(i));

		photocell.style.textAlign="center";
		photocell.innerHTML="<img src='" + item.photo+"' class='round-figure' width='100px' />" ;

		namecell.innerHTML=item.name;
		pricecell.innerHTML=formatter.format(item.price);
		pricecell.style.textAlign="right";

		numbercell.innerHTML=number;
		numbercell.style.textAlign="right";

		sum=number*item.price;
		sumcell.innerHTML=formatter.format(sum);
		sumcell.style.textAlign="right";

		removeLink.innerHTML="<i class='fa fa-trash icon-pink'> </i>";

		removeLink.setAttribute("href", "#");
		removeLink.setAttribute("data-code", localStorage.key(i));
		removeLink.onclick=function(){
			removeCart(this.dataset.code);
		}
		removecell.style.textAlign="center";
		removecell.appendChild(removeLink);

		tr.appendChild(photocell);
		tr.appendChild(namecell);
		tr.appendChild(numbercell);
		tr.appendChild(pricecell);
		tr.appendChild(sumcell);
		tr.appendChild(removecell);
		container.appendChild(tr);
		totalPreTax+=sum;
	}
	
	var discount=totalPreTax*discountRate;
	var tax=(totalPreTax-discount) * taxRate;
	document.getElementById("bill_pre_tax_total").innerHTML=formatter.format(totalPreTax);
	/* document.getElementById("bill_discount").innerHTML=discountRate+" x A = "+formatter.format(discount);
	document.getElementById("bill_tax").innerHTML=formatter.format(tax);
	document.getElementById("bill_total").innerHTML=formatter.format(totalPreTax-discount+tax); */
}

function getDiscountRate()
{
var d=new Date();//lấy ngày hiện tại của máy tính
var weekday=d.getDay();//lấy ngày trong tuần
var totalMins=d.getHours()*60+d.getMinutes();//đổi thời gian hiện tại ra số phút trong ngày
if(weekday>=1&&weekday<=3&&((totalMins>=420&&totalMins<=660)||(totalMins>=780&&totalMins<=1020)))
return 0.1;
return 0;
}
/*Hàm xóa sản phẩm khỏi đơn hàng**/
function removeCart(code)
{
if(typeof window.localStorage[code] !== "undefined")
{
//xóa sản phẩm khỏi localStorage
window.localStorage.removeItem(code);
//Xóa nội dung của phần thân của bảng (<tbody>)
document.getElementById("cartDetail").getElementsByTagName('tbody')[0].innerHTML="";
//Hiển thị lại nội dung của đơn hàng
showCart();
}
}
//Cập nhật trang chi tiết đơn hàng khi cập nhật số lượng sản phẩm
window.onstorage = () => {
showCart();
};



