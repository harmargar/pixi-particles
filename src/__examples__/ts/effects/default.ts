/// <reference path="../../../../typings/phaser.comments.d.ts" />
//@ts-ignore
export class Default extends Phaser.particles.core.ParticleEffect {
    constructor(game: Phaser.Game) {
        super(game, require('../../assets/effects/default.json'));
    }

    public get duration(): number {
        return 9999999999;
    }
}
