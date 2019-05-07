class Potato_m_v extends Phaser.Scene {
    constructor(){
        super({key:"Potato_m_v", active:false});
    }
    preload(){
        this.load.image('sky', 'testImages/sky.png');
    }
    create(){
        //this.add.image(400, 300, 'shinyboi');
        //this.add.sprite(this.scale.width/2, this.scale.height/2, 'sky');   
        this.add.sprite(this.scale.width/2, this.scale.height/2, 'sky');       
        let text = this.add.text(this.scale.width/2, this.scale.height/2, "Potato - Mobile Vertical");
        text.setInteractive();
        text.on('pointerdown', () => {
        this.scene.bringToTop('Rock_m_v');
        })
    }
    update(){}
}