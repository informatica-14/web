(function () {
	angular.module('CursosInformatica', [])
		.controller('TabsController', function () {
			this.tab = 1;
			this.selectTab = function (tab) {
			  this.tab = tab;
			};
		})
		.controller('ControllerGuias', function () {
			this.guias = {
				html: 'Trabajando con HTML',
				name: [ 'guia-01', 'guia-02', 'guia-03' ],
				namedt: [ 'guia-01', 'guia-02' ],
				css: 'Trabajando con CSS',
				namecss: [ 'guia-01', 'guia-02', 'guia-03' ],
				namecssdt: [ 'guia-01', 'guia-02' ]
			}
		});
})();