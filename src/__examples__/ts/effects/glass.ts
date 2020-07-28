/// <reference path="../../../../typings/phaser.comments.d.ts" />
//@ts-ignore
export class Glass extends Phaser.particles.core.ParticleEffect {
    constructor(game: Phaser.Game) {
        super(game, require('../../assets/effects/glass.json'));
    }

    public get duration(): number {
        return 1500;
    }
}
