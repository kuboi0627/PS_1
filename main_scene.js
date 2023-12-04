class MainScene extends Phaser.Scene {

    constructor() {
        super('MainScene');
    }

    preload() {
        this.load.image('sky', 'assets/background.png');
        this.load.image('alien', 'assets/taro.png');
        this.load.image('jiro', 'assets/jiro.png')
   }
   create() {
    // 単体画像をシーンに追加(X座標,Y座標,画像名)
   this.add.image(400, 300, 'sky');
   const player = this.physics.add.sprite(500, 350, 'alien');
   const player1 = this.physics.add.sprite(350, 300, 'jiro');
   this.player = player;
   this.player1 = player1;
   this.player.angle = 0;
   this.player_direction = 1;

   
   // MainSceneクラスのプロパティにplayerを設定
  

}

// 毎フレーム実行される繰り返し処理
arrow_move(cursors, object){
    if(cursors.left.isDown){
        console.log("Left");
        object.setVelocityX(-200);
    }else if(cursors.right.isDown){
        console.log("Right!!");
        object.setVelocityX(200);
    }else{
        object.setVelocity(0,0);
    }
}
arrow_move2(cursors, object){
    if(cursors.left.isDown){
        console.log("Left");
        object.setVelocityX(200);
    }else if(cursors.right.isDown){
        console.log("Right!!");
        object.setVelocityX(-200);
    }else{
        object.setVelocity(0,0);
    }
}

update(time, delta) {
    let cursors = this.input.keyboard.createCursorKeys();
    this.arrow_move(cursors, this.player);
    this.arrow_move2(cursors, this.player1);
    // if (this.player.x <= 0 || this.player.y <= 0) this.player_direction = 1;
    //     if(this.player_direction == 1){
    //         this.player.setVelocity(100, -100);
    //         this.player.angle += 5;
    //         this.player.setAngle( this.player.angle );
  // プレイヤーの向きフラグを変更
//    if (this.player.x >= D_WIDTH - 100) this.player_direction = -1;
//    if (this.player.x <= 100) this.player_direction = 1;

//    // プレイヤーの移動
//    // +X方向の移動フラグならプレイヤーを右に移動
//    if (this.player_direction == 1) {
//        this.player.setVelocity(20);

//    // -X方向の移動フラグならプレイヤーを左に移動
//    } else {
//        this.player.setVelocity(20);
//    }
// }

}
}