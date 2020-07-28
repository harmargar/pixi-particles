/// <reference path="../../../../typings/phaser.comments.d.ts" />
//@ts-ignore
export class DustLeft extends Phaser.particles.core.ParticleEffect {
    constructor(game: Phaser.Game) {
        super(game, require('../../assets/effects/dust-left.json'));
    }

    public get duration(): number {
        return 4000;
    }
}
