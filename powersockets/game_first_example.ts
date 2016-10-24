///<reference path='phaser.d.ts'/>

class Powersockets {
    constructor() {
        
        this.game = new Phaser.Game("100%", "100%", Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }

    game: Phaser.Game;

    preload() {
        this.game.load.image('logo', 'assets/power.png');
    }

    create() {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }

}

window.onload = () => {

    var game = new Powersockets();

};


/*   game.state.add("level1",Level1);
     game.state.start("level1");
*/