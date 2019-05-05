class Task extends Phaser.Scene {
    constructor(){
        super({key:"Task", active:false});
    }
    preload(){
        this.load.image('backTask', 'testImages/sky.png');
        this.load.image("menuTask", 'testImages/menu.png');
        this.load.image('button', 'testImages/button.png');
    }
    create(){
        this.add.sprite(this.scale.width/2, this.scale.height/2, 'backTask'); 
        this.add.text(this.scale.width/2, this.scale.height/2, "task");
        let menu2 = this.add.sprite(this.scale.width*.05, this.scale.height*.05, 'menuTask');  
    
        menu2.setInteractive();
         menu2.on('pointerdown', ()=> {
            this.scene.run('ShowMenu');
            this.scene.bringToTop('ShowMenu');   
        })
        let button = this.add.sprite(this.scale.width*.5, this.scale.height*.5, 'button');
        button.setInteractive();
        button.on('pointerdown', ()=> {
            this.scene.sleep();
            this.scene.bringToTop('Pethub');
            this.scene.run('Pethub', {hi: 'hi'});
            
        })
        console.log(information[0]);
        information[0] = '3';
        
    }
    
}