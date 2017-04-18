"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Promise Version
var core_1 = require('@angular/core');
var hero_service_promise_1 = require('./hero.service.promise');
var HeroListPromiseComponent = (function () {
    function HeroListPromiseComponent(heroService) {
        this.heroService = heroService;
        this.mode = 'Promise';
    }
    HeroListPromiseComponent.prototype.ngOnInit = function () { this.getHeroes(); };
    HeroListPromiseComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; }, function (error) { return _this.errorMessage = error; });
    };
    HeroListPromiseComponent = __decorate([
        core_1.Component({
            selector: 'hero-list-promise',
            templateUrl: './hero-list.component.html',
            providers: [hero_service_promise_1.HeroService],
            styles: ['.error {color:red;}']
        })
    ], HeroListPromiseComponent);
    return HeroListPromiseComponent;
}());
exports.HeroListPromiseComponent = HeroListPromiseComponent;
//# sourceMappingURL=hero-list.component.promise.js.map