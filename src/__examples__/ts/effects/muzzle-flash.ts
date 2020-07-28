/// <reference path="../../../../typings/phaser.comments.d.ts" />
//@ts-ignore
export class MuzzleFlash extends Phaser.particles.core.ParticleEffect {
    constructor(game: Phaser.Game) {
        super(game, require('../../assets/effects/muzzle-flash.json'));
    }

    public get duration(): number {
        return 300;
    }
}
