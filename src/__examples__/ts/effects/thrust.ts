/// <reference path="../../../../typings/phaser.comments.d.ts" />
//@ts-ignore
export class Thrust extends Phaser.particles.core.ParticleEffect {
    constructor(game: Phaser.Game) {
        super(game, require('../../assets/effects/thrust.json'));
    }

    public get duration(): number {
        return 9999999999;
    }
}
