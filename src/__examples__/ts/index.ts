/* eslint-disable @typescript-eslint/ban-ts-ignore */
/// <reference types="../../../bin/phaser-particles.js" />
import '../../../bin/phaser-particles';
import { Confetti } from './effects/confetti';

class PreloadState extends Phaser.State {
    public preload(): void {
        this.game.load
            .image('default.png', require('../assets/particles/default.png'))
            .image('explosion-1.png', require('../assets/particles/explosion-1.png'))
            .image('explosion-2.png', require('../assets/particles/explosion-2.png'))
            .image('explosion-3.png', require('../assets/particles/explosion-3.png'))
            .image('thrust-1.png', require('../assets/particles/thrust-1.png'))
            .image('thrust-2.png', require('../assets/particles/thrust-2.png'))
            .image('thrust-3.png', require('../assets/particles/thrust-3.png'))
            .image('circle.png', require('../assets/particles/circle.png'))
            .image('circle1.png', require('../assets/particles/circle1.png'))
            .image('circle2.png', require('../assets/particles/circle2.png'))
            .image('circle3.png', require('../assets/particles/circle3.png'))
            .image('circle4.png', require('../assets/particles/circle4.png'))
            .image('cloud_1.png', require('../assets/particles/cloud_1.png'))
            .image('firework.png', require('../assets/particles/firework.png'))
            .image('rect.png', require('../assets/particles/rect.png'))
            .image('glass-1.png', require('../assets/particles/glass-1.png'))
            .image('glass-2.png', require('../assets/particles/glass-2.png'))
            .image('glass-3.png', require('../assets/particles/glass-3.png'))
            .image('glass-4.png', require('../assets/particles/glass-4.png'))
            .image('glass-5.png', require('../assets/particles/glass-5.png'))
            .image('glass-6.png', require('../assets/particles/glass-6.png'))
            .image('neutron-full.png', require('../assets/particles/neutron-full.png'))
            .image('neutron.png', require('../assets/particles/neutron.png'))
            .image('dash.png', require('../assets/particles/dash.png'))
            .image('pentagram.png', require('../assets/particles/pentagram.png'))
            .image('pentagram-glow.png', require('../assets/particles/pentagram-glow.png'))
            .image('rain-cinematic.png', require('../assets/particles/rain-cinematic.png'))
            .image('rain-blurred.png', require('../assets/particles/rain-blurred.png'))
            .image('snow-flake.png', require('../assets/particles/snow-flake.png'))
            .image('star-real.png', require('../assets/particles/star-real.png'))
            .image('star_1.png', require('../assets/particles/star_1.png'))
            .image('spark-colored.png', require('../assets/particles/spark-colored.png'))
            .image('confetti1.png', require('../assets/particles/confetti1.png'))
            .image('confetti2.png', require('../assets/particles/confetti2.png'))
            .image('confetti3.png', require('../assets/particles/confetti3.png'))
            .image('confetti4.png', require('../assets/particles/confetti4.png'))
            .image('confetti5.png', require('../assets/particles/confetti5.png'))
            .image('confetti6.png', require('../assets/particles/confetti6.png'));
    }

    public create() {
        this.game.state.start('GameState');
    }
}

class GameState extends Phaser.State {
    static readonly EFFECT = Confetti;
    private _effect: Phaser.particles.core.ParticleEffect;
    public create(): void {
        const effect = new Confetti(this.game);
        effect.start();
        // setInterval(() => {
        //     effect.update(10);
        // }, 10);
        effect.x = this.game.width / 2;
        effect.y = this.game.height / 2;
        this.game.world.addChild(effect);
        this._effect = effect;
        setInterval(() => {
            this._effect.reset();
            this._effect.start();
            // @ts-ignore
        }, this._effect.duration);
    }

    public update() {
        this._effect.update();
    }
}

class Game extends Phaser.Game {
    public constructor() {
        super('100%', '100%', Phaser.CANVAS, 'gameContainer', null);
        console.warn('asdasd');
        this.state.add('PreloadState', PreloadState, true);
        this.state.add('GameState', GameState, false);
        this.state.start('PreloadState');
        // this.
        // document.getElementById('gameContainer')?.appendChild(this.view);
        //     .load(() => {
        //         const effect = new Game.EFFECT();
        //         effect.start();
        //         this.ticker.add((delta) => {
        //             effect.update(this.ticker.deltaMS);
        //         });
        //         // setInterval(() => {
        //         //     effect.update(10);
        //         // }, 10);
        //         effect.x = this.renderer.width / 2;
        //         effect.y = this.renderer.height / 2;
        //         this.stage.addChild(effect);
        //         this._effect = effect;
        //         setInterval(() => {
        //             this._effect.reset();
        //             this._effect.start();
        //             // @ts-ignore
        //         }, this._effect.duration);
        //     });
    }
}

document.onreadystatechange = () => {
    console.warn(document.readyState);
    if (document.readyState === 'complete') {
        new Game();
    }
};
