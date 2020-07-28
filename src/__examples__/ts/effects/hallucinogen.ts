/// <reference path="../../../../typings/phaser.comments.d.ts" />
//@ts-ignore
export class Hallucinogen extends Phaser.particles.core.ParticleEffect {
    constructor(game: Phaser.Game) {
        super(game, require('../../assets/effects/hallucinogen.json'));
    }

    public get duration(): number {
        return 9999999999;
    }
}
