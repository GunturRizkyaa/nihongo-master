const hiragana = [

{
id:"a",
kana:"あ",
romaji:"A",
arti:"Dibaca A",
contoh:[
{jp:"あさ",romaji:"Asa",arti:"Pagi"},
{jp:"あめ",romaji:"Ame",arti:"Hujan"},
{jp:"あか",romaji:"Aka",arti:"Merah"}
]
},

{
id:"i",
kana:"い",
romaji:"I",
arti:"Dibaca I",
contoh:[
{jp:"いぬ",romaji:"Inu",arti:"Anjing"},
{jp:"いえ",romaji:"Ie",arti:"Rumah"},
{jp:"いし",romaji:"Ishi",arti:"Batu"}
]
},

{
id:"u",
kana:"う",
romaji:"U",
arti:"Dibaca U",
contoh:[
{jp:"うみ",romaji:"Umi",arti:"Laut"},
{jp:"うた",romaji:"Uta",arti:"Lagu"},
{jp:"うし",romaji:"Ushi",arti:"Sapi"}
]
},

{
id:"e",
kana:"え",
romaji:"E",
arti:"Dibaca E",
contoh:[
{jp:"えき",romaji:"Eki",arti:"Stasiun"},
{jp:"え",romaji:"E",arti:"Gambar"},
{jp:"えん",romaji:"En",arti:"Yen"}
]
},

{
id:"o",
kana:"お",
romaji:"O",
arti:"Dibaca O",
contoh:[
{jp:"おちゃ",romaji:"Ocha",arti:"Teh"},
{jp:"おとこ",romaji:"Otoko",arti:"Laki-laki"},
{jp:"おんな",romaji:"Onna",arti:"Perempuan"}
]
},

{
id:"ka",
kana:"か",
romaji:"KA",
arti:"Dibaca KA",
contoh:[
{jp:"かさ",romaji:"Kasa",arti:"Payung"},
{jp:"かみ",romaji:"Kami",arti:"Kertas"},
{jp:"かわ",romaji:"Kawa",arti:"Sungai"}
]
},

{
id:"ki",
kana:"き",
romaji:"KI",
arti:"Dibaca KI",
contoh:[
{jp:"き",romaji:"Ki",arti:"Pohon"},
{jp:"きた",romaji:"Kita",arti:"Utara"},
{jp:"きょう",romaji:"Kyou",arti:"Hari ini"}
]
},

{
id:"ku",
kana:"く",
romaji:"KU",
arti:"Dibaca KU",
contoh:[
{jp:"くるま",romaji:"Kuruma",arti:"Mobil"},
{jp:"くち",romaji:"Kuchi",arti:"Mulut"},
{jp:"くも",romaji:"Kumo",arti:"Awan"}
]
},

{
id:"ke",
kana:"け",
romaji:"KE",
arti:"Dibaca KE",
contoh:[
{jp:"けさ",romaji:"Kesa",arti:"Tadi pagi"},
{jp:"けむり",romaji:"Kemuri",arti:"Asap"},
{jp:"けん",romaji:"Ken",arti:"Pedang"}
]
},

{
id:"ko",
kana:"こ",
romaji:"KO",
arti:"Dibaca KO",
contoh:[
{jp:"こども",romaji:"Kodomo",arti:"Anak"},
{jp:"こえ",romaji:"Koe",arti:"Suara"},
{jp:"こねこ",romaji:"Koneko",arti:"Anak kucing"}
]
},

// SA
{id:"sa",kana:"さ",romaji:"SA",arti:"Dibaca SA",contoh:[]},
{id:"shi",kana:"し",romaji:"SHI",arti:"Dibaca SHI",contoh:[]},
{id:"su",kana:"す",romaji:"SU",arti:"Dibaca SU",contoh:[]},
{id:"se",kana:"せ",romaji:"SE",arti:"Dibaca SE",contoh:[]},
{id:"so",kana:"そ",romaji:"SO",arti:"Dibaca SO",contoh:[]},

// TA
{id:"ta",kana:"た",romaji:"TA",arti:"Dibaca TA",contoh:[]},
{id:"chi",kana:"ち",romaji:"CHI",arti:"Dibaca CHI",contoh:[]},
{id:"tsu",kana:"つ",romaji:"TSU",arti:"Dibaca TSU",contoh:[]},
{id:"te",kana:"て",romaji:"TE",arti:"Dibaca TE",contoh:[]},
{id:"to",kana:"と",romaji:"TO",arti:"Dibaca TO",contoh:[]},

// NA
{id:"na",kana:"な",romaji:"NA",arti:"Dibaca NA",contoh:[]},
{id:"ni",kana:"に",romaji:"NI",arti:"Dibaca NI",contoh:[]},
{id:"nu",kana:"ぬ",romaji:"NU",arti:"Dibaca NU",contoh:[]},
{id:"ne",kana:"ね",romaji:"NE",arti:"Dibaca NE",contoh:[]},
{id:"no",kana:"の",romaji:"NO",arti:"Dibaca NO",contoh:[]},

// HA
{id:"ha",kana:"は",romaji:"HA",arti:"Dibaca HA",contoh:[]},
{id:"hi",kana:"ひ",romaji:"HI",arti:"Dibaca HI",contoh:[]},
{id:"fu",kana:"ふ",romaji:"FU",arti:"Dibaca FU",contoh:[]},
{id:"he",kana:"へ",romaji:"HE",arti:"Dibaca HE",contoh:[]},
{id:"ho",kana:"ほ",romaji:"HO",arti:"Dibaca HO",contoh:[]},

// MA
{id:"ma",kana:"ま",romaji:"MA",arti:"Dibaca MA",contoh:[]},
{id:"mi",kana:"み",romaji:"MI",arti:"Dibaca MI",contoh:[]},
{id:"mu",kana:"む",romaji:"MU",arti:"Dibaca MU",contoh:[]},
{id:"me",kana:"め",romaji:"ME",arti:"Dibaca ME",contoh:[]},
{id:"mo",kana:"も",romaji:"MO",arti:"Dibaca MO",contoh:[]},

// YA
{id:"ya",kana:"や",romaji:"YA",arti:"Dibaca YA",contoh:[]},
{id:"yu",kana:"ゆ",romaji:"YU",arti:"Dibaca YU",contoh:[]},
{id:"yo",kana:"よ",romaji:"YO",arti:"Dibaca YO",contoh:[]},

// RA
{id:"ra",kana:"ら",romaji:"RA",arti:"Dibaca RA",contoh:[]},
{id:"ri",kana:"り",romaji:"RI",arti:"Dibaca RI",contoh:[]},
{id:"ru",kana:"る",romaji:"RU",arti:"Dibaca RU",contoh:[]},
{id:"re",kana:"れ",romaji:"RE",arti:"Dibaca RE",contoh:[]},
{id:"ro",kana:"ろ",romaji:"RO",arti:"Dibaca RO",contoh:[]},

// WA
{id:"wa",kana:"わ",romaji:"WA",arti:"Dibaca WA",contoh:[]},
{id:"wo",kana:"を",romaji:"WO",arti:"Dibaca WO",contoh:[]},
{id:"n",kana:"ん",romaji:"N",arti:"Dibaca N",contoh:[]}

];