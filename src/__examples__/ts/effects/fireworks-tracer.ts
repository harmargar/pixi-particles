/// <reference path="../../../../typings/phaser.comments.d.ts" />
//@ts-ignore
export class FireworksTracer extends Phaser.particles.core.ParticleEffect {
    constructor(game: Phaser.Game) {
        super(game, require('../../assets/effects/fireworks-tracer.json'));
    }

    public get duration(): number {
        return 3000;
    }
}
