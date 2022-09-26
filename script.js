document.getElementById("emekli").addEventListener("change", hesapla);
document.getElementById("emekliDegil").addEventListener("change", hesapla);
let i;

function sec(){
    let tarih1=new Date();
    let yil=tarih1.getFullYear();

    for(let i=1; i<=31; i++){
        let dogumGunu=document.createElement("option");
        document.getElementById("numberDogumGunu").appendChild(dogumGunu);
        dogumGunu.innerHTML=i;
        dogumGunu.value=i;
    }
    for(let i=1; i<=12; i++){
        let dogumAyi=document.createElement("option");
        document.getElementById("numberDogumAyi").appendChild(dogumAyi);
        dogumAyi.innerHTML=i;
        dogumAyi.value=i;
    }
    for(let i=yil; i>=1950; i--){
        let dogumYili=document.createElement("option");
        document.getElementById("numberDogumYili").appendChild(dogumYili);
        dogumYili.innerHTML=i;
        dogumYili.value=i;
    }

    for(let i=1; i<=31; i++){
        let baslamaGunu=document.createElement("option");
        document.getElementById("numberBaslamaGunu").appendChild(baslamaGunu);
        baslamaGunu.innerHTML=i;
        baslamaGunu.value=i;
    }
    for(let i=1; i<=12; i++){
        let baslamaAyi=document.createElement("option");
        document.getElementById("numberBaslamaAyi").appendChild(baslamaAyi);
        baslamaAyi.innerHTML=i;
        baslamaAyi.value=i;
    }
    for(let i=yil; i>=1950; i--){
        let baslamaYili=document.createElement("option");
        document.getElementById("numberBaslamaYili").appendChild(baslamaYili);
        baslamaYili.innerHTML=i;
        baslamaYili.value=i;
    }

    for(let i=1; i<=31; i++){
        let hesaplanacakGun=document.createElement("option");
        document.getElementById("numberHesaplanacakGun").appendChild(hesaplanacakGun);
        hesaplanacakGun.innerHTML=i;
        hesaplanacakGun.value=i;
    }
    for(let i=1; i<=12; i++){
        let hesaplanacakAy=document.createElement("option");
        document.getElementById("numberHesaplanacakAy").appendChild(hesaplanacakAy);
        hesaplanacakAy.innerHTML=i;
        hesaplanacakAy.value=i;
    }
    for(let i=yil; i>=1950; i--){
        let hesaplanacakYil=document.createElement("option");
        document.getElementById("numberHesaplanacakYil").appendChild(hesaplanacakYil);
        hesaplanacakYil.innerHTML=i;
        hesaplanacakYil.value=i;
    }
}

function hesapla(){
    let dogulanYil=document.getElementById("numberDogumYili").value;
    let baslananYil=document.getElementById("numberBaslamaYili").value;
    let hesaplananYil=document.getElementById("numberHesaplanacakYil").value;

    if(document.getElementById("emekliDegil").checked){
        if((hesaplananYil-dogulanYil)<=18){
            document.getElementById("sonuc").innerHTML="İzin Gününüz "+(hesaplananYil-baslananYil)*20+" Gün";
        }
        else if((hesaplananYil-dogulanYil)>18 && (hesaplananYil-baslananYil)<=5){
            document.getElementById("sonuc").innerHTML="İzin Gününüz "+(hesaplananYil-baslananYil)*14+" Gün";
        }
        else if((hesaplananYil-dogulanYil)>18 && (hesaplananYil-baslananYil)>5){
            document.getElementById("sonuc").innerHTML="İzin Gününüz "+(hesaplananYil-baslananYil)*20+" Gün";
        }
        else if((hesaplananYil-dogulanYil)>18 && (hesaplananYil-baslananYil)>=15){
            document.getElementById("sonuc").innerHTML="İzin Gününüz "+(hesaplananYil-baslananYil)*26+" Gün";
        }
    }
    else{
        document.getElementById("emekliDegil").style.display="none";
    }

    if(document.getElementById("emekli").checked){
        document.getElementById("sonuc").innerHTML="İzin Gününüz 20 Gün";
    }
    else{
        document.getElementById("emekli").style.display="none";
    }
}
