/// <reference path="../../../../typings/phaser.comments.d.ts" />
//@ts-ignore
export class Explosion extends Phaser.particles.core.ParticleEffect {
    constructor(game: Phaser.Game) {
        super(game, require('../../assets/effects/explosion.json'));
    }

    public get duration(): number {
        return 1600;
    }
}
