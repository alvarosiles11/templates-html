class LanguageSelector {
	setLang(lang) {
		l = lang.toLowerCase();
		localStorage.setItem('lang', l);

		return true;
	}
	getLang() {
		var lang = localStorage.getItem('lang');
		if (lang != null) {
			return lang;
		} else {
			return 'es';
		}
	}
	removeLang() {
		localStorage.removeItem('lang');

		return true;
	}
	loadLang() {
		var l = this.getLang();
		var strs = lang[l];

		return strs;
	}
	parse() {
		var rtl = ['es', 'ar', 'ur', 'fa', 'he', 'arc', 'az', 'dv', 'arabic', 'aramaic', 'azeri', 'maldivian', 'dhivehi', 'hebrew', 'kurdish', 'persian', 'urdu'
		];
		var lang = this.loadLang();
		var len = lang.length - 1;
		var keys = Object.keys(lang);
		var values = Object.values(lang);

		for (var i = 0; i <= keys.length - 1; i++) {
			$("body").children().each(function () {
				$(this).html($(this).html().replace(keys[i], values[i]));
			});
		}
		if (rtl.includes(this.getLang())) {
			document.body.style.direction = 'rtl';
		}
	}
}