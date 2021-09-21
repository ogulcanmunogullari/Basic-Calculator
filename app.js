function gonder(){
    let sayi1 = parseInt(document.querySelector("input[name='sayi1']").value); 
    let sayi2 = parseInt(document.querySelector("input[name='sayi2']").value);
    

    
    if(sayi1 && sayi2){
        if(document.querySelector("#toplama").checked)
        {
            let toplama = sayi1 + sayi2;
            document.querySelector(".sonuc").innerHTML = `
            <span style="padding: 0; margin: 0;">
            Sonuç: ${toplama} </span>`;
        }
        else if(document.querySelector("#cikarma").checked)
        {
            let cikarma = sayi1 - sayi2;
            document.querySelector(".sonuc").innerHTML = `
            <span style="padding: 0; margin: 0;">
            Sonuç: ${cikarma} </span>`;
        }
        else if(document.querySelector("#carpma").checked)
        {
            let carpma = sayi1 * sayi2;
            document.querySelector(".sonuc").innerHTML = `
            <span style="padding: 0; margin: 0;">
            Sonuç: ${carpma} </span>`;
        }
        else
        {
            let bolme = sayi1 / sayi2;
            document.querySelector(".sonuc").innerHTML = `
            <span style="padding: 0; margin: 0;">
            Sonuç: ${bolme} </span>`;
        }
    }
    else
    {
        document.querySelector(".sonuc").innerHTML = `
        <span style="padding: 0; margin: 0;">
        Alanlara Sayı Giriniz! </span>`;
    }

    

    
}


