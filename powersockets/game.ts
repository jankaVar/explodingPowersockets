///<reference path='../phaser.d.ts'/>
///<reference path='Boot.ts'/>
///<reference path='Preloader.ts'/>
///<reference path='MainMenu.ts'/>
///<reference path='Level1.ts'/>
module Castlevania {
 
    export class Game extends Phaser.Game {
 
        constructor() {
 
            super(800, 600, Phaser.AUTO, 'content', null);
 
            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Level1', Level1, false);
 
            this.state.start('Boot');
 
        }
 
    }
 
} 