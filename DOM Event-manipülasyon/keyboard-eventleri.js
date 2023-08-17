//keyboard eventleri


const text = document.getElementById('txtTaskname');

//focus
text.addEventListener("focus", run);
//BLUR Focıustan cıktıktan sonra
// Paste-cut-copy adları gibi 
// Select Seçim yapıldıgında devreye girer

//Keyup keydown klavyeye basılınca keydown bırakınca keyup devreye girer

//key up sayesinde ne yazılmış anlayabiliriz console.log(e.target.value)




function run(e) {
    console.log(e.type);
};