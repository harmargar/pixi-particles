//@ts-ignore
export class Burnout extends PIXI.particles.core.ParticleEffect {
    constructor(game) {
        super(game, require('../../assets/effects/burnout.json'));
    }

    public get duration(): number {
        return 9999999999;
    }
}
