/// <reference path="../../../../typings/phaser.comments.d.ts" />
//@ts-ignore
export class Fireworks extends Phaser.particles.core.ParticleEffect {
    constructor(game: Phaser.Game) {
        super(game, require('../../assets/effects/fireworks.json'));
    }

    public get duration(): number {
        return 1200;
    }
}
