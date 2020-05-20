var sUrl = "https://api.got.show/api/book/characters/";

function getData(sChar) {
    $.getJSON(sUrl + sChar)
        .done(function(oData) {
            fillData(oData);
        })
        .fail(function(oError) {
            console.log(oError);
        })
}

function getCharacter() {
    var sChar = $("#charactername").val();
    if (sChar === undefined || sChar === null) {
        alert("Ingegeven naam is null.")
    } else if (sChar.length <= 0) {
        alert("Vul een naam in.");
    } else {
        getData(sChar);
    }
}

function fillData(oData) {
    let sName = oData.name;
    let sBirth = oData.birth;
    let sImage = oData.image;
    let sGender = oData.gender;
    let sHouse = oData.house;
    let sChildren = getChildren(oData.children);
    $('#character').html('');
    $('#character').append('<p id="data"></p>');
    if (sName !== undefined && sName !== null) {
        $('#data').append('<strong>Name:</strong>&emsp;<span id="name">' + sName + '</span><br />');
    }
    if (sBirth !== undefined && sBirth !== null) {
        $('#data').append('<strong>Leeftijd:</strong>&emsp;<span id="name">' + sBirth + '</span><br />');
    }
    if (sGender !== undefined && sGender !== null) {
        $('#data').append('<strong>Gender:</strong>&emsp;<span id="name">' + sGender + '</span><br />');
    }
    if (sImage != undefined && sImage !== null) {
        $('#data').append('<img src="' + sImage + '"><br />');
    }
    if (sHouse !== undefined && sHouse !== null) {
        $('#data').append('<strong>House:</strong>&emsp;<span id="name">' + sHouse + '</span><br />');
    }
    if (sChildren !== undefined && sChildren !== null && oData.children.length != 0) {
        $('#data').append('<strong>Children:</strong>&emsp;<span id="name">' + sChildren + '</span><br />');
    }
}

function getChildren(oChildren) {
    let sChildren = "";
    oChildren.forEach(oChild => {
        sChildren += oChild + ", ";
    });
    return sChildren.slice(0, -2);
}