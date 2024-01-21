var randomNumber = Math.floor(Math.random()*18)+1;

var password = new Array(20);
password[0] = "Zosia";
password[1] = "Poznań";
password[2] = "Gospoda u Grzegorza";
password[3] = "Pan Tadeusz";
password[4] = "Anime";
password[5] = "Wonder Eggs";
password[6] = "Toh fan";
password[7] = "Straszne dzieci z podstawówki";
password[8] = "Kakao z serduszkiem";
password[9] = "Droga bez powrotu";
password[10] = "Cult of the Lamb";
password[11] = "Dawano, dawno temu w odległym Poznaniu";
password[12] = "Kiedy mogę zabrać Zosie na randke";
password[13] = "Tajemnicze miejsce w Poznaniu";
password[14] = "Nastêpnym razem postaramy siê przej¶æ mniej ni¿ ostatnio";
password[15] = "Kiedy idziemy na Śnieżkę";
password[16] = "Telefon po szkole";
password[17] = "Szlachcianka";
password[18] = "Skarbek";

var password1 = password[randomNumber];
password1 = password1.toUpperCase();
var length = password1.length;
var ile_skuch=0;
var yes = new Audio("Media/yes.wav");
var password1v2 = "";

for(i=0; i<length; i++)
{
    if(password1.charAt(i)==" ")
    {
        password1v2 = password1v2 + " ";
    }
    else password1v2 = password1v2 + "-";
}

function write_down_password()
{
    document.getElementById("password").innerHTML = password1v2;
}

window.onload = start;

var letters = new Array(35);

letters[0]="A";
letters[1]="Ą";
letters[2]="B";
letters[3]="C";
letters[4]="Ć";
letters[5]="D";
letters[6]="E";
letters[7]="Ę";
letters[8]="F";
letters[9]="G";
letters[10]="H";
letters[11]="I";
letters[12]="J";
letters[13]="K";
letters[14]="L";
letters[15]="Ł";
letters[16]="M";
letters[17]="N";
letters[18]="Ń";
letters[19]="O";
letters[20]="Ó";
letters[21]="P";
letters[22]="Q";
letters[23]="R";
letters[24]="S";
letters[25]="Ś";
letters[26]="T";
letters[27]="U";
letters[28]="V";
letters[29]="W";
letters[30]="X";
letters[31]="Y";
letters[32]="Z";
letters[33]="Ż";
letters[34]="Ź";

function start()
{
    var div_letter = "";
    
    for(i=0; i<=34; i++)
    {
        var element = 'lit' + i;
        div_letter = div_letter + '<div class="letter" id="'+element+'" onclick="check('+i+')">'+letters[i]+'</div>';
        if((i+1) % 7==0)
        {
            div_letter=div_letter+'<div style="clear: both;"></div>'
        }
    }
    
    document.getElementById("alphabet").innerHTML = div_letter;
    
    write_down_password();
}


String.prototype.setCharacter = function(place, character)
{
    if(place>this.length-1) return this.toString();
    else return this.substr(0, place) + character + this.substr(place + 1);
}

function check(no)
{
    var mach = false;
    
    for(i=0; i<length; i++)
    {
        if(password1.charAt(i)== letters[no])
        {
            password1v2 = password1v2.setCharacter(i, letters[no]);
            mach = true;
        }
    }
    if(mach==true)
    {
        yes.play();
        var element = 'lit' + no;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
    }
    else
    {
        var element = 'lit' + no;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        
        document.getElementById(element).setAttribute("onclick",";")
        
        document.getElementById("gallows").innerHTML='<img src="Media/img/s'+ile_skuch+'.jpg"/>';
        //skucha
        ile_skuch++;
        //Win
        if(password1==password1v2)
        {
            document.getElementById("alphabet").innerHTML = 'Tak jest! To jest poprawne has³o: '+password1+' </br></br><span class="reset" onclick="location.reload()"> JESZCZE RAZ?</span>';
        }
    }
        //Lose
        if(ile_skuch>9)
        {
            document.getElementById("alphabet").innerHTML = 'Przegra³e¶! To jest poprawne has³o: '+password1+' </br></br><span class="reset" onclick="location.reload()"> JESZCZE RAZ?</span>';
        }
    write_down_password();
}
