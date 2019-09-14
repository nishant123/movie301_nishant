(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./src/app/core/movie/movie-list.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/movie/movie-list.service.ts ***!
  \**************************************************/
/*! exports provided: MovieListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListService", function() { return MovieListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MovieListService = /** @class */ (function () {
    function MovieListService(httpClient) {
        this.httpClient = httpClient;
        this.isoLangs = {
            ab: {
                name: 'Abkhaz',
                nativeName: 'аҧсуа'
            },
            aa: {
                name: 'Afar',
                nativeName: 'Afaraf'
            },
            af: {
                name: 'Afrikaans',
                nativeName: 'Afrikaans'
            },
            ak: {
                name: 'Akan',
                nativeName: 'Akan'
            },
            sq: {
                name: 'Albanian',
                nativeName: 'Shqip'
            },
            am: {
                name: 'Amharic',
                nativeName: 'አማርኛ'
            },
            ar: {
                name: 'Arabic',
                nativeName: 'العربية'
            },
            an: {
                name: 'Aragonese',
                nativeName: 'Aragonés'
            },
            hy: {
                name: 'Armenian',
                nativeName: 'Հայերեն'
            },
            as: {
                name: 'Assamese',
                nativeName: 'অসমীয়া'
            },
            av: {
                name: 'Avaric',
                nativeName: 'авар мацӀ, магӀарул мацӀ'
            },
            ae: {
                name: 'Avestan',
                nativeName: 'avesta'
            },
            ay: {
                name: 'Aymara',
                nativeName: 'aymar aru'
            },
            az: {
                name: 'Azerbaijani',
                nativeName: 'azərbaycan dili'
            },
            bm: {
                name: 'Bambara',
                nativeName: 'bamanankan'
            },
            ba: {
                name: 'Bashkir',
                nativeName: 'башҡорт теле'
            },
            eu: {
                name: 'Basque',
                nativeName: 'euskara, euskera'
            },
            be: {
                name: 'Belarusian',
                nativeName: 'Беларуская'
            },
            bn: {
                name: 'Bengali',
                nativeName: 'বাংলা'
            },
            bh: {
                name: 'Bihari',
                nativeName: 'भोजपुरी'
            },
            bi: {
                name: 'Bislama',
                nativeName: 'Bislama'
            },
            bs: {
                name: 'Bosnian',
                nativeName: 'bosanski jezik'
            },
            br: {
                name: 'Breton',
                nativeName: 'brezhoneg'
            },
            bg: {
                name: 'Bulgarian',
                nativeName: 'български език'
            },
            my: {
                name: 'Burmese',
                nativeName: 'ဗမာစာ'
            },
            ca: {
                name: 'Catalan; Valencian',
                nativeName: 'Català'
            },
            ch: {
                name: 'Chamorro',
                nativeName: 'Chamoru'
            },
            ce: {
                name: 'Chechen',
                nativeName: 'нохчийн мотт'
            },
            ny: {
                name: 'Chichewa; Chewa; Nyanja',
                nativeName: 'chiCheŵa, chinyanja'
            },
            zh: {
                name: 'Chinese',
                nativeName: '中文 (Zhōngwén), 汉语, 漢語'
            },
            cv: {
                name: 'Chuvash',
                nativeName: 'чӑваш чӗлхи'
            },
            kw: {
                name: 'Cornish',
                nativeName: 'Kernewek'
            },
            co: {
                name: 'Corsican',
                nativeName: 'corsu, lingua corsa'
            },
            cr: {
                name: 'Cree',
                nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ'
            },
            hr: {
                name: 'Croatian',
                nativeName: 'hrvatski'
            },
            cs: {
                name: 'Czech',
                nativeName: 'česky, čeština'
            },
            da: {
                name: 'Danish',
                nativeName: 'dansk'
            },
            dv: {
                name: 'Divehi; Dhivehi; Maldivian;',
                nativeName: 'ދިވެހި'
            },
            nl: {
                name: 'Dutch',
                nativeName: 'Nederlands, Vlaams'
            },
            en: {
                name: 'English',
                nativeName: 'English'
            },
            eo: {
                name: 'Esperanto',
                nativeName: 'Esperanto'
            },
            et: {
                name: 'Estonian',
                nativeName: 'eesti, eesti keel'
            },
            ee: {
                name: 'Ewe',
                nativeName: 'Eʋegbe'
            },
            fo: {
                name: 'Faroese',
                nativeName: 'føroyskt'
            },
            fj: {
                name: 'Fijian',
                nativeName: 'vosa Vakaviti'
            },
            fi: {
                name: 'Finnish',
                nativeName: 'suomi, suomen kieli'
            },
            fr: {
                name: 'French',
                nativeName: 'français, langue française'
            },
            ff: {
                name: 'Fula; Fulah; Pulaar; Pular',
                nativeName: 'Fulfulde, Pulaar, Pular'
            },
            gl: {
                name: 'Galician',
                nativeName: 'Galego'
            },
            ka: {
                name: 'Georgian',
                nativeName: 'ქართული'
            },
            de: {
                name: 'German',
                nativeName: 'Deutsch'
            },
            el: {
                name: 'Greek, Modern',
                nativeName: 'Ελληνικά'
            },
            gn: {
                name: 'Guaraní',
                nativeName: 'Avañeẽ'
            },
            gu: {
                name: 'Gujarati',
                nativeName: 'ગુજરાતી'
            },
            ht: {
                name: 'Haitian; Haitian Creole',
                nativeName: 'Kreyòl ayisyen'
            },
            ha: {
                name: 'Hausa',
                nativeName: 'Hausa, هَوُسَ'
            },
            he: {
                name: 'Hebrew (modern)',
                nativeName: 'עברית'
            },
            hz: {
                name: 'Herero',
                nativeName: 'Otjiherero'
            },
            hi: {
                name: 'Hindi',
                nativeName: 'हिन्दी, हिंदी'
            },
            ho: {
                name: 'Hiri Motu',
                nativeName: 'Hiri Motu'
            },
            hu: {
                name: 'Hungarian',
                nativeName: 'Magyar'
            },
            ia: {
                name: 'Interlingua',
                nativeName: 'Interlingua'
            },
            id: {
                name: 'Indonesian',
                nativeName: 'Bahasa Indonesia'
            },
            ie: {
                name: 'Interlingue',
                nativeName: 'Originally called Occidental; then Interlingue after WWII'
            },
            ga: {
                name: 'Irish',
                nativeName: 'Gaeilge'
            },
            ig: {
                name: 'Igbo',
                nativeName: 'Asụsụ Igbo'
            },
            ik: {
                name: 'Inupiaq',
                nativeName: 'Iñupiaq, Iñupiatun'
            },
            io: {
                name: 'Ido',
                nativeName: 'Ido'
            },
            is: {
                name: 'Icelandic',
                nativeName: 'Íslenska'
            },
            it: {
                name: 'Italian',
                nativeName: 'Italiano'
            },
            iu: {
                name: 'Inuktitut',
                nativeName: 'ᐃᓄᒃᑎᑐᑦ'
            },
            ja: {
                name: 'Japanese',
                nativeName: '日本語 (にほんご／にっぽんご)'
            },
            jv: {
                name: 'Javanese',
                nativeName: 'basa Jawa'
            },
            kl: {
                name: 'Kalaallisut, Greenlandic',
                nativeName: 'kalaallisut, kalaallit oqaasii'
            },
            kn: {
                name: 'Kannada',
                nativeName: 'ಕನ್ನಡ'
            },
            kr: {
                name: 'Kanuri',
                nativeName: 'Kanuri'
            },
            ks: {
                name: 'Kashmiri',
                nativeName: 'कश्मीरी, كشميري‎'
            },
            kk: {
                name: 'Kazakh',
                nativeName: 'Қазақ тілі'
            },
            km: {
                name: 'Khmer',
                nativeName: 'ភាសាខ្មែរ'
            },
            ki: {
                name: 'Kikuyu, Gikuyu',
                nativeName: 'Gĩkũyũ'
            },
            rw: {
                name: 'Kinyarwanda',
                nativeName: 'Ikinyarwanda'
            },
            ky: {
                name: 'Kirghiz, Kyrgyz',
                nativeName: 'кыргыз тили'
            },
            kv: {
                name: 'Komi',
                nativeName: 'коми кыв'
            },
            kg: {
                name: 'Kongo',
                nativeName: 'KiKongo'
            },
            ko: {
                name: 'Korean',
                nativeName: '한국어 (韓國語), 조선말 (朝鮮語)'
            },
            ku: {
                name: 'Kurdish',
                nativeName: 'Kurdî, كوردی‎'
            },
            kj: {
                name: 'Kwanyama, Kuanyama',
                nativeName: 'Kuanyama'
            },
            la: {
                name: 'Latin',
                nativeName: 'latine, lingua latina'
            },
            lb: {
                name: 'Luxembourgish, Letzeburgesch',
                nativeName: 'Lëtzebuergesch'
            },
            lg: {
                name: 'Luganda',
                nativeName: 'Luganda'
            },
            li: {
                name: 'Limburgish, Limburgan, Limburger',
                nativeName: 'Limburgs'
            },
            ln: {
                name: 'Lingala',
                nativeName: 'Lingála'
            },
            lo: {
                name: 'Lao',
                nativeName: 'ພາສາລາວ'
            },
            lt: {
                name: 'Lithuanian',
                nativeName: 'lietuvių kalba'
            },
            lu: {
                name: 'Luba-Katanga',
                nativeName: ''
            },
            lv: {
                name: 'Latvian',
                nativeName: 'latviešu valoda'
            },
            gv: {
                name: 'Manx',
                nativeName: 'Gaelg, Gailck'
            },
            mk: {
                name: 'Macedonian',
                nativeName: 'македонски јазик'
            },
            mg: {
                name: 'Malagasy',
                nativeName: 'Malagasy fiteny'
            },
            ms: {
                name: 'Malay',
                nativeName: 'bahasa Melayu, بهاس ملايو‎'
            },
            ml: {
                name: 'Malayalam',
                nativeName: 'മലയാളം'
            },
            mt: {
                name: 'Maltese',
                nativeName: 'Malti'
            },
            mi: {
                name: 'Māori',
                nativeName: 'te reo Māori'
            },
            mr: {
                name: 'Marathi (Marāṭhī)',
                nativeName: 'मराठी'
            },
            mh: {
                name: 'Marshallese',
                nativeName: 'Kajin M̧ajeļ'
            },
            mn: {
                name: 'Mongolian',
                nativeName: 'монгол'
            },
            na: {
                name: 'Nauru',
                nativeName: 'Ekakairũ Naoero'
            },
            nv: {
                name: 'Navajo, Navaho',
                nativeName: 'Diné bizaad, Dinékʼehǰí'
            },
            nb: {
                name: 'Norwegian Bokmål',
                nativeName: 'Norsk bokmål'
            },
            nd: {
                name: 'North Ndebele',
                nativeName: 'isiNdebele'
            },
            ne: {
                name: 'Nepali',
                nativeName: 'नेपाली'
            },
            ng: {
                name: 'Ndonga',
                nativeName: 'Owambo'
            },
            nn: {
                name: 'Norwegian Nynorsk',
                nativeName: 'Norsk nynorsk'
            },
            no: {
                name: 'Norwegian',
                nativeName: 'Norsk'
            },
            ii: {
                name: 'Nuosu',
                nativeName: 'ꆈꌠ꒿ Nuosuhxop'
            },
            nr: {
                name: 'South Ndebele',
                nativeName: 'isiNdebele'
            },
            oc: {
                name: 'Occitan',
                nativeName: 'Occitan'
            },
            oj: {
                name: 'Ojibwe, Ojibwa',
                nativeName: 'ᐊᓂᔑᓈᐯᒧᐎᓐ'
            },
            cu: {
                name: 'Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic',
                nativeName: 'ѩзыкъ словѣньскъ'
            },
            om: {
                name: 'Oromo',
                nativeName: 'Afaan Oromoo'
            },
            or: {
                name: 'Oriya',
                nativeName: 'ଓଡ଼ିଆ'
            },
            os: {
                name: 'Ossetian, Ossetic',
                nativeName: 'ирон æвзаг'
            },
            pa: {
                name: 'Panjabi, Punjabi',
                nativeName: 'ਪੰਜਾਬੀ, پنجابی‎'
            },
            pi: {
                name: 'Pāli',
                nativeName: 'पाऴि'
            },
            fa: {
                name: 'Persian',
                nativeName: 'فارسی'
            },
            pl: {
                name: 'Polish',
                nativeName: 'polski'
            },
            ps: {
                name: 'Pashto, Pushto',
                nativeName: 'پښتو'
            },
            pt: {
                name: 'Portuguese',
                nativeName: 'Português'
            },
            qu: {
                name: 'Quechua',
                nativeName: 'Runa Simi, Kichwa'
            },
            rm: {
                name: 'Romansh',
                nativeName: 'rumantsch grischun'
            },
            rn: {
                name: 'Kirundi',
                nativeName: 'kiRundi'
            },
            ro: {
                name: 'Romanian, Moldavian, Moldovan',
                nativeName: 'română'
            },
            ru: {
                name: 'Russian',
                nativeName: 'русский язык'
            },
            sa: {
                name: 'Sanskrit (Saṁskṛta)',
                nativeName: 'संस्कृतम्'
            },
            sc: {
                name: 'Sardinian',
                nativeName: 'sardu'
            },
            sd: {
                name: 'Sindhi',
                nativeName: 'सिन्धी, سنڌي، سندھی‎'
            },
            se: {
                name: 'Northern Sami',
                nativeName: 'Davvisámegiella'
            },
            sm: {
                name: 'Samoan',
                nativeName: 'gagana faa Samoa'
            },
            sg: {
                name: 'Sango',
                nativeName: 'yângâ tî sängö'
            },
            sr: {
                name: 'Serbian',
                nativeName: 'српски језик'
            },
            gd: {
                name: 'Scottish Gaelic; Gaelic',
                nativeName: 'Gàidhlig'
            },
            sn: {
                name: 'Shona',
                nativeName: 'chiShona'
            },
            si: {
                name: 'Sinhala, Sinhalese',
                nativeName: 'සිංහල'
            },
            sk: {
                name: 'Slovak',
                nativeName: 'slovenčina'
            },
            sl: {
                name: 'Slovene',
                nativeName: 'slovenščina'
            },
            so: {
                name: 'Somali',
                nativeName: 'Soomaaliga, af Soomaali'
            },
            st: {
                name: 'Southern Sotho',
                nativeName: 'Sesotho'
            },
            es: {
                name: 'Spanish; Castilian',
                nativeName: 'español, castellano'
            },
            su: {
                name: 'Sundanese',
                nativeName: 'Basa Sunda'
            },
            sw: {
                name: 'Swahili',
                nativeName: 'Kiswahili'
            },
            ss: {
                name: 'Swati',
                nativeName: 'SiSwati'
            },
            sv: {
                name: 'Swedish',
                nativeName: 'svenska'
            },
            ta: {
                name: 'Tamil',
                nativeName: 'தமிழ்'
            },
            te: {
                name: 'Telugu',
                nativeName: 'తెలుగు'
            },
            tg: {
                name: 'Tajik',
                nativeName: 'тоҷикӣ, toğikī, تاجیکی‎'
            },
            th: {
                name: 'Thai',
                nativeName: 'ไทย'
            },
            ti: {
                name: 'Tigrinya',
                nativeName: 'ትግርኛ'
            },
            bo: {
                name: 'Tibetan Standard, Tibetan, Central',
                nativeName: 'བོད་ཡིག'
            },
            tk: {
                name: 'Turkmen',
                nativeName: 'Türkmen, Түркмен'
            },
            tl: {
                name: 'Tagalog',
                nativeName: 'Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔'
            },
            tn: {
                name: 'Tswana',
                nativeName: 'Setswana'
            },
            to: {
                name: 'Tonga (Tonga Islands)',
                nativeName: 'faka Tonga'
            },
            tr: {
                name: 'Turkish',
                nativeName: 'Türkçe'
            },
            ts: {
                name: 'Tsonga',
                nativeName: 'Xitsonga'
            },
            tt: {
                name: 'Tatar',
                nativeName: 'татарча, tatarça, تاتارچا‎'
            },
            tw: {
                name: 'Twi',
                nativeName: 'Twi'
            },
            ty: {
                name: 'Tahitian',
                nativeName: 'Reo Tahiti'
            },
            ug: {
                name: 'Uighur, Uyghur',
                nativeName: 'Uyƣurqə, ئۇيغۇرچە‎'
            },
            uk: {
                name: 'Ukrainian',
                nativeName: 'українська'
            },
            ur: {
                name: 'Urdu',
                nativeName: 'اردو'
            },
            uz: {
                name: 'Uzbek',
                nativeName: 'zbek, Ўзбек, أۇزبېك‎'
            },
            ve: {
                name: 'Venda',
                nativeName: 'Tshivenḓa'
            },
            vi: {
                name: 'Vietnamese',
                nativeName: 'Tiếng Việt'
            },
            vo: {
                name: 'Volapük',
                nativeName: 'Volapük'
            },
            wa: {
                name: 'Walloon',
                nativeName: 'Walon'
            },
            cy: {
                name: 'Welsh',
                nativeName: 'Cymraeg'
            },
            wo: {
                name: 'Wolof',
                nativeName: 'Wollof'
            },
            fy: {
                name: 'Western Frisian',
                nativeName: 'Frysk'
            },
            xh: {
                name: 'Xhosa',
                nativeName: 'isiXhosa'
            },
            yi: {
                name: 'Yiddish',
                nativeName: 'ייִדיש'
            },
            yo: {
                name: 'Yoruba',
                nativeName: 'Yorùbá'
            },
            za: {
                name: 'Zhuang, Chuang',
                nativeName: 'Saɯ cueŋƅ, Saw cuengh'
            }
        };
    }
    MovieListService.prototype.getLanguageList = function (movieList) {
        var languageList = [];
        var languageObj = {};
        for (var _i = 0, movieList_1 = movieList; _i < movieList_1.length; _i++) {
            var movie = movieList_1[_i];
            // let found = false;
            // for (const language of languageList) {
            //   if (movie.original_language === language.key) {
            //     found = true;
            //     break;
            //   }
            // }
            if (languageObj[movie.original_language]) {
                languageObj[movie.original_language].value.push(movie);
            }
            else {
                languageObj[movie.original_language] = {
                    key: this.isoLangs[movie.original_language].name,
                    code: movie.original_language,
                    value: []
                };
                languageObj[movie.original_language].value.push(movie);
            }
            // if (found === false) {
            //   const lang = {
            //     key: movie.original_language,
            //     name: this.isoLangs[movie.original_language].name
            //   };
            //   languageList.push(lang);
            // }
        }
        for (var language in languageObj) {
            if (languageObj.hasOwnProperty(language)) {
                languageList.push(languageObj[language]);
            }
        }
        return languageList;
    };
    MovieListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieListService);
    return MovieListService;
}());



/***/ }),

/***/ "./src/app/search/components/s-dialog-cards/s-dialog-cards.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/search/components/s-dialog-cards/s-dialog-cards.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let movieObj of movieList\" style=\"background-color: #D8D8D8\">\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"center stretch\" fxLayoutGap=\"5%\">\r\n    <mat-card\r\n      style=\"background-color:#2e2e2e; color: white\"\r\n      *ngIf=\"selectedLanguage === movieObj.code && movieObj.value.length > 0\"\r\n      #languageCard\r\n      class=\"search-title\"\r\n      >{{ movieObj.key }}</mat-card\r\n    >\r\n  </div>\r\n  <div\r\n    *ngIf=\"selectedLanguage === movieObj.code && movieObj.value.length > 0\"\r\n    fxLayout=\"row wrap\"\r\n    fxLayoutAlign=\"center center\"\r\n    fxLayoutGap=\"10%\"\r\n  >\r\n    <div *ngFor=\"let movie of (movieObj.value | sortMovie: userPreference | homeFilter: movieFilter:'')\" class=\"list\">\r\n      <mat-card class=\"item\">\r\n        <div>\r\n          <img\r\n            class=\"card-image\"\r\n            mat-card-image\r\n            src=\"https://image.tmdb.org/t/p/w300{{ movie.poster_path }}\"\r\n            onerror=\"this.src='/assets/images/noImage.jpg'\"\r\n            alt=\"Movie Poster\"\r\n          />\r\n        </div>\r\n        <mat-card-header>\r\n          <mat-card-title title=\"{{ movie.original_title }}\">{{ movie.original_title | slice: 0:21 }}</mat-card-title>\r\n          <mat-card-subtitle title=\" {{ movie.overview }} \">{{ movie.overview | slice: 0:60 }}...</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-actions>\r\n          <button\r\n            style=\"color:white; background-color: blue\"\r\n            mat-raised-button\r\n            routerLink=\"/movie/nowPlaying/{{ movie.id }}\"\r\n            [mat-dialog-close]=\"true\"\r\n          >\r\n            Book Now\r\n          </button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/search/components/s-dialog-cards/s-dialog-cards.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/search/components/s-dialog-cards/s-dialog-cards.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  max-height: auto;\n  max-width: 350px; }\n\n.card-image {\n  max-height: 120px;\n  max-width: 80px;\n  float: right;\n  margin: 1px 1px 1px 1px; }\n\nmat-card {\n  margin-top: 5px;\n  margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL2NvbXBvbmVudHMvcy1kaWFsb2ctY2FyZHMvQzpcXGNkcml2ZVxcY2Fwc3RvbmUzXFxib29rbXltb3ZpZVxcYW5ndWxhcjMwMW1vdmllcHJvamVjdC9zcmNcXGFwcFxcc2VhcmNoXFxjb21wb25lbnRzXFxzLWRpYWxvZy1jYXJkc1xccy1kaWFsb2ctY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ2pCOztBQU1EO0VBQ0Usa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL2NvbXBvbmVudHMvcy1kaWFsb2ctY2FyZHMvcy1kaWFsb2ctY2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbSB7XHJcbiAgbWF4LWhlaWdodDogYXV0bztcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG59XHJcblxyXG4vLyAuc2VhcmNoLXRpdGxlIHtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gfVxyXG5cclxuLmNhcmQtaW1hZ2Uge1xyXG4gIG1heC1oZWlnaHQ6IDEyMHB4O1xyXG4gIG1heC13aWR0aDogODBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiAxcHggMXB4IDFweCAxcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/search/components/s-dialog-cards/s-dialog-cards.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/search/components/s-dialog-cards/s-dialog-cards.component.ts ***!
  \******************************************************************************/
/*! exports provided: SDialogCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDialogCardsComponent", function() { return SDialogCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reducers/index */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");




// import { MatCardModule } from '@angular/material'
var SDialogCardsComponent = /** @class */ (function () {
    // movieList DS
    // key: language.name,
    // code: language.key,
    // value: []
    function SDialogCardsComponent(userStore) {
        this.userStore = userStore;
        this.userPreference = [];
    }
    SDialogCardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userStore.select(_reducers_index__WEBPACK_IMPORTED_MODULE_2__["userSelector"]).subscribe(function (result) {
            _this.userPreference = result.preference;
            // console.log('uspref', this.userPreference);
        });
    };
    SDialogCardsComponent.prototype.ngAfterContentChecked = function () { };
    SDialogCardsComponent.prototype.ngDoCheck = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SDialogCardsComponent.prototype, "movieList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SDialogCardsComponent.prototype, "movieFilter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SDialogCardsComponent.prototype, "languageList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SDialogCardsComponent.prototype, "selectedLanguage", void 0);
    SDialogCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-s-dialog-cards',
            template: __webpack_require__(/*! ./s-dialog-cards.component.html */ "./src/app/search/components/s-dialog-cards/s-dialog-cards.component.html"),
            styles: [__webpack_require__(/*! ./s-dialog-cards.component.scss */ "./src/app/search/components/s-dialog-cards/s-dialog-cards.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], SDialogCardsComponent);
    return SDialogCardsComponent;
}());



/***/ }),

/***/ "./src/app/search/components/s-dialog/s-dialog.component.html":
/*!********************************************************************!*\
  !*** ./src/app/search/components/s-dialog/s-dialog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class='styler'> -->\r\n<mat-dialog-content>\r\n  <div class=\"search-box\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"0.5%\">\r\n    <!-- routerLink=\"/home\" -->\r\n    <button mat-button [mat-dialog-close]=\"true\" routerLink=\"/home\"><i class=\"material-icons\">close</i></button>\r\n    <mat-form-field class=\"Sdialog\">\r\n      <input matInput type=\"text\" placeholder=\"Search your movie...\" [formControl]=\"searchField\">\r\n\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"dialog-dropdown\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"1%\">\r\n    <mat-form-field>\r\n      <select [(ngModel)]=\"selectedLanguage\" matNativeControl placeholder=\"Language\">\r\n        <option *ngFor='let language of movieObjArray' value=\"{{language.code}}\"> {{language.key}}</option>\r\n\r\n      </select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <select matNativeControl placeholder=\"Genre\" #genreId [(ngModel)]=\"selectedGenre\"\r\n        (ngModelChange)=\"changeGenere()\">\r\n        <option *ngFor=\"let genre of genresList\" value=\"{{genre.id}}\">{{genre.name}}</option>\r\n      </select>\r\n    </mat-form-field>\r\n\r\n\r\n  </div>\r\n</mat-dialog-content>\r\n<!-- </div> -->\r\n<mat-dialog-actions>\r\n\r\n\r\n  <app-s-dialog-cards style=\"min-height: 100vh; min-width: 95vw\" [movieList]=\"movieObjArray\"\r\n    [movieFilter]=\"movieFilterObj\" [languageList]=\"languageList\" [selectedLanguage]=\"selectedLanguage\">\r\n  </app-s-dialog-cards>\r\n\r\n\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/search/components/s-dialog/s-dialog.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/search/components/s-dialog/s-dialog.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Sdialog {\n  width: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL2NvbXBvbmVudHMvcy1kaWFsb2cvQzpcXGNkcml2ZVxcY2Fwc3RvbmUzXFxib29rbXltb3ZpZVxcYW5ndWxhcjMwMW1vdmllcHJvamVjdC9zcmNcXGFwcFxcc2VhcmNoXFxjb21wb25lbnRzXFxzLWRpYWxvZ1xccy1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvY29tcG9uZW50cy9zLWRpYWxvZy9zLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5TZGlhbG9nIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4vLyAuc3R5bGVyIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4O1xyXG4vLyB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/search/components/s-dialog/s-dialog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/search/components/s-dialog/s-dialog.component.ts ***!
  \******************************************************************/
/*! exports provided: SDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDialogComponent", function() { return SDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../reducers/index */ "./src/app/reducers/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_movie_movie_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/movie/movie-list.service */ "./src/app/core/movie/movie-list.service.ts");
/* harmony import */ var _home_services_home_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../home/services/home.service */ "./src/app/home/services/home.service.ts");
/* harmony import */ var _services_segregate_movie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/segregate-movie.service */ "./src/app/search/services/segregate-movie.service.ts");
/* harmony import */ var _services_search_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/search-api.service */ "./src/app/search/services/search-api.service.ts");











var SDialogComponent = /** @class */ (function () {
    function SDialogComponent(store, homeService, movieListService, segregateMovies, searchService) {
        this.store = store;
        this.homeService = homeService;
        this.movieListService = movieListService;
        this.segregateMovies = segregateMovies;
        this.searchService = searchService;
        this.bgColor = true;
        this.moviesList = [];
        this.genresList = [];
        this.originalMovieList = [];
        this.value = '';
        this.lang = 'en';
        this.selectedLanguage = 'en';
        this.movieFilterObj = {
            filter: 'genre',
            value: ''
        };
        this.movieObjArray = []; // movie seperated by language
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
    }
    SDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        // movie from store
        this.store.select(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["nowPlayingMoviesSelector"]).subscribe(function (result) {
            _this.originalMovieList = result;
            _this.moviesList = result;
            _this.movieObjArray = _this.movieListService.getLanguageList(_this.moviesList); // get movies with languages
            // console.log(this.movieObjArray);
            // this.movieObjArray = this.segregateMovies.getSortedbyLanguage(this.languageList, this.moviesList);
        });
        // genre list from service
        this.genresList = this.homeService.getGenres();
        // fetch from api/store
        this.searchField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(400)).subscribe(function (searchString) {
            _this.searchService.getMovies(searchString).subscribe(function (searchList) {
                _this.moviesList = searchList.results;
                _this.movieObjArray = _this.movieListService.getLanguageList(_this.moviesList);
                // this.movieObjArray = this.segregateMovies.getSortedbyLanguage(this.languageList, this.moviesList);
            }, function (error) {
                _this.moviesList = _this.searchService.searchMovieFromStore(_this.originalMovieList, searchString);
                _this.movieObjArray = _this.movieListService.getLanguageList(_this.moviesList); // get Languages
                // console.log('error', this.movieObjArray);
                // this.movieObjArray = this.segregateMovies.getSortedbyLanguage(this.languageList, this.moviesList);
            });
        });
    };
    // change detection for genre dropdown
    SDialogComponent.prototype.changeGenere = function () {
        this.movieFilterObj.filter = 'genre';
        this.movieFilterObj.value = this.selectedGenre;
        this.movieFilterObj = Object.assign({}, this.movieFilterObj);
    };
    SDialogComponent.prototype.ngOnDestroy = function () {
        // console.log('destroy');
        this.moviesList = [];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.app-s-dialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SDialogComponent.prototype, "bgColor", void 0);
    SDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-s-dialog',
            template: __webpack_require__(/*! ./s-dialog.component.html */ "./src/app/search/components/s-dialog/s-dialog.component.html"),
            styles: [__webpack_require__(/*! ./s-dialog.component.scss */ "./src/app/search/components/s-dialog/s-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _home_services_home_service__WEBPACK_IMPORTED_MODULE_7__["HomeService"],
            _core_movie_movie_list_service__WEBPACK_IMPORTED_MODULE_6__["MovieListService"],
            _services_segregate_movie_service__WEBPACK_IMPORTED_MODULE_8__["SegregateMovieService"],
            _services_search_api_service__WEBPACK_IMPORTED_MODULE_9__["SearchApiService"]])
    ], SDialogComponent);
    return SDialogComponent;
}());



/***/ }),

/***/ "./src/app/search/container/search/search.component.html":
/*!***************************************************************!*\
  !*** ./src/app/search/container/search/search.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/container/search/search.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/search/container/search/search.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9jb250YWluZXIvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/search/container/search/search.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/search/container/search/search.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_s_dialog_s_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/s-dialog/s-dialog.component */ "./src/app/search/components/s-dialog/s-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SearchComponent = /** @class */ (function () {
    function SearchComponent(dialog, router) {
        this.dialog = dialog;
        this.router = router;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.openSearchPage(); });
    };
    SearchComponent.prototype.openSearchPage = function () {
        var dialogRef = this.dialog.open(_components_s_dialog_s_dialog_component__WEBPACK_IMPORTED_MODULE_3__["SDialogComponent"], {
            width: '100vw',
            maxWidth: '100vw',
            height: '100vh',
            maxHeight: '100vh'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.router.navigate(['/home']);
        });
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/container/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/container/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/search/search-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _container_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/search/search.component */ "./src/app/search/container/search/search.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '',
        component: _container_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]
    }
];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());



/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_s_dialog_s_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/s-dialog/s-dialog.component */ "./src/app/search/components/s-dialog/s-dialog.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/search/search-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_s_dialog_cards_s_dialog_cards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/s-dialog-cards/s-dialog-cards.component */ "./src/app/search/components/s-dialog-cards/s-dialog-cards.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _container_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./container/search/search.component */ "./src/app/search/container/search/search.component.ts");













var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_components_s_dialog_s_dialog_component__WEBPACK_IMPORTED_MODULE_2__["SDialogComponent"], _components_s_dialog_cards_s_dialog_cards_component__WEBPACK_IMPORTED_MODULE_10__["SDialogCardsComponent"], _container_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _search_routing_module__WEBPACK_IMPORTED_MODULE_8__["SearchRoutingModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]],
            entryComponents: [_components_s_dialog_s_dialog_component__WEBPACK_IMPORTED_MODULE_2__["SDialogComponent"]],
            exports: [_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "./src/app/search/services/search-api.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/search/services/search-api.service.ts ***!
  \*******************************************************/
/*! exports provided: SearchApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchApiService", function() { return SearchApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_shared_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/config */ "./src/app/shared/config.ts");





var SearchApiService = /** @class */ (function () {
    function SearchApiService(http) {
        this.http = http;
    }
    SearchApiService.prototype.getMovies = function (searchQuery) {
        var urlSuffix = '&include_adult=false'; // parental filter
        // fetches movie
        return this.http.get(src_app_shared_config__WEBPACK_IMPORTED_MODULE_4__["BASE_URL"].TMDB_API + src_app_shared_config__WEBPACK_IMPORTED_MODULE_4__["TMDB_URLS"].SEARCH_MOVIE + '?' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_KEY + '&query=' + searchQuery + urlSuffix);
    };
    SearchApiService.prototype.searchMovieFromStore = function (movieList, query) {
        var movies = [];
        for (var i = 0; i < movieList.length; i++) {
            if (movieList[i].original_title.indexOf(query) >= 0) {
                movies.push(movieList[i]);
            }
        }
        return movies;
    };
    SearchApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchApiService);
    return SearchApiService;
}());



/***/ }),

/***/ "./src/app/search/services/segregate-movie.service.ts":
/*!************************************************************!*\
  !*** ./src/app/search/services/segregate-movie.service.ts ***!
  \************************************************************/
/*! exports provided: SegregateMovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegregateMovieService", function() { return SegregateMovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// This service will group movies under a language group
var SegregateMovieService = /** @class */ (function () {
    function SegregateMovieService() {
    }
    SegregateMovieService.prototype.getSortedbyLanguage = function (languageList, moviesList) {
        var mlist = [];
        for (var _i = 0, languageList_1 = languageList; _i < languageList_1.length; _i++) {
            var language = languageList_1[_i];
            var movieobj = {
                key: language.name,
                code: language.key,
                value: []
            };
            for (var _a = 0, moviesList_1 = moviesList; _a < moviesList_1.length; _a++) {
                var movie = moviesList_1[_a];
                if (movie.original_language === language.key) {
                    movieobj.value.push(movie);
                }
            }
            mlist.push(movieobj);
        }
        return mlist;
    };
    SegregateMovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SegregateMovieService);
    return SegregateMovieService;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map