function hesapla(){
    let dogumYili=document.getElementById("dogumYili").value;
    let baslananYil=document.getElementById("baslananYil").value;
    let hesaplanacakYil=document.getElementById("hesaplanacakYil").value;
    let sonuc=document.getElementById("sonuc");
    let yas=hesaplanacakYil-dogumYili;
    let calismaYili=hesaplanacakYil-baslananYil;
    console.log(hesaplanacakYil);
    console.log(baslananYil);
    console.log(dogumYili);
    console.log(calismaYili);

    if(yas<=50 && calismaYili>=15){
        sonuc.innerHTML="İzin Gününüz 26 Gün";
    }
    else if(yas>18 && calismaYili>=6){
        sonuc.innerHTML="İzin Gününüz 20 Gün";
    }
    else if(yas>18 && calismaYili<=5){
        sonuc.innerHTML="İzin Gününüz 14 Gün";
    }
    else if(yas<=18){
        sonuc.innerHTML="İzin Gününüz 20 Gün";
    }
}

function emekliHesapla(){
    document.getElementById("sonuc").innerHTML="İzin Gününüz 20 Gün";
}