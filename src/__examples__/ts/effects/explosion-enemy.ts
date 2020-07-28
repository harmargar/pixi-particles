/// <reference path="../../../../typings/phaser.comments.d.ts" />
//@ts-ignore
export class ExplosionEnemy extends Phaser.particles.core.ParticleEffect {
    constructor(game: Phaser.Game) {
        super(game, require('../../assets/effects/explosion-enemy.json'));
    }

    public get duration(): number {
        return 1600;
    }
}
