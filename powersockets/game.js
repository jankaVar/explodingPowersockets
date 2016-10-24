var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path='../phaser.d.ts'/>
///<reference path='Boot.ts'/>
///<reference path='Preloader.ts'/>
///<reference path='MainMenu.ts'/>
///<reference path='Level1.ts'/>
var Castlevania;
(function (Castlevania) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 800, 600, Phaser.AUTO, 'content', null);
            this.state.add('Boot', Castlevania.Boot, false);
            this.state.add('Preloader', Castlevania.Preloader, false);
            this.state.add('MainMenu', Castlevania.MainMenu, false);
            this.state.add('Level1', Castlevania.Level1, false);
            this.state.start('Boot');
        }
        return Game;
    }(Phaser.Game));
    Castlevania.Game = Game;
})(Castlevania || (Castlevania = {}));
