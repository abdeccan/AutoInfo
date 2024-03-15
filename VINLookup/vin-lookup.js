/*
    Honda cars have the below convention for month and year
*/
var  Month_Codes = new Object();
Month_Codes['A'] = 'JAN';
Month_Codes['B'] = 'FEB';
Month_Codes['C'] = 'MAR';
Month_Codes['D'] = 'APR';
Month_Codes['E'] = 'MAY';
Month_Codes['F'] = 'JUN';
Month_Codes['G'] = 'JUL';
Month_Codes['H'] = 'AUG';
Month_Codes['I'] = 'SEP';
Month_Codes['J'] = 'OCT';
Month_Codes['K'] = 'NOV';
Month_Codes['L'] = 'DEC';

var Year_Codes = new Object();
Year_Codes['A'] = '2010';
Year_Codes['B'] = '2011';
Year_Codes['C'] = '2012';
Year_Codes['D'] = '2013';
Year_Codes['E'] = '2014';
Year_Codes['F'] = '2015';
Year_Codes['G'] = '2016';
Year_Codes['H'] = '2017';
Year_Codes['J'] = '2018';
Year_Codes['K'] = '2019';
Year_Codes['L'] = '2020';
Year_Codes['M'] = '2021';
Year_Codes['N'] = '2022';
Year_Codes['P'] = '2023';
Year_Codes['R'] = '2024';
Year_Codes['S'] = '2025';
Year_Codes['T'] = '2026';
Year_Codes['V'] = '2027';
Year_Codes['W'] = '2028';
Year_Codes['X'] = '2029';
Year_Codes['Y'] = '2030';



function DecodeVIN() {
    var vin = document.getElementById('vin_entry').value;
    var monthChar = vin.charAt(8);
    var yearChar = vin.charAt(9);
    var month = Month_Codes[monthChar];
    var year = Year_Codes[yearChar];
    var monthAndYear = month + " " + year;
    document.getElementById('monthAndYear').innerText = monthAndYear;
};