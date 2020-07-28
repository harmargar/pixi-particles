/// <reference path="../../../../typings/phaser.comments.d.ts" />
//@ts-ignore
export class SnowFlakes extends Phaser.particles.core.ParticleEffect {
    constructor(game: Phaser.Game) {
        super(game, require('../../assets/effects/snow-flakes.json'));
    }

    public get duration(): number {
        return 9999999999;
    }
}
