// ==========================================
// SKYMET - CALCULATEUR AÉRONAUTIQUE V2.4.0
// ==========================================

// ---------- TABLEAUX DE DONNÉES ----------
const TAB1 = [
    ["", 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
    [10.0,1227,1235,1244,1252,1251,1259,1278,1285,1295,1303],
    [11.0,1312,1321,1329,1338,1347,1356,1365,1374,1383,1393],
    [12.0,1402,1411,1420,1430,1439,1449,1458,1468,1477,1487],
    [13.0,1497,1507,1517,1527,1537,1547,1557,1567,1577,1587],
    [14.0,1598,1608,1619,1639,1640,1650,1661,1672,1683,1694],
    [15.0,1704,1715,1727,1736,1749,1760,1771,1783,1794,1806],
    [16.0,1871,1829,1841,1853,1864,1876,1888,1900,1912,1925],
    [17.0,1937,1949,1961,1974,1986,1999,2012,2024,2037,2050],
    [18.0,2063,2076,2089,2102,2116,2129,2142,2156,2169,2153],
    [19.0,2185,2210,2224,2235,2252,2266,2280,2294,2309,2323],
    [20.0,2337,2352,2366,2351,2396,2411,2426,2441,2456,2471],
    [21.0,2486,2501,2517,2532,2548,2564,2579,2585,2611,2627],
    [22.0,2643,2659,2675,2692,2708,2725,2741,2752,2775,2792],
    [23.0,2809,2826,2843,2860,2877,2895,2912,2930,2948,2963],
    [24.0,2983,3001,3019,3037,3056,3074,3092,3111,3130,3148],
    [25.0,3167,3186,3205,3224,3243,3265,3282,3302,3321,3341],
    [26.0,3361,3381,3401,3421,3441,3462,3482,3503,3523,3544],
    [27.0,3365,3386,3607,3628,3650,3671,3692,3714,3736,3758],
    [28.0,3780,3802,3824,3845,3869,3891,3914,3937,3959,3982],
    [29.0,4005,4029,4052,4076,4099,4123,4147,4171,4195,4219],
    [30.0,4243,4267,4292,4317,4341,4368,4391,4417,4442,4461]
];

const TAB2 = [
    ["",0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9],
    [0.0,0.0,0.08,0.16,0.23,0.31,0.39,0.47,0.55,0.62,0.7],
    [1.0,0.75,0.86,0.93,1.01,1.09,1.17,1.25,1.32,1.4,1.48],
    [2.0,1.56,1.64,1.71,1.79,1.87,1.95,2.03,2.1,2.1,2.26],
    [3.0,2.34,2.42,2.49,2.57,2.65,2.73,2.81,2.88,2.96,3.04],
    [4.0,3.12,3.19,3.27,3.35,3.43,3.51,3.58,3.66,3.74,3.82],
    [5.0,3.9,3.97,4.05,4.13,4.21,4.29,4.36,4.44,4.52,4.6],
    [6.0,4.68,4.75,4.83,4.91,4.99,5.06,5.14,5.22,5.3,5.38],
    [7.0,5.45,5.53,5.61,5.69,5.77,5.84,5.92,6.0,6.08,6.16],
    [8.0,6.23,6.31,6.39,6.47,6.55,6.62,6.7,6.78,6.86,6.93],
    [9.0,7.03,7.09,7.17,7.25,7.32,7.4,7.48,7.56,7.64,7.71],
    [10.0,7.79,7.87,7.95,8.03,8.1,8.18,8.26,8.34,8.42,8.49],
    [11.0,8.57,8.63,8.73,8.8,8.88,8.96,9.04,9.11,9.19,9.27],
    [12.0,9.35,9.43,9.51,9.58,9.66,9.74,9.82,9.9,9.97,10.05],
    [13.0,10.13,10.21,10.29,10.36,10.44,10.52,10.6,10.68,10.75,10.83],
    [14.0,10.91,10.99,11.06,11.14,11.22,11.3,11.38,11.45,11.53,11.61],
    [15.0,11.69,11.77,11.84,11.92,12.0,12.08,12.16,12.23,12.31,12.4],
    [16.0,12.47,12.55,12.62,12.70,12.78,12.86,12.93,13.01,13.09,13.17],
    [17.0,13.25,13.32,13.4,13.48,13.56,13.64,13.71,13.79,13.87,13.95],
    [18.0,14.03,14.1,14.18,14.26,14.34,14.42,14.49,14.57,14.65,14.73],
    [19.0,14.8,14.88,14.96,15.04,15.12,15.19,15.27,15.35,15.43,15.51]
];

const TAB3 = [
  ["",0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9],
  [-4.0,34,30,27,23,20,17,13,10,7,4],
  [-3.0,66,62,60,56,52,50,46,43,39,37],
  [-2.0,98,95,92,88,85,82,79,76,72,69],
  [-1.0,130,127,124,120,117,114,111,107,104,101],
  [0.0,162,158,155,152,148,146,143,139,136,133],
  [0.0,162,165,168,171,174,177,181,184,187,190],
  [1.0,193,196,199,202,206,209,212,215,218,221],
  [2.0,224,228,231,234,237,240,243,246,249,252],
  [3.0,255,258,261,264,267,271,273,277,280,283],
  [4.0,286,289,292,295,298,301,304,307,310,313],
  [5.0,316,319,322,325,329,331,334,337,340,343],
  [6.0,347,349,353,355,358,361,364,367,370,373],
  [7.0,376,379,382,385,388,391,394,397,400,403],
  [8.0,406,409,412,415,418,421,424,426,430,433],
  [9.0,435,438,441,444,447,450,453,456,459,462],
  [10.0,465,468,471,473,476,479,482,485,488,491],
  [11.0,494,497,499,502,505,508,511,514,517,520],
  [12.0,522,525,528,531,534,537,539,542,545,548],
  [13.0,551,554,557,560,562,565,568,571,574,576],
  [14.0,579,582,585,588,591,593,596,599,602,605],
  [15.0,607,610,613,616,619,621,624,627,630,632],
  [16.0,635,638,641,644,646,649,652,654,657,660],
  [17.0,663,666,668,671,674,677,679,682,685,687],
  [18.0,690,693,696,698,701,704,707,709,710,715],
  [19.0,717,720,723,726,728,731,734,736,739,742],
  [20.0,744,747,750,752,755,758,761,763,766,769],
  [21.0,771,774,777,779,782,785,787,790,792,795],
  [22.0,798,800,803,806,808,811,815,816,819,822],
  [23.0,824,827,830,832,835,837,866,869,871,874],
  [24.0,850,853,856,858,861,863,866,869,871,874],
  [25.0,876,879,882,884,887,889,892,895,897,900],
  [26.0,902,905,907,910,912,915,918,920,923,925],
  [27.0,928,930,933,935,938,941,943,946,948,951],
  [28.0,953,956,958,961,963,966,968,971,973,976],
  [29.0,978,981,983,986,988,991,993,996,998,1001],
  [30.0,1003,1006,1008,1011,1013,1016,1018,1021,1023,1026],
  [31.0,1028,1031,1033,1036,1038,1041,1043,1046,1048,1050],
  [32.0,1053,1055,1058,1060,1063,1065,1068,1070,1073,1075],
  [33.0,1077,1080,1082,1085,1087,1090,1092,1094,1097,1099],
  [34.0,1102,1104,1107,1109,1111,1114,1116,1119,1121,1123],
  [35.0,1126,1128,1131,1133,1135,1138,1140,1143,1145,1147],
  [36.0,1150,1152,1154,1157,1159,1162,1164,1166,1169,1171],
  [37.0,1173,1176,1178,1181,1183,1185,1188,1190,1192,1199],
  [38.0,1197,1199,1202,1204,1206,1209,1211,1213,1216,1218],
  [39.0,1220,1223,1225,1227,1230,1232,1234,1237,1239,1241]
];

const HUMIDITE = [
  [100,0,75,125,50,301,25,602],
  [99,4,74,131,49,310,24,620],
  [98,9,73,137,48,319,23,638],
  [97,13,72,143,47,328,22,658],
  [96,18,71,149,46,337,21,678],
  [95,22,70,155,45,347,20,699],
  [94,27,69,161,44,357,19,721],
  [93,31,68,167,43,367,18,745],
  [92,36,67,174,42,377,17,770],
  [91,41,66,180,41,387,16,796],
  [90,46,65,187,40,398,15,824],
  [89,51,64,194,39,409,14,854],
  [88,55,63,201,38,420,13,886],
  [87,60,62,208,37,432,12,921],
  [86,65,61,215,36,444,11,959],
  [85,71,60,222,35,456,10,1000],
  [84,76,59,230,34,468,9,1046],
  [83,81,58,237,33,481,8,1097],
  [82,86,57,244,32,495,7,1155],
  [81,92,56,252,31,509,6,1122],
  [80,97,55,260,30,523,5,1301],
  [79,102,54,268,29,538,4,1398],
  [78,108,53,276,28,553,3,""],
  [77,118,52,284,27,569,2,""],
  [76,120,51,292,26,585,1,""]
];


// ====================================================================
// TABLEAU QFE (Pression)
// ====================================================================
const QFE = [
    [null,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994],
    [15.0,953.9,954.9,955.9,956.9,957.9,958.9,959.9,960.9,961.9,962.9,963.9,964.9,965.9,966.9,967.9,968.9,969.9,970.9,971.9,972.9,973.9,974.8,975.8,976.8,977.8,978.8,979.8,980.8,981.8,982.8,983.8,984.8,985.8,986.8,987.8,988.8],
    [15.5,953.9,954.9,955.9,956.9,957.8,958.8,959.8,960.8,961.8,962.8,963.8,964.8,965.8,966.8,967.8,968.8,969.8,970.8,971.8,972.8,973.8,974.8,975.8,976.8,977.7,978.7,979.7,980.7,981.7,982.7,983.7,984.7,985.7,986.7,987.7,988.7],
    [16.0,953.8,954.8,955.8,956.8,957.8,958.8,959.8,960.8,961.7,962.7,963.7,964.7,965.7,966.7,967.7,968.7,969.7,970.7,970.7,972.7,973.7,974.7,975.7,976.7,977.7,978.7,979.7,980.6,981.6,982.6,983.6,984.7,985.6,986.6,987.6,988.6],
    [16.5,953.7,954.7,955.7,956.7,957.7,958.7,959.7,960.7,961.7,962.7,963.7,964.7,965.6,966.6,967.6,968.6,969.6,970.6,971.6,972.6,973.6,974.6,975.6,976.6,977.6,978.6,979.6,980.6,981.6,982.6,983.6,984.6,985.6,986.6,987.6,988.5],
    [17.0,953.6,954.6,955.6,956.6,957.6,958.6,959.6,960.6,961.6,962.6,963.6,964.6,965.6,966.6,967.6,968.5,969.5,970.5,971.5,972.5,973.5,974.5,975.5,976.5,977.5,978.5,979.5,980.5,981.5,982.5,983.5,984.5,985.5,986.5,987.5,988.5],
    [17.5,953.5,954.5,955.5,956.5,957.5,958.5,959.5,960.5,961.5,962.5,963.5,964.5,965.5,966.5,967.5,968.5,969.5,970.5,971.5,972.4,973.4,974.4,975.4,976.4,977.4,978.4,979.4,980.4,981.4,982.4,983.4,984.4,985.4,986.4,987.4,988.4],
    [18.0,953.5,954.5,955.5,956.5,957.4,958.4,959.4,960.4,961.4,962.4,963.4,964.4,965.4,966.4,967.4,968.4,969.4,970.4,971.4,972.4,973.4,974.4,975.4,976.3,977.3,978.3,979.3,980.3,981.3,982.3,983.3,984.3,985.3,986.3,987.3,988.3],
    [18.5,953.4,954.4,955.4,956.4,957.4,958.4,959.4,960.4,961.3,962.3,963.3,964.3,965.3,966.3,967.3,968.3,969.3,970.3,971.3,972.3,973.3,974.3,975.3,976.3,977.3,978.2,979.2,980.2,981.2,982.2,983.2,984.2,985.2,986.2,987.2,988.2],
    [19.0,953.3,954.3,955.3,956.3,957.3,958.3,959.3,960.3,961.3,962.3,963.3,964.2,965.2,966.2,967.2,968.2,969.2,970.2,971.2,972.2,973.2,974.2,975.2,976.2,977.2,978.2,979.2,980.2,981.1,982.1,983.1,984.2,985.2,986.1,987.2,988.1],
    [19.5,953.2,954.2,955.2,956.2,957.2,958.2,959.2,960.2,961.2,962.2,963.2,964.2,965.2,966.2,967.1,968.1,969.1,970.1,971.1,972.1,973.1,974.1,975.1,976.1,977.1,978.1,979.1,980.1,981.1,982.1,983.1,984.1,985.1,986.1,987.1,988.0],
    [20.0,953.1,954.1,955.1,956.1,957.1,958.1,959.1,960.1,961.2,962.1,963.1,964.1,965.1,966.1,967.1,968.1,969.0,970.1,971.0,972.0,973.0,974.0,975.0,976.0,977.0,978.0,979.0,980.0,980.0,982.0,983.0,984.0,985.1,986.0,987.1,988.0],
    [20.5,953.1,954.1,955.1,956.1,957.0,958.0,959.0,960.0,961.1,962.0,963.0,964.0,965.0,966.0,967.0,968.0,969.0,970.0,971.0,972.0,973.9,973.9,974.9,975.9,976.9,977.9,978.9,979.9,980.9,981.9,982.9,983.9,985.0,985.9,987.0,987.9],
    [21.0,953.0,954.0,955.0,956.0,957.0,958.0,959.0,959.9,961.0,961.9,962.9,963.9,964.9,965.9,966.9,967.9,968.9,969.9,970.9,971.9,972.9,973.9,974.9,975.8,976.8,977.8,978.8,979.8,980.8,981.8,982.8,983.8,984.9,985.8,986.9,987.8],
    [21.5,952.9,953.9,954.9,955.9,956.9,957.9,958.9,959.9,960.9,961.8,962.8,963.8,964.8,965.8,966.8,967.8,968.8,969.8,970.8,971.8,972.8,973.8,974.8,975.8,976.8,977.8,978.7,979.7,980.7,981.7,982.7,983.7,984.8,985.7,986.8,987.7],
    [22.0,952.8,953.8,954.8,955.8,956.8,957.8,958.8,959.8,960.9,961.8,962.8,963.8,964.7,965.7,966.7,967.7,968.7,969.7,970.7,971.7,972.7,973.7,974.7,975.7,976.7,977.7,978.7,979.7,980.6,981.6,982.6,983.7,984.7,985.6,986.7,987.6],
    [22.5,952.7,953.7,954.7,955.7,956.7,957.7,958.7,959.7,960.8,961.7,962.7,963.7,964.7,965.7,966.7,967.6,968.6,969.6,970.6,971.6,972.6,973.6,974.6,975.6,976.6,977.6,978.6,979.6,980.6,981.6,982.6,983.6,984.7,985.6,986.5,987.5],
    [23.0,952.7,953.7,954.7,955.6,956.6,957.6,958.6,959.6,960.7,961.6,962.6,963.6,964.6,965.6,966.6,967.6,968.6,969.6,970.6,971.5,972.5,973.5,974.5,975.5,976.5,977.5,978.5,979.5,980.5,981.5,982.5,983.5,984.6,985.5,986.5,987.5],
    [23.5,952.6,953.6,954.6,955.6,956.6,957.5,958.5,959.5,960.6,961.5,962.5,963.5,964.5,965.5,966.5,967.5,968.5,969.5,970.5,971.5,372.5,973.4,974.4,975.4,976.4,977.4,978.4,979.4,980.4,981.4,982.4,983.4,984.5,985.4,986.4,987.4],
    [24.0,952.5,953.5,954.5,955.5,956.5,957.5,958.5,959.5,960.5,961.4,962.4,963.4,964.4,965.4,966.4,967.4,965.4,969.4,970.4,971.4,972.4,973.4,974.4,975.3,976.4,977.3,978.3,979.3,980.3,981.3,982.3,983.3,984.4,985.3,986.3,987.3],
    [24.5,952.4,953.4,954.4,955.4,956.4,957.4,958.4,959.4,960,4,961.4,962.4,963.4,964.3,965.3,966.3,967.3,968.3,969.3,970.3,971.3,972.3,973.3,974.3,975.3,976.3,977.3,978.3,979.2,980.2,981.2,982.2,983.2,984.3,985.2,986.2,987.2],
    [25.0,952.3,953.3,954.3,955.3,956.3,957.3,958.3,959.3,960.4,961.3,962.3,963.3,964.3,965.3,966.2,967.2,968.2,969.2,970.2,971.2,972.2,973.2,974.2,975.2,976.2,977.2,978.2,979.2,980.2,981.1,982.1,983.2,984.2,985.1,986.1,987.1],
    [25.5,952.3,953.3,954.2,955.2,956.2,957.2,958.2,959.2,960.4,961.2,962.2,963.2,964.2,965.2,966.2,967.2,968.1,969.1,970.1,971.1,972.1,973.1,974.1,975.1,976.1,977.1,978.1,979.1,980.1,981.1,982.1,983.1,984.1,985.1,986.0,987.0],
    [26.0,952.2,953.2,954.2,955.2,956.1,957.1,958.1,959.1,960.3,961.1,962.1,963.1,964.1,965.1,966.1,967.1,968.1,969.1,970.1,971.0,972.0,973.0,974.0,975.0,976.0,977.0,978.0,979.0,980.0,981.0,982.0,983.0,984.1,985.0,986.0,987.0],
    [26.5,952.1,953.1,954.1,955.1,956.1,957.1,958.1,959.1,960.2,961.0,962.0,963.0,964.0,965.0,966.0,967.0,968.0,969.0,970.0,971.0,972.0,973.0,973.9,974.9,975.9,976.9,977.9,978.9,979.9,980.9,981.9,982.9,983.9,984.9,985.9,986.9],
    [27.0,952.0,953.0,954.0,955.0,956.0,957.0,958.0,959.0,960.1,961.0,961.9,962.9,963.9,964.9,965.9,966.9,967.9,968.9,969.9,970.9,971.9,972.9,973.9,974.9,975.8,976.8,977.8,978.8,979.8,980.8,981.8,982.8,983.8,984.8,985.8,986.8],
    [27.5,951.9,952.9,953.9,954.9,955.9,956.9,957.9,958.9,960.0,960.9,961.9,962.9,963.8,964.8,965.8,966.8,967.8,968.8,969.8,970.8,971.8,972.8,973.8,974.8,975.8,976.8,977.8,978.7,979.7,980.8,981.7,982.7,983.7,984.7,985.7,986.7],
    [28.0,951.9,952.8,953.8,954.8,955.8,956.8,957.8,958.8,960.0,960.8,961.8,962.8,963.8,964.8,965.8,966.7,967.7,968.7,969.7,970.7,971.7,972.7,973.7,974.7,975.7,976.7,977.7,978.7,979.7,980.7,981.6,982.7,983.6,984.6,985.6,986.6],
    [28.5,951.8,952.8,953.8,954.8,955.7,956.7,957.7,958.7,959.9,960.7,961.7,962.7,963.7,964.7,965.7,966.7,967.7,968.7,969.6,970.6,971.6,972.6,973.6,974.6,975.6,976.6,977.6,978.6,979.6,980.6,981.6,982.6,983.6,984.6,985.5,986.5],
    [29.0,951.7,952.7,953.7,954.7,955.7,956.6,957.7,958.6,959.8,960.6,961.6,962.6,963.6,964.6,965.6,966.6,967.6,968.6,969.6,970.6,971.5,972.5,973.5,974.5,975.5,976.5,977.5,978.5,979.5,980.6,981.5,982.5,983.5,984.5,985.5,986.5],
    [29.5,951.6,952.6,953.6,954.6,955.6,956.6,957.6,958.6,959.7,960.5,961.5,962.5,963.5,964.5,965.5,966.5,967.5,968.5,969.5,970.5,971.5,972.5,973.5,974.4,975.4,976.4,977.4,978.4,979.4,980.5,981.4,982.4,983.4,984.4,985.4,986.4],
    [30.0,951.5,952.5,953.5,954.5,955.5,956.5,957.5,958.5,959.6,960.5,961.5,962.5,963.4,964.4,965.4,966.4,967.4,968.4,969.4,970.4,971.4,972.4,973.4,974.7,975.4,976.3,977.3,978.3,979.3,980.4,981.3,982.3,983.3,984.3,985.3,986.3],
    [30.5,951.4,952.4,953.4,954.4,955.4,956.4,957.4,958.4,959.6,960.4,961.4,962.4,963.4,964.4,965.3,966.3,967.3,968.3,969.3,970.3,971.3,972.3,973.3,974.3,975.3,976.3,977.3,978.2,979.2,980.3,981.2,982.2,983.2,984.2,985.2,986.2],
    [31.0,951.4,952.4,953.4,954.4,955.3,956.3,957.3,958.3,959.5,960.3,961.3,962.3,963.3,964.3,965.3,966.3,967.2,968.2,969.2,970.2,971.2,972.2,973.2,974.2,975.2,976.2,977.2,978.2,979.2,980.2,981.1,982.2,983.1,984.1,985.1,986.1],
    [31.5,951.3,952.3,953.3,954.3,955.3,956.3,957.2,958.2,959.4,960.2,961.2,962,2,963.2,964.2,965.2,966.2,967.2,968.2,969.2,970.1,971.1,972.1,973.1,974.1,975.1,976.1,977.1,978.1,979.1,980.2,981.1,982.1,983.1,984.1,985.0,986.0],
    [32.0,951.2,952.2,953.2,954.2,955.2,956.2,957.2,958.2,959.1,960.1,961.1,962,1,963.1,964.1,965.1,966.1,967.1,968.1,969.1,970.1,971.1,972.0,973.0,974.0,975.0,976.0,977.0,978.0,979.0,980.1,981.0,982.0,983.0,984.0,985.0,986.0],
    [32.5,951.1,952.1,953.1,954.1,955.1,956.1,957.1,958.1,959.1,960.1,961.1,962.0,963.0,964.0,965.0,966.0,967.0,968.0,969.0,970.0,971.0,972.0,973.0,973.9,974.9,975.9,976.9,977.9,979.0,980.0,980.9,981.9,982.9,983.9,984.9,985.9],
    [33.0,951.0,952.0,953.0,954.0,955.0,956.0,957.0,958.0,959.0,960.0,961.0,962.0,963.0,963.9,964.9,965.9,966.9,967.9,968.9,969.9,970.9,971.9,972.9,973.9,974.9,975.9,976.8,977.8,978.8,979.8,980.8,981.8,982.8,983.8,984.8,985.8],
    [33.5,951.,952.0,953.0,953.9,954.9,955.9,956.9,957.9,957.9,959.9,960.9,961.9,962.9,963.9,964.9,965.8,966.8,967.8,968.8,969.8,970.8,971.8,972.8,973.8,974.8,975.8,976.8,977.7,978.7,979.7,980.7,981.7,982.7,983.7,984.7,985.7],
    [34.0,950.9,951.9,952.9,953.9,954.9,955.8,956.8,957.8,958.8,959.8,960.8,961.8,962.8,963.8,964.8,965.8,966.8,967.7,968.7,969.7,970.7,971.7,972.7,973.7,974.7,975.7,976.7,977.7,978.7,979.7,980.7,981.7,982.6,983.6,984.6,985.6],
    [34.5,952.8,951.8,952.8,953.8,954.8,955.8,956.8,957.8,958.7,959.7,960.7,961.7,962.7,963.7,964.7,965.7,966.7,967.7,968.7,969.7,970.6,971.6,972.6,973.6,974.6,975.6,976.6,977.6,978.6,979.6,980.6,981.6,982.6,983.6,984.5,985.5],
    [35.0,952.7,951.7,952.7,953.7,954.7,955.7,956.7,957.7,958.7,959.7,960.6,961.6,962.6,963.6,964.6,965.6,966.6,967.6,968.6,969.6,970.6,971.6,972.5,973.5,974.5,975.5,976.5,977.5,978.5,979.5,980.5,981.5,982.5,983.5,984.5,985.5],
];

// ====================================================================
// TABLEAU QNH
// ====================================================================
const TABLEAU_QNH = [ 
    [null, 0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
    [960, 996.3, 996.4, 996.5, 996.6, 996.7, 996.8, 996.9, 997.1, 997.2, 997.3],
    [961, 997.4, 997.5, 997.6, 997.7, 997.8, 997.9, 998.0, 998.1, 998.2, 998.3],
    [962, 998.4, 998.5, 998.6, 998.7, 998.8, 998.9, 999.0, 999.1, 999.2, 999.3],
    [963, 994.4, 994.5, 994.6, 994.8, 994.9, 1000.0, 1000.1, 1000.2, 1000.3, 1000.4],
    [964, 1000.5, 1000.6, 1000.7, 1000.8, 1000.9, 1001.0, 1001.1, 1001.2, 1001.3, 1001.4],
    [965, 1001.5, 1001.6, 1001.7, 1001.8, 1001.9, 1002.0, 1002.1, 1002.2, 1002.3, 1002.4],
    [966, 1002.6, 1002.7, 1002.8, 1002.9, 1003.0, 1003.1, 1003.2, 1003.3, 1003.3, 1003.4],
    [967, 1003.6, 1003.7, 1003.8, 1003.9, 1004.0, 1004.1, 1004.2, 1004.3, 1004.4, 1004.5],
    [968, 1004.6, 1004.7, 1004.8, 1004.9, 1005.0, 1005.1, 1005.3, 1005.4, 1005.5, 1005.6],
    [969, 1005.7, 1005.8, 1005.9, 1006.0, 1006.1, 1006.2, 1006.3, 1006.4, 1006.5, 1006.6],
    [970, 1006.7, 1006.8, 1006.9, 1007.0, 1007.1, 1007.2, 1007.3, 1007.4, 1007.5, 1007.6],
    [971, 1007.7, 1007.8, 1008.0, 1008.1, 1008.2, 1008.3, 1008.4, 1008.5, 1008.6, 1008.7],
    [972, 1008.8, 1008.9, 1009.0, 1009.1, 1009.2, 1009.3, 1009.4, 1009.5, 1009.6, 1009.7],
    [973, 1009.8, 1009.9, 1010.0, 1010.1, 1010.2, 1010.3, 1010.4, 1010.5, 1010.6, 1010.8],
    [974, 1010.9, 1011.0, 1011.1, 1011.2, 1011.3, 1011.4, 1011.5, 1011.6, 1011.7, 1011.8],
    [975, 1011.9, 1012.0, 1012.1, 1012.2, 1012.3, 1012.4, 1012.5, 1012.6, 1012.7, 1012.8],
    [976, 1012.9, 1013.0, 1013.1, 1013.2, 1013.3, 1013.5, 1013.6, 1013.7, 1013.8, 1013.9],
    [977, 1014.0, 1014.1, 1014.2, 1014.3, 1014.4, 1014.5, 1014.6, 1014.7, 1014.8, 1014.9],
    [978, 1015.0, 1015.1, 1015.2, 1015.3, 1015.4, 1015.5, 1015.6, 1015.7, 1015.8, 1015.9],
    [979, 1016.0, 1016.1, 1016.3, 1016.4, 1016.5, 1016.6, 1016.7, 1016.8, 1016.9, 1017.0],
    [980, 1017.1, 1017.2, 1017.3, 1017.4, 1017.5, 1017.6, 1017.7, 1017.8, 1017.9, 1018.0],
    [981, 1018.1, 1018.2, 1018.3, 1018.4, 1018.5, 1018.6, 1018.7, 1018.8, 1018.9, 1018.1],
    [982, 1019.2, 1019.3, 1019.4, 1019.5, 1019.6, 1019.7, 1019.8, 1019.9, 1020.0, 1020.1],
    [983, 1020.2, 1020.3, 1020.4, 1020.5, 1020.6, 1020.7, 1020.8, 1020.9, 1021.0, 1021.1],
    [984, 1021.2, 1021.3, 1021.4, 1021.5, 1021.6, 1021.8, 1021.9, 1022.0, 1022.1, 1022.2],
    [985, 1022.3, 1022.4, 1022.5, 1022.6, 1022.7, 1022.8, 1022.9, 1023.0, 1023.1, 1023.2],
    [986, 1023.3, 1023.4, 1023.5, 1023.6, 1023.7, 1023.8, 1023.9, 1024.0, 1024.1, 1024.2],
    [987, 1024.3, 1024.5, 1024.6, 1024.7, 1024.8, 1024.9, 1025.0, 1025.1, 1025.2, 1025.3],
    [988, 1025.4, 1025.5, 1025.6, 1025.7, 1025.8, 1025.9, 1026.0, 1026.1, 1026.2, 1026.3],
    [989, 1026.4, 1026.5, 1026.6, 1026.7, 1026.8, 1026.9, 1027.0, 1027.2, 1027.3, 1027.4],
    [990, 1027.5, 1027.6, 1027.7, 1027.8, 1027.9, 1028.0, 1028.1, 1028.2, 1028.3, 1028.4],
];



// ====================================================================
// FONCTIONS DE CALCUL QFE/QNH
// ====================================================================

/**
 * Calcule QFE à partir de la pression lue et de la température attachée
 */
function calculerQFE() {
    // Récupération des éléments par ID
    const pInput = document.getElementById('pression-lue-input');
    const tInput = document.getElementById('temperature-attachee-input');
    const qfeValueEl = document.getElementById('qfe-value');
    const qnhValueEl = document.getElementById('qnh-value');
    const inhgValueEl = document.getElementById('inhg-value');
    const tendanceIcon = document.getElementById('tendance-icon');
    const tendanceValue = document.getElementById('tendance-value');
    
    // Vérification des éléments
    if (!pInput || !tInput) {
        showToast('❌ Erreur : Champs de saisie QFE/QNH introuvables', 'error');
        return;
    }
    
    // Lecture des valeurs
    const P_lue = parseFloat(pInput.value);
    const T_att = parseFloat(tInput.value);
    
    // === VALIDATIONS ===
    if (isNaN(P_lue)) {
        showToast('⚠️ Veuillez entrer une pression lue valide', 'warning');
        pInput.focus();
        return;
    }
    
    if (isNaN(T_att)) {
        showToast('⚠️ Veuillez entrer une température attachée valide', 'warning');
        tInput.focus();
        return;
    }
    
    if (P_lue < 950 || P_lue > 1000) {
        showToast('🌡️ Pression hors plage (950-1000 hPa)', 'warning');
        pInput.focus();
        pInput.select();
        return;
    }
    
    if (T_att < 10 || T_att > 40) {
        showToast('🌡️ Température hors plage (10-40°C)', 'warning');
        tInput.focus();
        tInput.select();
        return;
    }
    
    // -----------------------
    // 2. Extraire l'entier et la décimale de P.lue
    // -----------------------
    const entierP = Math.floor(P_lue);
    const decimalP = parseFloat((P_lue - entierP).toFixed(2));
    
    // -----------------------
    // 3. Chercher l'index de la colonne Pression entière
    // -----------------------
    const indexCol = QFE[0].indexOf(entierP);
    if (indexCol === -1) {
        showToast(`❌ Pression entière (${entierP}) introuvable dans le tableau QFE`, 'error');
        return;
    }
    
    // -----------------------
    // 4. Chercher l'index de la ligne T.A
    // -----------------------
    let indexLigne = -1;
    const tolerance = 0.001;
    
    for (let i = 1; i < QFE.length; i++) {
        const tempTableau = QFE[i][0];
        if (Math.abs(tempTableau - T_att) < tolerance) {
            indexLigne = i;
            break;
        }
    }
    
    if (indexLigne === -1) {
        showToast(`❌ Température (${T_att}°C) introuvable dans le tableau QFE`, 'error');
        return;
    }
    
    // -----------------------
    // 5. Lecture de la valeur du tableau
    // -----------------------
    const valeurTable = QFE[indexLigne][indexCol];
    if (valeurTable == null || valeurTable === "") {
        showToast('❌ Valeur d\'intersection vide ou invalide', 'error');
        return;
    }
    
    // -----------------------
    // 6. Calcul final QFE
    // -----------------------
    const QFE_final = parseFloat((valeurTable + decimalP).toFixed(1));
    
    // Mise à jour de l'affichage QFE
    if (qfeValueEl) {
        qfeValueEl.innerHTML = `${QFE_final.toFixed(1)} <span class="text-xl">hPa</span>`;
    }
    
    // === Calcul QNH à partir de QFE ===
    const QNH_result = calculerQNHDepuisQFE(QFE_final);
    
    if (QNH_result !== null) {
        // Mise à jour de l'affichage QNH
        if (qnhValueEl) {
            qnhValueEl.innerHTML = `${QNH_result.toFixed(1)} <span class="text-xl">hPa</span>`;
        }
        
        // Conversion en InHg
        const inhg = (QNH_result / 33.8639).toFixed(2);
        if (inhgValueEl) {
            inhgValueEl.textContent = inhg;
        }
        
        // ============================================
        // 🟢 CALCUL DE LA TENDANCE (comme pour TD/UU)
        // ============================================
        const difference = QNH_result - QFE_final;
        let tendanceTexte = '';
        let icone = '';
        let couleur = '';
        
        if (difference > 2.5) {
            tendanceTexte = 'HAUSSE RAPIDE';
            icone = 'trending_up';
            couleur = 'text-green-500';
        } else if (difference > 1.0) {
            tendanceTexte = 'HAUSSE LENTE';
            icone = 'trending_up';
            couleur = 'text-green-400';
        } else if (difference < -2.5) {
            tendanceTexte = 'BAISSE RAPIDE';
            icone = 'trending_down';
            couleur = 'text-red-500';
        } else if (difference < -1.0) {
            tendanceTexte = 'BAISSE LENTE';
            icone = 'trending_down';
            couleur = 'text-red-400';
        } else {
            tendanceTexte = 'STABLE';
            icone = 'trending_flat';
            couleur = 'text-yellow-500';
        }
        
        // Mettre à jour l'icône
        if (tendanceIcon) {
            tendanceIcon.textContent = icone;
            tendanceIcon.className = `material-symbols-outlined ${couleur}`;
        }
        
        // Mettre à jour le texte
        if (tendanceValue) {
            tendanceValue.textContent = `${tendanceTexte} (${difference.toFixed(1)} hPa)`;
        }
        
        // === STOCKAGE POUR METAR ===
        SkyMetStore.save('QFE', QFE_final.toFixed(1));
        SkyMetStore.save('QNH', QNH_result.toFixed(1));
        SkyMetStore.save('INHG', inhg);
        SkyMetStore.save('TENDANCE', tendanceTexte);
        SkyMetStore.save('DIFF_QNH_QFE', difference.toFixed(1));
        SkyMetStore.save('PRESSION_LUE', P_lue.toFixed(2));
        SkyMetStore.save('TEMP_ATTACHEE', T_att.toFixed(1));
        SkyMetStore.save('TIMESTAMP_QFE', new Date().toISOString());

        // ============================================
        // ✅ AJOUT À L'HISTORIQUE (CORRIGÉ)
        // ============================================
        const historiqueValeurs = `P: ${P_lue.toFixed(2)} hPa, T: ${T_att.toFixed(1)}°C`;
        const historiqueResultat = `QFE: ${QFE_final.toFixed(1)} hPa, QNH: ${QNH_result.toFixed(1)} hPa, ${tendanceTexte}`;
        ajouterHistoriqueQFEQNH('QFE/QNH', historiqueValeurs, historiqueResultat);
        
        // Toast de succès
        showToast(`✅ QFE = ${QFE_final.toFixed(1)} hPa | QNH = ${QNH_result.toFixed(1)} hPa`, 'success', 4000);
    }
}

// ====================================================================
// Fonction pour ajouter l'historique QFE/QNH
// ====================================================================
function ajouterHistoriqueQFEQNH(parametre, valeurs, resultat) {
    const tbody = document.querySelector('table tbody');
    if (!tbody) {
        console.warn('⚠️ Tableau d\'historique introuvable');
        return;
    }
    
    const now = new Date();
    const heure = now.toTimeString().slice(0, 8);
    const ligne = document.createElement('tr');
    ligne.style.animation = 'skymetFadeIn 0.5s ease';
    
    // Ajouter les styles d'animation si nécessaire
    if (!document.getElementById('skymet-anim-styles')) {
        const style = document.createElement('style');
        style.id = 'skymet-anim-styles';
        style.textContent = `@keyframes skymetFadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }`;
        document.head.appendChild(style);
    }
    
    ligne.innerHTML = `
        <td class="px-6 py-4 font-mono text-xs">${heure}</td>
        <td class="px-6 py-4"><span class="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 text-[10px] font-bold rounded">${parametre}</span></td>
        <td class="px-6 py-4 text-xs font-mono">${valeurs}</td>
        <td class="px-6 py-4 font-bold">${resultat}</td>
        <td class="px-6 py-4 text-right">
            <button class="text-slate-400 hover:text-primary transition-colors" onclick="showToast('🔄 Résultat réutilisé : ${resultat.replace(/'/g, "\\'")}', 'info', 3000)">
                <span class="material-symbols-outlined text-lg">sync</span>
            </button>
        </td>
    `;
    
    tbody.prepend(ligne);
    
    // Limiter l'historique à 50 entrées
    while (tbody.children.length > 50) {
        tbody.removeChild(tbody.lastChild);
    }
    
    console.log('✅ Historique QFE/QNH ajouté :', resultat);
}

// ====================================================================
// Fonction pour calculer QNH à partir de QFE
// ====================================================================
function calculerQNHDepuisQFE(QFE_final) {
    // 1) Séparer entier et décimale
    const entierQFE = Math.floor(QFE_final);
    const decimalQFE = parseFloat((QFE_final - entierQFE).toFixed(1));
    
    // 2) Trouver la ligne correspondant à l'entier
    const indexLigne = TABLEAU_QNH.findIndex(row => {
        return Number(row[0]) === entierQFE;
    });
    
    if (indexLigne === -1) {
        showToast(`❌ Entier QFE (${entierQFE}) introuvable dans TABLEAU_QNH`, 'error');
        return null;
    }
    
    // 3) Trouver l'index de la colonne correspondant à la décimale
    let indexCol = -1;
    for (let j = 1; j < TABLEAU_QNH[0].length; j++) {
        const val = TABLEAU_QNH[0][j];
        if (Math.abs(Number(val) - decimalQFE) < 0.01) {
            indexCol = j;
            break;
        }
    }
    
    if (indexCol === -1) {
        showToast(`❌ Décimale QFE (${decimalQFE}) introuvable dans TABLEAU_QNH`, 'error');
        return null;
    }
    
    // 4) Lecture de la valeur d'intersection
    const valeur = TABLEAU_QNH[indexLigne][indexCol];
    if (valeur == null) {
        showToast('❌ Valeur d\'intersection vide ou invalide', 'error');
        return null;
    }
    
    return parseFloat(Number(valeur).toFixed(1));
}

// ====================================================================
// Fonction de réinitialisation QFE/QNH
// ====================================================================
function reinitialiserQFEQNH() {
    const pInput = document.getElementById('pression-lue-input');
    const tInput = document.getElementById('temperature-attachee-input');
    const qfeValueEl = document.getElementById('qfe-value');
    const qnhValueEl = document.getElementById('qnh-value');
    const inhgValueEl = document.getElementById('inhg-value');
    const tendanceIcon = document.getElementById('tendance-icon');
    const tendanceValue = document.getElementById('tendance-value');
    
    if (pInput) pInput.value = '';
    if (tInput) tInput.value = '';
    if (qfeValueEl) qfeValueEl.innerHTML = '-- <span class="text-xl">hPa</span>';
    if (qnhValueEl) qnhValueEl.innerHTML = '-- <span class="text-xl">hPa</span>';
    if (inhgValueEl) inhgValueEl.textContent = '--';
    if (tendanceIcon) {
        tendanceIcon.textContent = 'trending_up';
        tendanceIcon.className = 'material-symbols-outlined text-slate-400';
    }
    if (tendanceValue) tendanceValue.textContent = '-- hPa / 3h';
    
    showToast('🔄 Champs QFE/QNH réinitialisés', 'info', 2000);
}


// ---------- SYSTÈME DE TOAST ----------
function showToast(message, type = 'success', duration = 3000) {
    const existingToasts = document.querySelectorAll('.skymet-toast');
    existingToasts.forEach(t => t.remove());
    
    const toast = document.createElement('div');
    toast.className = 'skymet-toast fixed top-24 right-6 z-[9999] max-w-md p-4 rounded-xl shadow-2xl transform transition-all duration-500 flex items-start gap-3';
    
    const colors = {
        success: 'bg-green-50 dark:bg-green-900/90 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-200',
        error: 'bg-red-50 dark:bg-red-900/90 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-200',
        warning: 'bg-yellow-50 dark:bg-yellow-900/90 border border-yellow-200 dark:border-yellow-700 text-yellow-800 dark:text-yellow-200',
        info: 'bg-blue-50 dark:bg-blue-900/90 border border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-200'
    };
    
    const icons = {
        success: 'check_circle',
        error: 'error',
        warning: 'warning',
        info: 'info'
    };
    
    toast.className += ' ' + (colors[type] || colors.info);
    toast.style.animation = 'skymetSlideRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    
    toast.innerHTML = `
        <span class="material-symbols-outlined text-2xl flex-shrink-0">${icons[type] || icons.info}</span>
        <div>
            <p class="text-sm font-medium leading-relaxed">${message}</p>
        </div>
        <button onclick="this.parentElement.remove()" class="flex-shrink-0 ml-2 text-current/60 hover:text-current transition-colors">
            <span class="material-symbols-outlined text-lg">close</span>
        </button>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(50px)';
            setTimeout(() => toast.remove(), 500);
        }
    }, duration);
}

// Injection des styles
if (!document.getElementById('skymet-toast-styles')) {
    const style = document.createElement('style');
    style.id = 'skymet-toast-styles';
    style.textContent = `
        @keyframes skymetSlideRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
        }
    `;
    document.head.appendChild(style);
}

// ---------- FONCTIONS UTILITAIRES ----------
function lireValeurTable(table, temp) {
    const entier = Math.floor(temp);
    const decimal = Math.round((temp - entier) * 10) / 10;
    const ligne = table.find(r => r[0] === entier);
    if (!ligne) return null;
    const col = table[0].indexOf(decimal);
    if (col === -1) return null;
    return ligne[col];
}

function trouverTdExact(table, R) {
    let meilleur = { ecart: Infinity, Td: null };
    for (let i = 1; i < table.length; i++) {
        const ligne = table[i];
        const Td_base = ligne[0];
        for (let j = 1; j < ligne.length; j++) {
            const val = ligne[j];
            const ecart = Math.abs(val - R);
            if (ecart < meilleur.ecart) {
                meilleur.ecart = ecart;
                meilleur.Td = Td_base + (j - 1) * 0.1;
            }
        }
    }
    return meilleur.Td;
}

function trouverTdArrondi(table, R) {
    const exact = trouverTdExact(table, R);
    if (exact === null) return null;
    const decimalTd = exact - Math.floor(exact);
    if (decimalTd >= 0.5) {
        return Math.ceil(exact);
    } else {
        return Math.floor(exact * 10) / 10;
    }
}

function trouverHumiditeParTw(tableHum, Tw_val) {
    if (Tw_val == null) return null;
    let meilleur = { ecart: Infinity, humidite: null };
    for (let i = 0; i < tableHum.length; i++) {
        const ligne = tableHum[i];
        for (let k = 0; k < 4; k++) {
            const idxHum = k * 2;
            const idxVal = idxHum + 1;
            const val = ligne[idxVal];
            if (val === "" || val === null || val === undefined) continue;
            const numVal = Number(val);
            if (isNaN(numVal)) continue;
            const ecart = Math.abs(numVal - Tw_val);
            if (ecart < meilleur.ecart) {
                meilleur.ecart = ecart;
                meilleur.humidite = ligne[idxHum];
            }
        }
    }
    return meilleur.humidite;
}

// ---------- STOCKAGE ----------
const SkyMetStore = {
    data: {},
    save(key, value) {
        this.data[key] = value;
        try { localStorage.setItem(`skymet_${key}`, JSON.stringify(value)); } catch(e) {}
    },
    get(key) {
        if (this.data[key] !== undefined) return this.data[key];
        try {
            const stored = localStorage.getItem(`skymet_${key}`);
            if (stored) return JSON.parse(stored);
        } catch(e) {}
        return null;
    }
};

// ---------- FONCTION PRINCIPALE ----------
function calculerTD_UU() {
    // Récupération des éléments par ID
    const tsInput = document.getElementById('ts-input');
    const thInput = document.getElementById('th-input');
    const pressionInput = document.getElementById('pression-input');
    
    const uuValueEl = document.getElementById('uu-value');
    const tdValueEl = document.getElementById('td-value');
    const ecartText = document.getElementById('ecart-text');
    const statusText = document.getElementById('status-text');
    
    // Vérification des éléments
    if (!tsInput || !thInput) {
        showToast('❌ Erreur : Champs de saisie introuvables', 'error');
        return;
    }
    
    // Lecture des valeurs
    const Ts = parseFloat(tsInput.value);
    const Th = parseFloat(thInput.value);
    const pression = parseFloat(pressionInput?.value || 1013.2);
    
    // === VALIDATIONS ===
    if (isNaN(Ts)) {
        showToast('⚠️ Veuillez entrer la température sèche (Ts)', 'warning');
        tsInput.focus();
        return;
    }
    
    if (isNaN(Th)) {
        showToast('⚠️ Veuillez entrer la température humide (Th)', 'warning');
        thInput.focus();
        return;
    }
    
    if (Ts < -20 || Ts > 50) {
        showToast('🌡️ Ts hors plage (-20°C à 50°C)', 'warning');
        tsInput.focus();
        tsInput.select();
        return;
    }
    
    if (Th < -20 || Th > 50) {
        showToast('🌡️ Th hors plage (-20°C à 50°C)', 'warning');
        thInput.focus();
        thInput.select();
        return;
    }
    
    if (Th > Ts) {
        showToast(`❌ Th (${Th.toFixed(1)}°C) > Ts (${Ts.toFixed(1)}°C)`, 'error');
        thInput.focus();
        thInput.select();
        return;
    }
    
    // === CALCULS ===
    const Diff = Ts - Th; // Différence Ts - Th (ex: 30 - 25 = 5.0°C)
    
    // Lire TAB1 (pour Th)
    const L1 = lireValeurTable(TAB1, Th);
    // Lire TAB2 (pour Différence)
    const L2_brut = lireValeurTable(TAB2, Diff);
    
    if (L1 == null || L2_brut == null) {
        showToast('📊 Valeurs hors des tableaux de référence', 'error');
        return;
    }
    
    const L2 = L2_brut * 100;
    const R = L1 - L2;
    
    // Trouver Td (Point de rosée)
    const Td_exact = trouverTdExact(TAB1, R);
    const Td = trouverTdArrondi(TAB1, R);
    
    if (Td === null) {
        showToast('❌ Erreur de calcul du point de rosée', 'error');
        return;
    }
    
    // Calcul de Tw (TAB3) et Humidité relative (UU)
    const valTs = lireValeurTable(TAB3, Ts);
    const valTdExact = lireValeurTable(TAB3, Td_exact);
    
    let Tw = null;
    let UU = null;
    
    if (valTs !== null && valTdExact !== null) {
        Tw = valTs - valTdExact; // Tw selon TAB3
        UU = trouverHumiditeParTw(HUMIDITE, Tw);
    }
    
    // === AFFICHAGE DES RÉSULTATS ===
    const ecart = Ts - Td; // Écart T - TD
    
    // Mettre à jour UU
    if (uuValueEl) {
        if (UU !== null) {
            uuValueEl.innerHTML = `${UU} <span class="text-xl">%</span>`;
        } else {
            uuValueEl.innerHTML = `-- <span class="text-xl">%</span>`;
        }
    }
    
    // Mettre à jour TD
    if (tdValueEl) {
        tdValueEl.innerHTML = `${Td.toFixed(1)} <span class="text-xl">°C</span>`;
    }
    
    // Mettre à jour Écart (affiche Ts - Th ET T - TD)
    if (ecartText) {
        // Afficher les deux informations importantes
        ecartText.textContent = `Ts - Th: ${Diff.toFixed(1)}°C | T - TD: ${ecart.toFixed(1)}°C`;
    }
    
    // Mettre à jour Statut (basé sur T - TD)
    if (statusText) {
        let statusTextContent, statusColor;
        if (ecart < 2) {
            statusTextContent = 'TRÈS HUMIDE';
            statusColor = 'text-yellow-400 bg-yellow-400/10';
        } else if (ecart < 5) {
            statusTextContent = 'HUMIDE';
            statusColor = 'text-blue-400 bg-blue-400/10';
        } else if (ecart < 8) {
            statusTextContent = 'MODÉRÉ';
            statusColor = 'text-green-400 bg-green-400/10';
        } else {
            statusTextContent = 'SEC';
            statusColor = 'text-orange-400 bg-orange-400/10';
        }
        statusText.textContent = statusTextContent;
        statusText.className = `text-[10px] ${statusColor} font-bold uppercase px-2 py-1 rounded`;
    }
    
    // === STOCKAGE POUR METAR ===
    SkyMetStore.save('TD', Td.toFixed(1));
    if (UU !== null) SkyMetStore.save('UU', UU);
    if (Tw !== null) SkyMetStore.save('TW', Tw);
    SkyMetStore.save('TS', Ts.toFixed(1));
    SkyMetStore.save('TH', Th.toFixed(1));
    SkyMetStore.save('DIFF_TS_TH', Diff.toFixed(1));
    SkyMetStore.save('DIFF_T_TD', ecart.toFixed(1));
    SkyMetStore.save('PRESSION', pression);
    SkyMetStore.save('TIMESTAMP', new Date().toISOString());
    
    // === HISTORIQUE ===
    const historiqueResultat = `Td: ${Td.toFixed(1)}°C, UU: ${UU !== null ? UU + '%' : 'N/A'}, Tw: ${Tw !== null ? Tw : 'N/A'}`;
    ajouterHistorique('TD/UU', `Ts: ${Ts.toFixed(1)}°C, Th: ${Th.toFixed(1)}°C, Diff: ${Diff.toFixed(1)}°C`, historiqueResultat);
    
    // === TOAST DE CONFIRMATION ===
    let toastMessage = `✅ Calculs effectués : Td = ${Td.toFixed(1)}°C, UU = ${UU !== null ? UU + '%' : 'N/A'}`;
    if (Tw !== null) toastMessage += `, Tw = ${Tw}`;
    showToast(toastMessage, 'success', 5000);
}

// ---------- HISTORIQUE ----------
function ajouterHistorique(parametre, valeurs, resultat) {
    const tbody = document.querySelector('table tbody');
    if (!tbody) return;
    
    const now = new Date();
    const heure = now.toTimeString().slice(0, 8);
    const ligne = document.createElement('tr');
    ligne.style.animation = 'skymetFadeIn 0.5s ease';
    
    if (!document.getElementById('skymet-anim-styles')) {
        const style = document.createElement('style');
        style.id = 'skymet-anim-styles';
        style.textContent = `@keyframes skymetFadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }`;
        document.head.appendChild(style);
    }
    
    ligne.innerHTML = `
        <td class="px-6 py-4 font-mono text-xs">${heure}</td>
        <td class="px-6 py-4"><span class="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 text-[10px] font-bold rounded">${parametre}</span></td>
        <td class="px-6 py-4 text-xs font-mono">${valeurs}</td>
        <td class="px-6 py-4 font-bold">${resultat}</td>
        <td class="px-6 py-4 text-right">
            <button class="text-slate-400 hover:text-primary transition-colors" onclick="showToast('🔄 Résultat réutilisé : ${resultat}', 'info', 3000)">
                <span class="material-symbols-outlined text-lg">sync</span>
            </button>
        </td>
    `;
    
    tbody.prepend(ligne);
    while (tbody.children.length > 50) {
        tbody.removeChild(tbody.lastChild);
    }
}

// ---------- RÉINITIALISATION ----------
function reinitialiserChamps() {
    const tsInput = document.getElementById('ts-input');
    const thInput = document.getElementById('th-input');
    const uuValueEl = document.getElementById('uu-value');
    const tdValueEl = document.getElementById('td-value');
    const ecartText = document.getElementById('ecart-text');
    const statusText = document.getElementById('status-text');
    
    if (tsInput) tsInput.value = '';
    if (thInput) thInput.value = '';
    if (uuValueEl) uuValueEl.innerHTML = '-- <span class="text-xl">%</span>';
    if (tdValueEl) tdValueEl.innerHTML = '-- <span class="text-xl">°C</span>';
    if (ecartText) ecartText.textContent = 'Écart (T - TD) : ---°C';
    if (statusText) {
        statusText.textContent = 'EN ATTENTE';
        statusText.className = 'text-[10px] text-slate-400 font-bold uppercase px-2 py-1 bg-slate-400/10 rounded';
    }
    
    showToast('🔄 Champs réinitialisés', 'info', 2000);
}

// ---------- INITIALISATION ----------
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier que tous les éléments existent
    const tsInput = document.getElementById('ts-input');
    const thInput = document.getElementById('th-input');
    const btnCalcul = document.getElementById('btn-calcul-tduu');
    
    if (!tsInput || !thInput || !btnCalcul) {
        console.error('❌ Éléments manquants dans la page !');
        return;
    }
    
    console.log('✅ Tous les éléments sont présents');
    
    // Événement du bouton
    btnCalcul.addEventListener('click', function(e) {
        e.preventDefault();
        calculerTD_UU();
    });
    
    // Touche Entrée
    [tsInput, thInput].forEach(input => {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                calculerTD_UU();
            }
        });
    });
    
    // Ajouter un bouton de réinitialisation
    const header = document.querySelector('#section-tduu .bg-slate-50');
    if (header) {
        const resetBtn = document.createElement('button');
        resetBtn.className = 'text-xs text-slate-400 hover:text-primary transition-colors ml-4 flex items-center gap-1';
        resetBtn.innerHTML = '<span class="material-symbols-outlined text-sm align-middle">refresh</span> Réinitialiser';
        resetBtn.addEventListener('click', reinitialiserChamps);
        header.appendChild(resetBtn);
    }

    // ========== INITIALISATION QFE/QNH ==========
    const btnQFEQNH = document.getElementById('btn-calcul-qfeqnh');
    if (btnQFEQNH) {
        btnQFEQNH.addEventListener('click', function(e) {
            e.preventDefault();
            calculerQFE();
        });
    }

    // Touche Entrée pour QFE/QNH
    const qfeInputs = ['pression-lue-input', 'temperature-attachee-input'];
    qfeInputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    calculerQFE();
                }
            });
        }
    });

    // Bouton de réinitialisation QFE/QNH
    const headerQFE = document.querySelector('#section-qfeqnh .bg-slate-50');
    if (headerQFE) {
        const resetBtnQFE = document.createElement('button');
        resetBtnQFE.className = 'text-xs text-slate-400 hover:text-primary transition-colors ml-4 flex items-center gap-1';
        resetBtnQFE.innerHTML = '<span class="material-symbols-outlined text-sm align-middle">refresh</span> Réinitialiser';
        resetBtnQFE.addEventListener('click', reinitialiserQFEQNH);
        headerQFE.appendChild(resetBtnQFE);
    }

    // Charger les valeurs sauvegardées
    const qfeSaved = SkyMetStore.get('QFE');
    const qnhSaved = SkyMetStore.get('QNH');
    if (qfeSaved) {
        const qfeValueEl = document.getElementById('qfe-value');
        if (qfeValueEl) qfeValueEl.innerHTML = `${qfeSaved} <span class="text-xl">hPa</span>`;
    }
    if (qnhSaved) {
        const qnhValueEl = document.getElementById('qnh-value');
        if (qnhValueEl) qnhValueEl.innerHTML = `${qnhSaved} <span class="text-xl">hPa</span>`;
    }
    
    // Message de bienvenue
    setTimeout(() => {
        showToast('🛩️ SKYMET DRC - Prêt pour les calculs', 'info', 3000);
    }, 500);



});

// ---------- EXPOSITION ----------
window.SkyMet = {
    calculerTD_UU,
    reinitialiserChamps,
    SkyMetStore,
    showToast
};

console.log('✅ SKYMET Calculator chargé avec succès !');