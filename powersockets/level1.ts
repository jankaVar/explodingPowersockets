 class Level1 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}


  
  /*
    var level1 = function (game) {

        this.tileSize = 50;
        this.counter = 50;
        
        //sockets
        this.soc1 = null;
        this.soc2 = null;  
        
        //power
        this.pow1 = null;
    };


    level1.prototype = {

        init: function () {
        },

        preload: function () {

            this.load.spritesheet('socket', 'assets/socket.png', this.tileSize, this.tileSize);
            this.load.spritesheet('power', 'assets/power.png', this.tileSize, this.tileSize);
            
        },

        create: function () {
	        
            //position of the sockets and power
            this.soc1 = this.game.add.sprite(window.innerWidth / 3, window.innerHeight / 3 * 2, 'socket');
            this.soc2 = this.game.add.sprite(window.innerWidth / 3 * 2, window.innerHeight / 3 * 2, 'socket');
            
            this.pow1 = this.game.add.sprite(window.innerWidth / 3, window.innerHeight / 3, 'power');

        },

        pressedUp: function() {
            //this.moveTo(0, -tileSize);
        },
        pressedRight: function() {
            //this.moveTo(tileSize, 0);
        },
        pressedDown: function() {
            //this.moveTo(0, tileSize);
        },
        pressedLeft: function() {
            //this.moveTo(-tileSize, 0);
        },
        
       

        update: function () {
	        if (this.counter > 0) {
		        
		        this.counter--;
	        } else {
	            
	        }
        },

        render: function () {
            
            this.counter = this.game.add.text(this.game.world.centerX, this.game.world.centerY,' ', { font: '84px Arial', fill: '#000' });
            this.counter.visible = false;
    
	        // Time		    
		    //game.debug.text("Time " + counter);

        },
        
    };
    
*/