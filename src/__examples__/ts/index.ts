/* eslint-disable @typescript-eslint/ban-ts-ignore */
/// <reference types="../../../bin/phaser-particles.js" />
import '../../../bin/phaser-particles';
import { Confetti } from './effects/confetti';

class Game extends Phaser.Game {
    static readonly EFFECT = Confetti;
    private _effect: Phaser.particles.core.ParticleEffect;
    public constructor() {
        super();
        // document.getElementById('gameContainer')?.appendChild(this.view);
        this.loader
            .add('default.png', require('../assets/particles/default.png'))
            .add('explosion-1.png', require('../assets/particles/explosion-1.png'))
            .add('explosion-2.png', require('../assets/particles/explosion-2.png'))
            .add('explosion-3.png', require('../assets/particles/explosion-3.png'))
            .add('thrust-1.png', require('../assets/particles/thrust-1.png'))
            .add('thrust-2.png', require('../assets/particles/thrust-2.png'))
            .add('thrust-3.png', require('../assets/particles/thrust-3.png'))
            .add('circle.png', require('../assets/particles/circle.png'))
            .add('circle1.png', require('../assets/particles/circle1.png'))
            .add('circle2.png', require('../assets/particles/circle2.png'))
            .add('circle3.png', require('../assets/particles/circle3.png'))
            .add('circle4.png', require('../assets/particles/circle4.png'))
            .add('cloud_1.png', require('../assets/particles/cloud_1.png'))
            .add('firework.png', require('../assets/particles/firework.png'))
            .add('rect.png', require('../assets/particles/rect.png'))
            .add('glass-1.png', require('../assets/particles/glass-1.png'))
            .add('glass-2.png', require('../assets/particles/glass-2.png'))
            .add('glass-3.png', require('../assets/particles/glass-3.png'))
            .add('glass-4.png', require('../assets/particles/glass-4.png'))
            .add('glass-5.png', require('../assets/particles/glass-5.png'))
            .add('glass-6.png', require('../assets/particles/glass-6.png'))
            .add('neutron-full.png', require('../assets/particles/neutron-full.png'))
            .add('neutron.png', require('../assets/particles/neutron.png'))
            .add('dash.png', require('../assets/particles/dash.png'))
            .add('pentagram.png', require('../assets/particles/pentagram.png'))
            .add('pentagram-glow.png', require('../assets/particles/pentagram-glow.png'))
            .add('rain-cinematic.png', require('../assets/particles/rain-cinematic.png'))
            .add('rain-blurred.png', require('../assets/particles/rain-blurred.png'))
            .add('snow-flake.png', require('../assets/particles/snow-flake.png'))
            .add('star-real.png', require('../assets/particles/star-real.png'))
            .add('star_1.png', require('../assets/particles/star_1.png'))
            .add('spark-colored.png', require('../assets/particles/spark-colored.png'))
            .add('confetti1.png', require('../assets/particles/confetti1.png'))
            .add('confetti2.png', require('../assets/particles/confetti2.png'))
            .add('confetti3.png', require('../assets/particles/confetti3.png'))
            .add('confetti4.png', require('../assets/particles/confetti4.png'))
            .add('confetti5.png', require('../assets/particles/confetti5.png'))
            .add('confetti6.png', require('../assets/particles/confetti6.png'))
            .load(() => {
                const effect = new Game.EFFECT();
                effect.start();
                this.ticker.add((delta) => {
                    effect.update(this.ticker.deltaMS);
                });
                // setInterval(() => {
                //     effect.update(10);
                // }, 10);
                effect.x = this.renderer.width / 2;
                effect.y = this.renderer.height / 2;
                this.stage.addChild(effect);
                this._effect = effect;
                setInterval(() => {
                    this._effect.reset();
                    this._effect.start();
                    // @ts-ignore
                }, this._effect.duration);
            });
    }
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        new Game();
    }
};
