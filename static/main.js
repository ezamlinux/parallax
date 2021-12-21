class Parallax extends Phaser.Scene
{
    preload ()
    {
        // load images inside the application
        this.load.setBaseURL('static/images');

        this.load.image('sky', 'sky.png');
        this.load.image('cloud', 'cloud.png');
        this.load.image('forest background', 'forest background.png');
        this.load.image('tree', 'tree.png');
        this.load.image('forest foreground', 'forest foreground.png');
    }

    create ()
    {
        // define sprites with scrollFactor

        // background
        this.add.image(0, 0, 'sky')
            .setOrigin(0, 0);

        // fixed sky // for more immersive cloud
        this.add.image(0, 0, 'cloud')
            .setOrigin(0, 0);

        // Moving Tiles
        this.cloud = this.add.tileSprite(0, 0, this.game.config.width, this.game.config.height, 'cloud')
            .setOrigin(0, 0);

        this.forest = this.add.tileSprite(0, 0, this.game.config.width, this.game.config.height, 'forest background')
            .setOrigin(0, 0);

        this.tree = this.add.tileSprite(0, 0, this.game.config.width, this.game.config.height, 'tree')
            .setOrigin(0, 0);

        // Text with font added via Google Fonts, in the center of the canvas
        this.add.text(this.game.config.width / 2, this.game.config.height / 2, 'The Nightingale', { fontSize: '68px' })
            .setAlpha(0.8)
            .setFontFamily('Parisienne')
            .setOrigin(0.5, 0.5);

        // static foreground
        this.add.image(0, 0, 'forest foreground')
            .setOrigin(0, 0);
    }

    update ()
    {
        // move images

        this.cloud.tilePositionX += 0.15;
        this.forest.tilePositionX += 0.3;
        this.tree.tilePositionX += 0.5;
    }
}

new Phaser.Game({
    type: Phaser.AUTO,
    width: 1175, // dimensions of my artwork
    height: 831, // dimensions of my artwork
    autoCenter: Phaser.CENTER_BOTH, // Align in the center of my body
    scene: Parallax
});
