class Parallax extends Phaser.Scene
{
    preload ()
    {
        // load images inside the application
    }

    create ()
    {
        // define sprites with scrollFactor
    }

    update ()
    {
        // move images
    }
}

new Phaser.Game({
    type: Phaser.AUTO,
    width: 1175, // dimensions of my artwork
    height: 831, // dimensions of my artwork
    autoCenter: Phaser.CENTER_BOTH, // Align in the center of my body
    scene: Parallax
});
