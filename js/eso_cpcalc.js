var cptext = ["Unangreifbar","Magieschild","Dickhäutig","Abgehärtet","Elementarverteidiger","Schnelle Erholung","Fokus auf schwere Rüstung"];
var vhr = {
    cp160: [8,7,9,15,15,0,0],
    cpseq: ["ic","ts","ts","ed","ed","ed","ed","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ed","ed","ed","ed","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ts","ed","ed","ed","ed","hy","hy","hy","hy","ss","ss","ic","ic","ic","ts","ts","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ts","ed","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","hy","ss","ss","ic","ic","ic","ts","ts","ts","ed","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","hy","ss","ss","ic","ic","ic","ts","ts","ed","ed","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ic","ic","ic","ts","ts","ts","ts","ic","ic","ic","ic","ts","ts","ts","ts","ic","ic","ic","ic","ts","ts","ts","ts","ic","ic","ic","ic","ts","ts","ts","ts","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic"]
};
var vaa = {
    cp160: [11,9,13,0,21,0,0],
    cpseq: ["ed","ed","ss","ss","ic","ic","ts","ts","ts","ed","ed","ed","ed","ss","ss","ic","ic","ic","ts","ts","ed","ed","ed","ed","ed","ss","ss","ic","ic","ts","ts","ed","ed","ed","ed","ed","ss","ss","ic","ic","ts","ts","ts","ed","ed","ed","ed","ed","ed","ss","ss","ic","ic","ic","ts","ts","ts","ed","ed","ed","ed","ed","ed","ss","ss","ic","ic","ic","ts","ts","ed","ed","ed","ed","ed","ed","ed","ss","ss","ic","ic","ts","ts","ts","ed","ed","ed","ed","ed","ed","ed","ed","ss","ss","ic","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ts","ss","ss","ic","ic","ic","ic","ts","ts","ts","ts","ss","ss","ic","ic","ic","ic","ts","ts","ts","ts","ss","ss","ic","ic","ic","ic","ts","ts","ts","ts","ss","ss","ic","ic","ic","ic","ss","ss","ic","ic","ic","ic","ic","ss","ss","ic","ic","ic","ic","ic","ss","ss","ic","ic","ic","ic","ic","ic","ss","ss","ic","ic","ic","ic","ic","ic","ic","ic","ic","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss"]
};
var vso = {
    cp160: [8,7,9,15,15,0,0],
    cpseq: ["ic","ts","ts","ed","ed","ed","ed","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ed","ed","ed","ed","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ts","ed","ed","ed","ed","hy","hy","hy","hy","ss","ss","ic","ic","ic","ts","ts","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ts","ed","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","hy","ss","ss","ic","ic","ic","ts","ts","ts","ed","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","hy","ss","ss","ic","ic","ic","ts","ts","ed","ed","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ts","ss","ss","ic","ic","ic","ic","ts","ts","ts","ts","ss","ss","ic","ic","ic","ic","ts","ts","ts","ts","ss","ic","ic","ic","ic","ts","ts","ts","ts","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic"]
};
var vmol = {
    cp160: [8,7,9,15,15,0,0],
    cpseq: ["ic","ts","ts","ed","ed","ed","ed","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ed","ed","ed","ed","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ts","ed","ed","ed","ed","hy","hy","hy","hy","ss","ss","ic","ic","ic","ts","ts","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ts","ed","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","hy","ss","ss","ic","ic","ic","ts","ts","ts","ed","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","hy","ss","ss","ic","ic","ic","ts","ts","ed","ed","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ic","ic","ic","ts","ts","ts","ts","ic","ic","ic","ic","ts","ts","ts","ts","ic","ic","ic","ic","ts","ts","ts","ts","ic","ic","ic","ic","ts","ts","ts","ts","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic"]
};
var vhof = {
    cp160: [8,7,9,15,15,0,0],
    cpseq: ["ic","ts","ts","ed","ed","ed","ed","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ed","ed","ed","ed","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ts","ed","ed","ed","ed","hy","hy","hy","hy","ss","ss","ic","ic","ic","ts","ts","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ts","ed","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","hy","ss","ss","ic","ic","ic","ts","ts","ts","ed","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","hy","ss","ss","ic","ic","ic","ts","ts","ed","ed","ed","ed","ed","ed","ed","hy","hy","hy","hy","hy","hy","hy","ss","ss","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ic","ic","ic","ts","ts","ts","ts","ic","ic","ic","ic","ts","ts","ts","ts","ic","ic","ic","ic","ts","ts","ts","ts","ic","ic","ic","ic","ts","ts","ts","ts","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic"]
};
var vas = {
    cp160: [11,9,13,0,21,0,0],
    cpseq: ["ed","ed","ss","ss","ic","ic","ts","ts","ts","ed","ed","ed","ed","ss","ss","ic","ic","ic","ts","ts","ed","ed","ed","ed","ed","ss","ss","ic","ic","ts","ts","ed","ed","ed","ed","ed","ss","ss","ic","ic","ts","ts","ts","ed","ed","ed","ed","ed","ed","ss","ss","ic","ic","ic","ts","ts","ts","ed","ed","ed","ed","ed","ed","ss","ss","ic","ic","ic","ts","ts","ed","ed","ed","ed","ed","ed","ed","ss","ss","ic","ic","ed","ed","ed","ed","ed","ed","ed","ed","ss","ss","ic","ic","ic","ed","ed","ed","ed","ed","ed","ed","ed","ed","ed","ed","ss","ss","ic","ic","ic","ss","ss","ic","ic","ic","ss","ss","ic","ic","ic","ss","ss","ic","ic","ic","ic","ss","ss","ic","ic","ic","ic","ss","ss","ic","ic","ic","ic","ss","ss","ic","ic","ic","ic","ss","ss","ic","ic","ic","ic","ic","ss","ss","ic","ic","ic","ic","ic","ss","ss","ic","ic","ic","ic","ic","ic","ss","ss","ic","ic","ic","ic","ic","ic","ic","ic","ic","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss"]
};
var vcr = {
    cp160: [8,7,9,0,15,15,0],
    cpseq: ["ic","qr","qr","qr","qr","ts","ts","ed","ed","ed","ed","ss","ss","ic","ic","qr","qr","qr","qr","ts","ts","ed","ed","ed","ed","ss","ss","ic","ic","qr","qr","qr","qr","ts","ts","ts","ed","ed","ed","ed","ss","ss","ic","ic","ic","qr","qr","qr","qr","qr","ts","ts","ed","ed","ed","ed","ed","ss","ss","ic","ic","ts","ts","ed","ed","ed","ed","ed","ss","ss","ic","ic","ts","ts","ts","ed","ed","ed","ed","ed","ed","ss","ss","ic","ic","ic","ts","ts","ts","ed","ed","ed","ed","ed","ed","ss","ss","ic","ic","ic","ts","ts","ed","ed","ed","ed","ed","ed","ed","ss","ss","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ts","ss","ss","ic","ic","ic","ic","ts","ts","ts","ts","ss","ss","ic","ic","ic","ic","ts","ts","ts","ts","ss","ss","ic","ic","ic","ic","ts","ts","ts","ts","ss","ss","ic","ic","ic","ic","ss","ss","ic","ic","ic","ic","ic","ss","ss","ic","ic","ic","ic","ic","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss","ss"]
};
var vss = {
    cp160: [8,7,9,0,15,15,0],
    cpseq: ["ic","qr","qr","qr","qr","ts","ts","ed","ed","ed","ed","ss","ss","ic","ic","qr","qr","qr","qr","ts","ts","ed","ed","ed","ed","ss","ss","ic","ic","qr","qr","qr","qr","ts","ts","ts","ed","ed","ed","ed","ss","ss","ic","ic","ic","qr","qr","qr","qr","qr","ts","ts","ed","ed","ed","ed","ed","ss","ss","ic","ic","ts","ts","ed","ed","ed","ed","ed","ss","ss","ic","ic","ts","ts","ts","ed","ed","ed","ed","ed","ed","ss","ss","ic","ic","ic","ts","ts","ts","ed","ed","ed","ed","ed","ed","ss","ss","ic","ic","ic","ts","ts","ed","ed","ed","ed","ed","ed","ed","ss","ss","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ss","ss","ic","ic","ic","ts","ts","ts","ts","ss","ss","ic","ic","ic","ic","ts","ts","ts","ts","ss","ss","ic","ic","ic","ic","ts","ts","ts","ts","ss","ss","ic","ic","ic","ic","ts","ts","ts","ts","ss","ss","ic","ic","ic","ic","ss","ss","ic","ic","ic","ic","ic","ss","ss","ic","ic","ic","ic","ic","ss","ss","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic","ic"]
};

function calc() {
    var iCp = parseInt(document.getElementById("cp").value);
    
    if (iCp >= 160 && iCp <= 810) {
        var iRaid = document.getElementById("raid").value;

        var cp, seq;
        switch (iRaid) {
            case "vhr":  cp = vhr.cp160.slice();  seq = vhr.cpseq; break;
            case "vaa":  cp = vaa.cp160.slice();  seq = vaa.cpseq; break;
            case "vso":  cp = vso.cp160.slice();  seq = vso.cpseq; break;
            case "vmol": cp = vmol.cp160.slice(); seq = vmol.cpseq; break;
            case "vhof": cp = vhof.cp160.slice(); seq = vhof.cpseq; break;
            case "vas":  cp = vas.cp160.slice();  seq = vas.cpseq; break;
            case "vcr":  cp = vcr.cp160.slice();  seq = vcr.cpseq; break;
            case "vss":  cp = vss.cp160.slice();  seq = vss.cpseq; break;
            default: cp = [0,0,0,0,0,0,0]; seq = []; break;
        }
        var length = Math.floor((iCp-160) / 3);    
        for (var i = 0; i < length; i++){
            switch (seq[i]){
                case "ic": cp[0]++; break;
                case "ss": cp[1]++; break;
                case "ts": cp[2]++; break;
                case "hy": cp[3]++; break;
                case "ed": cp[4]++; break;
                case "qr": cp[5]++; break;
                case "hf": cp[6]++; break;
            }
        }
     
        var result = "";
        for (var i = 0; i < cp.length; i++){
            if (cp[i] > 0)
                result += cptext[i] + " (" + cp[i] + "), ";
        }
        if (result !== "") {
            result = result.substring(0, result.length-2);
            var raid = document.getElementById("raid");
            var title = "<b>Verteilung bei " + iCp + " Championpunkten für " + raid.options[raid.selectedIndex].text + ":</b>";
            document.getElementById("result").innerHTML = title + "<br>" + result;
            document.getElementById("result").style = "display:block";
            return;
        }
    }
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").style = "display:none";
}

window.onload = function() {
    document.getElementById('cp').value = '';
}