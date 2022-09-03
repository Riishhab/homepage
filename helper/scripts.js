// theme function
function themeFunction()
{
    var element = document.body;
    element.classList.toggle("darkMode");
}



// Cash

function cash()
{
    var change = document.getElementById("cashChangeInput").value;
    
    if (change < 0 || isNaN(change))
    {
        cashClear();
        return alert("Please enter positive number");
    }
    
    let nNotes = 0;  // number of notes tracker
    let nCoins = 0;  // number of coins tracker
    
    let HUNDRED = 100;
    let FIFTY = 50;
    let TWENTY = 20;
    let TEN = 10;
    let FIVE = 5;
    let TWO = 2;
    let ONE = 1;
    
    let nHUNDRED = 0;
    let nFIFTY = 0;
    let nTWENTY = 0;
    let nTEN = 0;
    let nFIVE = 0;
    let nTWO = 0;
    let nONE = 0;
    
    let QUARTER = 0.25;
    let DIMES = 0.10;
    let NICKEL = 0.05;
    let PENNY = 0.01;
    
    let nQUARTER = 0;
    let nDIMES = 0;
    let nNICKEL = 0;
    let nPENNY = 0;
    
    var NOTES = [HUNDRED, FIFTY, TWENTY, TEN, FIVE, TWO, ONE];
    var n_NOTES = [nHUNDRED, nFIFTY, nTWENTY, nTEN, nFIVE, nTWO, nONE];
    
    var CENTS = [QUARTER, DIMES, NICKEL, PENNY];
    var nCENTS = [nQUARTER, nDIMES, nNICKEL, nPENNY];
    
    for (var coin = 0; coin < NOTES.length; coin++)
    {
        nNotes += Math.floor(change / NOTES[coin]);  // adding the number of coins
        n_NOTES[coin] = Math.floor(change / NOTES[coin]);  // tracking note value
        change = (change % NOTES[coin]).toFixed(2);  // rounding to two places after decimal
    }
    
    for (var coin = 0; coin < CENTS.length; coin++)
    {
        nCoins += Math.floor(change / CENTS[coin]);  // adding the number of coins
        nCENTS[coin] = Math.floor(change / CENTS[coin]);  // tracking coin value
        change = (change % CENTS[coin]).toFixed(2);  // rounding to two places after decimal
    }
    
    for (var i = 0; i < n_NOTES.length; i++)
    {
        if (n_NOTES[i] > 0)
        {
            document.getElementById("cashNoteId" + i).value = n_NOTES[i];
        }
    }
    for (var i = 0; i < nCENTS.length; i++)
    {
        if (nCENTS[i] > 0)
        {
            document.getElementById("cashCoinId" + i).value = nCENTS[i];
        }
    }
    
    console.log(nNotes);
    console.log(nCoins);
    console.log(n_NOTES);
    console.log(nCENTS);
}

function cashClear()
{
    document.getElementById("cashChangeInput").value = "";

    for (var i = 0; i < 7; i++)
    {
        document.getElementById("cashNoteId" + i).value = 0;
    }
    for (var i = 0; i < 4; i++)
    {
        document.getElementById("cashCoinId" + i).value = 0;
    }
}



// Contact
function contSubmit()
{
    var cname = document.getElementById("contInputName").value;
    console.log(cname);

    if (cname != "")
    {
        document.getElementById("contAlertid").classList.toggle("show");
        document.getElementById("contOutputName").innerHTML = cname;
        // document.getElementById("contAlertid").style.visibility = "visible";
    }

    document.getElementById("contInputName").value = "";
    document.getElementById("contInputEmail").value = "";
    document.getElementById("contInputNumber1").value = "";
    document.getElementById("contInputNumber2").value = "";
    
    document.getElementById("contTextarea").value = "";
}

function contDismiss()
{
    document.getElementById("contAlertid").classList.toggle("show");
}



// credit
function credit()
{

    var cardnum = "" + document.getElementById("creditCardInput").value;

    
    len = cardnum.length;  // length of string
    
    var list1 = [];  // first finding products of digits from second-to-last
    
    for (var i = len - 1; i > 0; i = i - 2)
    {
        list1.push(2 * Number(cardnum[i - 1]));
    }

    var sum1 = 0;  // then adding the digits of the product

    for (var i = 0; i < list1.length; i++)
    {
        var temp = 0;
        var strlist = '' + list1[i];
        for (var j = 0; j < strlist.length; j++)
        {
            temp += Number(strlist[j]);
        }
        sum1 += temp;
    }
    
    var sum2 = 0;
    
    for (var i = len - 1; i > -1; i = i - 2)
    {
        sum2 += Number(cardnum[i]);
    }

    var sum3 = '' + (sum1 + sum2);

    var AMEX_LIST = [34, 37];
    var MASTER_LIST = [51, 52, 53, 54, 55];
    
    var first_two_digits = Number(cardnum.slice(0, 2));  // slicing string to get first 2 characters
    var first_digit = Number(cardnum.slice(0, 1));
    var end_digit = Number(sum3.slice(-1));
    
    if (end_digit === 0)
    {
        if (AMEX_LIST.includes(first_two_digits) && len === 15)
        {
            document.getElementById("creditOutputField").value = "AMERICAN EXPRESS";
        }
        else if (MASTER_LIST.includes(first_two_digits) && len === 16)
        {
            document.getElementById("creditOutputField").value = "MASTERCARD";
        }
        else if (first_digit === 4 && (len === 13 || len === 16))
        {
            document.getElementById("creditOutputField").value = "VISA";
        }
        else
        {
            document.getElementById("creditOutputField").value = "INVALID / NOT SUPPORTED";
        }
    }
    else
    {
        document.getElementById("creditOutputField").value = "INVALID / NOT SUPPORTED";
    }
}

function creditClear()
{
    document.getElementById("creditCardInput").value = "";
    document.getElementById("creditOutputField").value = "";
}



// Index - home
function homeThemeFunction()
{
    var element = document.body;
    element.classList.toggle("darkMode");

    const h = document.getElementsByClassName("homeBorderSwitch")
    for (var  i = 0; i < h.length; i++)
    {
        h[i].classList.toggle("homeBorderOFF");
    }
}



// Readability
function readability()
{
    var text = document.getElementById("textareaReadability").value;
    text = text.trim();
    
    let count_letters = 0;
    let count_words = 1;
    let count_sentences = 0
    
    for (let i = 0; i < text.length; i++)
    {
        if (text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91 || text.charCodeAt(i) > 96 && text.charCodeAt(i) < 123)
        {
            count_letters++;
        }
        
        if (text[i] == " ")
        {
            count_words++;
        }
        
        if (text[i] == "!" || text[i] == "." || text[i] == "?")
        {
            count_sentences++;
        }
    }

    if (text.length == 0)
    {
        count_words = 0;
    }
    
    let L = ((count_letters /  count_words) * 100.0).toFixed(2);
    let S = ((count_sentences /  count_words) * 100.0).toFixed(2);

    let index = (0.0588 * L - 0.296 * S - 15.8).toFixed(); // Coleman-Liau formula

    if (index <= 1)
    {
        document.getElementById("readabilityResult").innerHTML = "Before Grade 1";
    }
    else if (index > 16)
    {
        document.getElementById("readabilityResult").innerHTML = "Grade 16+";
    }
    else
    {
        document.getElementById("readabilityResult").innerHTML = ("Grade " + index);
    }
    
}

function clearreadability()
{
    document.getElementById("textareaReadability").value = "";
    document.getElementById("readabilityResult").innerHTML = "";
}