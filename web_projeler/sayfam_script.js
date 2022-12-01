function ort_hesapla(){
    var vize = document.getElementById('vize').value;
    var final = document.getElementById('final').value;

    var ort = (vize * 0.4) + (final * 0.6);
    goster(ort);
}
function goster(a){
    document.getElementById('ort').innerHTML='Ortalamanız : ' + a;
    document.getElementById('ort').style.visibility='visible';
}


function kahverengi(){
    document.getElementById("div2").style.backgroundColor="#654";
}

function beyaz(){
    document.getElementById("div2").style.backgroundColor="#FFF";
}

function siyah(){
    document.getElementById("div2").style.backgroundColor="#000";
}

function kırmızı(){
    document.getElementById("div2").style.backgroundColor="#F00";
}

function mavi(){
    document.getElementById("div2").style.backgroundColor="#00F";
}

function yesil(){
    document.getElementById("div2").style.backgroundColor="#0F0";
}


function saati_goster(){
    document.getElementById("saati_goster").innerHTML=Date();
}


function gun(){
    var mesaj;
    var saat = new Date().getHours();

    if (saat < 6){
        mesaj = "Sabah olmadı..."
    }

    else if (saat <= 10){
        mesaj = "Günaydın...";
    }

    else if (saat < 19){
        mesaj = "İyi Günler...";
    }

    else if (saat < 24){
        mesaj = "İyi Geceler..."
    }

    document.getElementById("gun").innerHTML=mesaj;
}

function hesapla(){
    var sayi1 = Number(document.getElementById('s1').value);
    var sayi2 = Number(document.getElementById('s2').value);
    var islem = (document.getElementById('islem').value);
    var sonuc;

    if (islem == "Toplama"){
        sonuc = "(" + sayi1 + ")" + " + " + "(" + sayi2 + ")" + " = " + (sayi1 + sayi2);
    }
    else if (islem == "Çıkarma"){
        sonuc = "(" + sayi1 + ")" + " - " + "(" + sayi2 + ")" + " = " + (sayi1 - sayi2);
    }
    else if (islem == "Çarpma"){
        sonuc = "(" + sayi1 + ")" + " x " + "(" + sayi2 + ")" + " = " + (sayi1 * sayi2);
    }
    else if (islem == "Bölme"){
        sonuc = "(" + sayi1 + ")" + " / " + "(" + sayi2 + ")" + " = " + (sayi1 / sayi2);
    }
    else {
        sonuc = "Hatalı giriş yaptınız..."
    }
    
    document.getElementById('sonuc').innerHTML="Sonuç: " + sonuc;
    document.getElementById('sonuc').style.visibility='visible';
}

function ehliyetHesapla(){
    var yas = Number(document.getElementById('yas').value);
    var mesaj;

    if (yas < 18){
        mesaj = "Ehliyet alma hakkına sahip değilsiniz...";
    }
    else if (yas < 60) {
        mesaj = "Ehliyet alabilirsiniz...";
    }
    else if (yas >= 60){
        mesaj = "Ehliyet almış olman gerek..."
    }
    else {
        mesaj = "Hatalı giriş yaptınız...";
    }

    document.getElementById('sorgu').innerHTML=mesaj;
}