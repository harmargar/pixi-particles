/// <reference path="../../../../typings/phaser.comments.d.ts" />
//@ts-ignore
export class MuzzleFlashWithSmoke extends Phaser.particles.core.ParticleEffect {
    constructor(game: Phaser.Game) {
        super(game, require('../../assets/effects/muzzle-flash-with-smoke.json'));
    }

    public get duration(): number {
        return 600;
    }
}
