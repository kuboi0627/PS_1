class MainScene extends Phaser.Scene {

    constructor() {
        super('MainScene');
    }

    preload() {
        this.load.image('sky', 'assets/background.png');
        this.load.image('alien', 'assets/taro.png');
   }
   create() {
    // 単体画像をシーンに追加(X座標,Y座標,画像名)
   this.add.image(400, 300, 'sky');
   const player = this.physics.add.sprite(500, 350, 'alien');
   this.player = player;
   this.player.angle = 0;
   this.player_direction = 1;

   
   // MainSceneクラスのプロパティにplayerを設定
  

}

// 毎フレーム実行される繰り返し処理
update(time, delta) {
    
    if (this.player.x <= 0 || this.player.y <= 0) this.player_direction = 1;
        if(this.player_direction == 1){
            this.player.setVelocity(100, -100);
            this.player.angle += 5;
            this.player.setAngle( this.player.angle );
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
}

}
}