/// <reference path="../../../../typings/phaser.comments.d.ts" />
//@ts-ignore
export class SplashPixel extends Phaser.particles.core.ParticleEffect {
    constructor(game: Phaser.Game) {
        super(game, require('../../assets/effects/splash-pixel.json'));
    }

    public get duration(): number {
        return 4000;
    }
}
