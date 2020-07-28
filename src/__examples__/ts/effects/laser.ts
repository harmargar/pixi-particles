/// <reference path="../../../../typings/phaser.comments.d.ts" />
//@ts-ignore
export class Laser extends Phaser.particles.core.ParticleEffect {
    constructor(game: Phaser.Game) {
        super(game, require('../../assets/effects/laser.json'));
    }

    public get duration(): number {
        return 9999999999;
    }
}
