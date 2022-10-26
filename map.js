var canvas = initCanvas("map", {scale:true, width:1366, height:657, full:true, color:'tan'});

var nextSrc = image('next.png');

var part1 = image('part1.png');
var part2 = image('part2.png');
var part3 = image('part3.png');
var sources = image('sources.png');

var stop = 0;
var part = 3;

var mapGroup = group(171, 0, 0.75, 0.75);
var mapSrc = image('map.png');
var map = comp(0, 3, {width:1366, height:657}, {type:'image', source:mapSrc, group:mapGroup, outline:{draw:true, color:'gray', width:1}});

mapGroup.addAnimation('return', [{path:'x', value:171}, {path:'y', value:0}, {path:'scaleX', value:0.75}, {path:'scaleY', value:0.75}], 5000, 'ease-out', function () {
    silkRoadSelect.show(); transSaharanSelect.show(); indianOceanSelect.show(); silkRoadPrev.show(); transSaharanPrev.show(); indianOceanPrev.show(); nextPart.show();
})
mapGroup.addAnimation('hangzhou', [{path:'x', value:-1300}, {path:'y', value:-300}, {path:'scaleX', value:2}, {path:'scaleY', value:2}], 5000, 'ease-out', function () {
    next.show();
    hangzhou.show();
});
mapGroup.addAnimation('baghdad', [{path:'x', value:-500}, {path:'y', value:-150}], 2500, 'ease-out', function () {
    next.show();
    baghdad.show();
});
mapGroup.addAnimation('constantinople', [{path:'x', value:-250}, {path:'y', value:-50}], 1500, 'ease-out', function () {
    next.show();
    constantinople.show();
});
mapGroup.addAnimation('timbuktu', [{path:'scaleX', value:2}, {path:'scaleY', value:2}, {path:'x', value:100}, {path:'y', value:-300}], 5000, 'ease-out', function () {
    next.show();
    timbuktu.show();
});
mapGroup.addAnimation('tripoli', [{path:'x', value:-50}, {path:'y', value:-150}], 2000, 'ease-out', function () {
    next.show();
    tripoli.show();
});
mapGroup.addAnimation('jeddah', [{path:'x', value:-350}, {path:'y', value:-300}], 2000, 'ease-out', function () {
    next.show();
    jeddah.show();
});
mapGroup.addAnimation('zimb', [{path:'scaleX', value:2}, {path:'scaleY', value:2}, {path:'x', value:-200}, {path:'y', value:-800}], 5000, 'ease-out', function () {
    next.show();
    zimb.show();
});
mapGroup.addAnimation('mombasa', [{path:'x', value:-300}, {path:'y', value:-625}], 2000, 'ease-out', function () {
    next.show();
    mombasa.show();
});
mapGroup.addAnimation('malacca', [{path:'x', value:-1150}, {path:'y', value:-575}], 4000, 'ease-out', function () {
    next.show();
    malacca.show();
})

var dropdownSrc = image('dropdownButton.png');
var dropdownButton = comp(15, 15, {width:80, height:80}, {type:'image', source:dropdownSrc, cursor:'pointer'});

var silkRoadSelectSrc = image('silkRoadSelect.png');
var transSaharanSelectSrc = image('transSaharanSelect.png');
var indianOceanSelectSrc = image('indianOceanSelect.png');

var silkRoadSelect = comp(158, 505, {width:300, height:75}, {type:'image', source:silkRoadSelectSrc, cursor:'pointer', temp:{hover:[{path:'outline.draw', value:true}], mouseDown:[{path:'outline.width', value:5}]}, outline:{color:'#6100a2', width:3}});
var transSaharanSelect = comp(508, 505, {width:300, height:75}, {type:'image', source:transSaharanSelectSrc, cursor:'pointer', temp:{hover:[{path:'outline.draw', value:true}], mouseDown:[{path:'outline.width', value:5}]}, outline:{color:'#009600', width:3}});
var indianOceanSelect = comp(858, 505, {width:300, height:75}, {type:'image', source:indianOceanSelectSrc, cursor:'pointer', temp:{hover:[{path:'outline.draw', value:true}], mouseDown:[{path:'outline.width', value:5}]}, outline:{color:'#008b8b', width:3}});

var silkRoadPrev = group(0, 0, 1, 1, mapGroup);
var silkRoadPrevSrc = image('silkRoadPrev.png');
var silkRoadRoutePrev = comp(0, 3, {width:1366, height:657}, {type:'image', source:silkRoadPrevSrc, group:silkRoadPrev});
silkRoadSelect.onclick = function () {
    silkRoadSelect.hide(); transSaharanSelect.hide(); indianOceanSelect.hide(); transSaharanPrev.hide(); indianOceanPrev.hide(); nextPart.hide();
    mapGroup.animations.hangzhou.run();
    stop = 1;
}

var transSaharanPrev = group(0, 0, 1, 1, mapGroup);
var transSaharanPrevSrc = image('transSaharanPrev.png');
var transSaharanRoutePrev = comp(0, 3, {width:1366, height:657}, {type:'image', source:transSaharanPrevSrc, group:transSaharanPrev});
transSaharanSelect.onclick = function () {
    silkRoadSelect.hide(); transSaharanSelect.hide(); indianOceanSelect.hide(); silkRoadPrev.hide(); indianOceanPrev.hide(); nextPart.hide();
    mapGroup.animations.timbuktu.run();
    stop = 4;
}

var indianOceanPrev = group(0, 0, 1, 1, mapGroup);
var indianOceanPrevSrc = image('indianOceanPrev.png');
var indianOceanRoutePrev = comp(0, 3, {width:1366, height:657}, {type:'image', source:indianOceanPrevSrc, group:indianOceanPrev});
indianOceanSelect.onclick = function () {
    silkRoadSelect.hide(); transSaharanSelect.hide(); indianOceanSelect.hide(); silkRoadPrev.hide(); transSaharanPrev.hide(); nextPart.hide();
    mapGroup.animations.zimb.run();
    stop = 7;
}
mapGroup.hide(); silkRoadSelect.hide(); transSaharanSelect.hide(); indianOceanSelect.hide();

var itemsMapGroup = group(171, 0, 0.75, 0.75);
var itemsMap = comp(0, 3, {width:1366, height:657}, {type:'image', source:mapSrc, group:itemsMapGroup, outline:{draw:true, color:'gray', width:1}});

itemsMapGroup.addAnimation('return', [{path:'scaleX', value:0.75}, {path:'scaleY', value:0.75}, {path:'x', value:171}, {path:'y', value:0}], 6000, 'ease-out', function () {
    astrolabe.show(); books.show(); gold.show(); ivory.show(); porcelain.show(); nextPart.show();
});
itemsMapGroup.addAnimation('astrolabe', [{path:'scaleX', value:2}, {path:'scaleY', value:2}, {path:'x', value:-450}], 4000, 'ease-out', function () {
    back.show();
    astrolabeInfo.show();
});
itemsMapGroup.addAnimation('books', [{path:'scaleX', value:2}, {path:'scaleY', value:2}, {path:'x', value:-1100}], 4000, 'ease-out', function () {
    back.show();
    booksInfo.show();
});
itemsMapGroup.addAnimation('gold', [{path:'scaleX', value:2}, {path:'scaleY', value:2}, {path:'x', value:250}, {path:'y', value:-300}], 4000, 'ease-out', function () {
    goldInfo.show();
    back.show();
});
itemsMapGroup.addAnimation('ivory', [{path:'scaleX', value:2}, {path:'scaleY', value:2}, {path:'x', value:-300}, {path:'y', value:-400}], 4000, 'ease-out', function () {
    back.show();
    ivoryInfo.show();
});
itemsMapGroup.addAnimation('porcelain', [{path:'scaleX', value:2}, {path:'scaleY', value:2}, {path:'x', value:-1000}], 4000, 'ease-out', function () {
    back.show();
    porcelainInfo.show();
});

var astrolabeSrc = image('astrolabe.png');
var booksSrc = image('books.png');
var goldSrc = image('gold.png');
var ivorySrc = image('ivory.png');
var porcelainSrc = image('porcelain.png');

var astrolabe = comp(500, 175, {width:75, height:75}, {type:'image', source:astrolabeSrc, cursor:'pointer', group:itemsMapGroup});
var books = comp(850, 175, {width:75, height:75}, {type:'image', source:booksSrc, cursor:'pointer', group:itemsMapGroup});
var gold = comp(200, 300, {width:75, height:75}, {type:'image', source:goldSrc, cursor:'pointer', group:itemsMapGroup});
var ivory = comp(450, 350, {width:75, height:75}, {type:'image', source:ivorySrc, cursor:'pointer', group:itemsMapGroup});
var porcelain = comp(750, 175, {width:75, height:75}, {type:'image', source:porcelainSrc, cursor:'pointer', group:itemsMapGroup});

astrolabe.onclick = function () {
    books.hide(); gold.hide(); ivory.hide(); porcelain.hide(); nextPart.hide();
    itemsMapGroup.animations.astrolabe.run();
}
books.onclick = function () {
    astrolabe.hide(); gold.hide(); ivory.hide(); porcelain.hide(); nextPart.hide();
    itemsMapGroup.animations.books.run();
}
gold.onclick = function () {
    astrolabe.hide(); books.hide(); ivory.hide(); porcelain.hide(); nextPart.hide();
    itemsMapGroup.animations.gold.run();
}
ivory.onclick = function () {
    astrolabe.hide(); books.hide(); gold.hide(); porcelain.hide(); nextPart.hide();
    itemsMapGroup.animations.ivory.run();
}
porcelain.onclick = function () {
    astrolabe.hide(); books.hide(); gold.hide(); ivory.hide(); nextPart.hide();
    itemsMapGroup.animations.porcelain.run();
}

itemsMapGroup.hide(); astrolabe.hide(); books.hide(); gold.hide(); ivory.hide(); porcelain.hide();


var travOn = 0;
var travMapGroup = group(171, 0, 0.75, 0.75);
var travMap = comp(0, 3, {width:1366, height:657}, {type:'image', source:mapSrc, group:travMapGroup, outline:{draw:true, color:'gray', width:1}});


travMapGroup.addAnimation('return', [{path:'scaleX', value:0.75}, {path:'scaleY', value:0.75}, {path:'x', value:171}, {path:'y', value:0}], 5000, 'ease-out', function () {
    ibnBattutaCities.show(); zhengHeCities.show(); marcoPoloCities.show(); ibnBattutaSelect.show(); zhengHeSelect.show(); marcoPoloSelect.show(); nextPart.show();
})
travMapGroup.addAnimation('baghdad', [{path:'scaleX', value:2}, {path:'scaleY', value:2}, {path:'x', value:-350}, {path:'y', value:-150}], 5000, 'ease-out', function () {
    travNext.show();
});
travMapGroup.addAnimation('iraq', [{path:'x', value:-400}, {path:'y', value:-100}], 2000, 'ease-out', function () {
    travNext.show();
});
travMapGroup.addAnimation('azerbaijan', [{path:'x', value:-375}, {path:'y', value:0}], 2000, 'ease-out', function () {
    travNext.show();
});
travMapGroup.addAnimation('malindi', [{path:'scaleX', value:2}, {path:'scaleY', value:2}, {path:'x', value:-350}, {path:'y', value:-600}], 5000, 'ease-out', function () {
    travNext.show();
});
travMapGroup.addAnimation('mogadishu', [{path:'x', value:-400}, {path:'y', value:-550}], 2000, 'ease-out', function () {
    travNext.show();
});
travMapGroup.addAnimation('jeddah', [{path:'x', value:-375}, {path:'y', value:-300}], 2000, 'ease-out', function () {
    travNext.show();
});
travMapGroup.addAnimation('cherchen', [{path:'scaleX', value:2}, {path:'scaleY', value:2}, {path:'x', value:-925}, {path:'y', value:-100}], 5000, 'ease-out', function () {
    travNext.show();
});
travMapGroup.addAnimation('beijing', [{path:'x', value:-1250}, {path:'y', value:-150}], 2000, 'ease-out', function () {
    travNext.show();
});
travMapGroup.addAnimation('hangzhou', [{path:'x', value:-1300}, {path:'y', value:-200}], 2000, 'ease-out', function () {
    travNext.show();
});


var ibnBattutaSrc = image('ibnBattutaCities.png');
var zhengHeSrc = image('zhengHeCities.png');
var marcoPoloSrc = image('marcoPoloCities.png');

var ibnBattutaCities = comp(0, 3, {width:1366, height:657}, {type:'image', source:ibnBattutaSrc, group:travMapGroup});
var zhengHeCities = comp(0, 3, {width:1366, height:657}, {type:'image', source:zhengHeSrc, group:travMapGroup});
var marcoPoloCities = comp(0, 3, {width:1366, height:657}, {type:'image', source:marcoPoloSrc, group:travMapGroup})

var ibnBattutaSelectSrc = image('ibnBattutaSelect.png');
var zhengHeSelectSrc = image('zhengHeSelect.png');
var marcoPoloSelectSrc = image('marcoPoloSelect.png');

var ibnBattutaSelect = comp(158, 505, {width:300, height:75}, {type:'image', source:ibnBattutaSelectSrc, cursor:'pointer', temp:{hover:[{path:'outline.draw', value:true}], mouseDown:[{path:'outline.width', value:5}]}, outline:{color:'#6100a2', width:3}});
var zhengHeSelect = comp(508, 505, {width:300, height:75}, {type:'image', source:zhengHeSelectSrc, cursor:'pointer', temp:{hover:[{path:'outline.draw', value:true}], mouseDown:[{path:'outline.width', value:5}]}, outline:{color:'#009600', width:3}});
var marcoPoloSelect = comp(858, 505, {width:300, height:75}, {type:'image', source:marcoPoloSelectSrc, cursor:'pointer', temp:{hover:[{path:'outline.draw', value:true}], mouseDown:[{path:'outline.width', value:5}]}, outline:{color:'#008b8b', width:3}});

ibnBattutaSelect.onclick = function () {
    ibnBattutaSelect.hide(); zhengHeSelect.hide(); marcoPoloSelect.hide(); zhengHeCities.hide(); marcoPoloCities.hide(); nextPart.hide();
    travMapGroup.animations.baghdad.run();
    travOn = 1;
}
zhengHeSelect.onclick = function () {
    ibnBattutaSelect.hide(); zhengHeSelect.hide(); marcoPoloSelect.hide(); ibnBattutaCities.hide(); marcoPoloCities.hide(); nextPart.hide();
    travMapGroup.animations.malindi.run();
    travOn = 4;
}
marcoPoloSelect.onclick = function () {
    ibnBattutaSelect.hide(); zhengHeSelect.hide(); marcoPoloSelect.hide(); ibnBattutaCities.hide(); zhengHeCities.hide(); nextPart.hide();
    travMapGroup.animations.cherchen.run();
    travOn = 7;
}


var travNext = comp(1000, 505, {width:300, height:75}, {type:'image', source:nextSrc, cursor:'pointer'});
travNext.hide();
travNext.onclick = function () {
    switch(travOn){
        case 1://Baghdad to Iraq
            travNext.hide();
            travMapGroup.animations.iraq.run();
            travOn = 2;
        break;

        case 2://Iraq to Azerbaijan
            travNext.hide();
            travMapGroup.animations.azerbaijan.run();
            travOn = 3;
        break;

        case 3://Azerbaijan to 'return'
            travNext.hide();
            travMapGroup.animations.return.run();
            travOn = 0;
        break;

        case 4://Malindini to Mogadishu
            travNext.hide();
            travMapGroup.animations.mogadishu.run();
            travOn = 5;
        break;

        case 5://Mogadishu to Jeddah
            travNext.hide();
            travMapGroup.animations.jeddah.run();
            travOn = 6;
        break;

        case 6://Jeddah to 'return'
            travNext.hide();
            travMapGroup.animations.return.run();
            travOn = 0;
        break;

        case 7://Chercen to Beijing
            travNext.hide();
            travMapGroup.animations.beijing.run();
            travOn = 8;
        break;

        case 8://Beijing to Hangzhou
            travNext.hide();
            travMapGroup.animations.hangzhou.run();
            travOn = 9;
        break;

        case 9://Hangzhou to 'return'
            travNext.hide();
            travMapGroup.animations.return.run();
            travOn = 0;
        break;
    }
}
//////////////////  Silk Roads  /////////////////////

/* Hangzhou */
var hangzhouSrc = image('hangzhou.png');
var hangzhou = comp(200, -25, {width:960, height:720}, {type:'image', source:hangzhouSrc});
hangzhou.hide();
/* Baghdad */
var baghdadSrc = image('baghdad.png');
var baghdad = comp(200, -25, {width:960, height:720}, {type:'image', source:baghdadSrc});
baghdad.hide();
/* Constantinople */
var constantinopleSrc = image('constantinople.png');
var constantinople = comp(200, -25, {width:960, height:720}, {type:'image', source:constantinopleSrc});
constantinople.hide();
//////////////  Trans-Saharan Routes  ////////////////

/* Timbuktu */
var timbuktuSrc = image('timbuktu.png');
var timbuktu = comp(200, -25, {width:960, height:720}, {type:'image', source:timbuktuSrc});
timbuktu.hide();
/* Jeddah */
var jeddahSrc = image('jeddah.png');
var jeddah = comp(200, -25, {width:960, height:720}, {type:'image', source:jeddahSrc});
jeddah.hide();
/* Tripoli */
var tripoliSrc = image('tripoli.png');
var tripoli = comp(200, -25, {width:960, height:720}, {type:'image', source:tripoliSrc});
tripoli.hide();
////////////////  Indian Ocean Trade  /////////////////

/* Great Zimbabwe */
var zimbSrc = image('zimb.png');
var zimb = comp(200, -25, {width:960, height:720}, {type:'image', source:zimbSrc});
zimb.hide();
/* Mombasa */
var mombasaSrc = image('mombasa.png');
var mombasa = comp(200, -25, {width:960, height:720}, {type:'image', source:mombasaSrc});
mombasa.hide();
/* Malacca */
var malaccaSrc = image('malacca.png');
var malacca = comp(200, -25, {width:960, height:720}, {type:'image', source:malaccaSrc});
malacca.hide();
///////////////////////////////////////////////////////
///////////////////  Traded Goods  ////////////////////
///////////////////////////////////////////////////////

//////////////////////  Gold   ////////////////////////
var goldInfoSrc = image('goldInfo.png');
var goldInfo = comp(200, -25, {width:960, height:720}, {type:'image', source:goldInfoSrc});
goldInfo.hide();
//////////////////////  Ivory  ////////////////////////
var ivoryInfoSrc = image('ivoryInfo.png');
var ivoryInfo = comp(200, -25, {width:960, height:720}, {type:'image', source:ivoryInfoSrc});
ivoryInfo.hide();
/////////////////////  Porcelain  /////////////////////
var porcelainInfoSrc = image('porcelainInfo.png');
var porcelainInfo = comp(200, -25, {width:960, height:720}, {type:'image', source:porcelainInfoSrc});
porcelainInfo.hide();
/////////////////////  Astrolabe  /////////////////////
var astrolabeInfoSrc = image('astrolabeInfo.png');
var astrolabeInfo = comp(200, -25, {width:960, height:720}, {type:'image', source:astrolabeInfoSrc});
astrolabeInfo.hide();
///////////////////////  Books  ///////////////////////
var booksInfoSrc = image('booksInfo.png');
var booksInfo = comp(200, -25, {width:960, height:720}, {type:'image', source:booksInfoSrc});
booksInfo.hide();


////////////////////  Ibn Battuta  ////////////////////

//Baghdad
var ibnBaghdad;
//Iraq

//Azerbaijan

/////////////////////  Zheng He  //////////////////////

///////////////////  Marco Polo  //////////////////////
var next = comp(1000, 505, {width:300, height:75}, {type:'image', source:nextSrc, cursor:'pointer'});
next.hide();

next.onclick = function () {
    next.hide();
    switch(stop){
        case 0:
            alert('?');
        break;

        case 1://Hangzhou to Baghdad
            hangzhou.hide();
            mapGroup.animations.baghdad.run();
            stop = 2;
        break;

        case 2://Baghdad to Constantinople
            baghdad.hide();
            mapGroup.animations.constantinople.run();
            stop = 3;
        break;

        case 3://Constantinople to 'return'
            constantinople.hide();
            mapGroup.animations.return.run();
            stop = 0;
        break;

        case 4://Timbuktu to Tripoli
            timbuktu.hide();
            mapGroup.animations.tripoli.run();
            stop = 5;
        break;

        case 5://Tripoli to Jeddah
            tripoli.hide();
            mapGroup.animations.jeddah.run();
            stop = 6;
        break;

        case 6://Jeddah to 'return'
            jeddah.hide();
            mapGroup.animations.return.run();
            stop = 0;
        break;

        case 7://Great Zimbabwe to Mombasa
            zimb.hide();
            mapGroup.animations.mombasa.run();
            stop = 8;
        break;

        case 8://Mombasa to Malacca
            mombasa.hide();
            mapGroup.animations.malacca.run();
            stop = 9;
        break;

        case 9://Malacca to 'return'
            malacca.hide();
            mapGroup.animations.return.run();
            stop = 0;
        break;
    }
}

var nextPartSrc = image('nextPart.png');
var nextPart = comp(1150, 25, {width:200, height:75, sx:100, sy:0, sWidth:400, sHeight:150}, {type:'image', source:nextPartSrc, cursor:'pointer'});
nextPart.onclick = function () {
    if(part == 3){
        goToPart(1);
    } else {
        goToPart(part+1);
    }
}
function goToPart(num){
    switch(part){
        case 0:

        break;

        case 1:
            mapGroup.hide(); silkRoadSelect.hide(); transSaharanSelect.hide(); indianOceanSelect.hide(); nextPart.hide();
        break;

        case 2:
            itemsMapGroup.hide(); astrolabe.hide(); books.hide(); gold.hide(); ivory.hide(); porcelain.hide(); nextPart.hide();
        break;

        case 3:
            travMapGroup.hide(); ibnBattutaSelect.hide(); zhengHeSelect.hide(); marcoPoloSelect.hide(); nextPart.hide();
    }

    switch(num){
        case 0://Main Menu

        break;

        case 1:
            part = 1;
            mapGroup.show();
            announcer.source = part1;
            announcer.animations.disappear.runAfter = function () {
                silkRoadSelect.show(); transSaharanSelect.show(); indianOceanSelect.show(); nextPart.show();
            }
            announcer.animations.appear.run();
        break;

        case 2:
            part = 2;
            itemsMapGroup.show();
            announcer.source = part2;
            announcer.animations.disappear.runAfter = function () {
                astrolabe.show(); books.show(); gold.show(); ivory.show(); porcelain.show(); nextPart.show();
            }
            announcer.animations.appear.run();
        break;

        case 3:
            part = 3;
            travMapGroup.show();
            announcer.source = part3;
            announcer.animations.disappear.runAfter = function () {
                ibnBattutaSelect.show(); zhengHeSelect.show(); marcoPoloSelect.show(); nextPart.show();
            }
            announcer.animations.appear.run();
    }
}

var announcer = comp(383, 291, {width:600, height:75}, {type:'image', source:part1});
announcer.opacity = 0;

var backSrc = image('back.png');
var back = comp(1000, 505, {width:300, height:75}, {type:'image', source:backSrc, cursor:'pointer'});
back.hide();

back.onclick = function () {
    back.hide(); astrolabeInfo.hide(); booksInfo.hide(); goldInfo.hide(); ivoryInfo.hide(); porcelainInfo.hide();
    itemsMapGroup.animations.return.run();
}

announcer.addAnimation('disappear', [{path:'opacity', value:0}], 2000, 'ease-out');
announcer.addAnimation('appear', [{path:'opacity', value:1}], 2000, 'ease-out', announcer.animations.disappear.run);
goToPart(1);