function preload ()
{
    // load images inside the application
}

function create ()
{
    // define sprites with scrollFactor
}

function update ()
{
    // move images
}

new Phaser.Game({
    type: Phaser.AUTO,
    width: 1175, // dimensions of my artwork
    height: 831, // dimensions of my artwork
    autoCenter: Phaser.CENTER_BOTH, // Align in the center of my body
    scene: {
        preload: preload,
        create: create,
        update: update
    }
});
