/* eslint-disable @typescript-eslint/ban-ts-ignore */
/// <reference types="../../../bin/phaser-particles.js" />
import '../../../bin/phaser-particles';
import { Burnout } from './effects/burnout';
import { Confetti } from './effects/confetti';
import { Default } from './effects/default';
import { Dust } from './effects/dust';
import { DustLeft } from './effects/dust-left';
import { DustRight } from './effects/dust-right';
import { Explosion } from './effects/explosion';
import { ExplosionEnemy } from './effects/explosion-enemy';
import { ExplosionSmall } from './effects/explosion-small';
import { Fireball } from './effects/fireball';
import { FireballBlue } from './effects/fireball-blue';
import { Fireworks } from './effects/fireworks';
import { FireworksTracer } from './effects/fireworks-tracer';
import { FireworksTracerWithDazzler } from './effects/fireworks-tracer-with-dazzler';
import { Flame } from './effects/flame';
import { FlamePixel } from './effects/flame-pixel';
import { Glass } from './effects/glass';
import { Hallucinogen } from './effects/hallucinogen';
import { HallucinogenFull } from './effects/hallucinogen-full';
import { Laser } from './effects/laser';
import { MuzzleFlash } from './effects/muzzle-flash';
import { MuzzleFlashWithSmoke } from './effects/muzzle-flash-with-smoke';
import { Pentagram } from './effects/pentagram';
import { PentagramGlitchy } from './effects/pentagram-glitchy';
import { Rain } from './effects/rain';
import { RainCinematic } from './effects/rain-cinematic';
import { Smoke } from './effects/smoke';
import { SmokeTrail } from './effects/smoke-trail';
import { SmokeTrain } from './effects/smoke-train';
import { SnowFlakes } from './effects/snow-flakes';
import { Sparks } from './effects/sparks';
import { Splash } from './effects/splash';
import { SplashPixel } from './effects/splash-pixel';
import { Star } from './effects/star';
import { Starlight } from './effects/starlight';
import { Stink } from './effects/stink';
import { Thrust } from './effects/thrust';
import { Thruster } from './effects/thruster';
import { ThrusterPixel } from './effects/thruster-pixel';
import { Trail } from './effects/trail';
import { TrailFart } from './effects/trail-fart';
import { TrailPixel } from './effects/trail-pixel';

const effects = Object.freeze([
    Burnout,
    Confetti,
    Default,
    Dust,
    DustLeft,
    DustRight,
    Explosion,
    ExplosionEnemy,
    ExplosionSmall,
    Fireball,
    FireballBlue,
    Fireworks,
    FireworksTracer,
    FireworksTracerWithDazzler,
    Flame,
    FlamePixel,
    Glass,
    Hallucinogen,
    HallucinogenFull,
    Laser,
    MuzzleFlash,
    MuzzleFlashWithSmoke,
    Pentagram,
    PentagramGlitchy,
    Rain,
    RainCinematic,
    Smoke,
    SmokeTrail,
    SmokeTrain,
    SnowFlakes,
    Sparks,
    Splash,
    SplashPixel,
    Star,
    Starlight,
    Stink,
    Thrust,
    Thruster,
    ThrusterPixel,
    Trail,
    TrailFart,
    TrailPixel,
]);

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

        this.game.load.crossOrigin = 'anonymous';
    }

    public create() {
        this.game.state.start('GameState');
    }
}

class GameState extends Phaser.State {
    // static readonly EFFECT = Flame;
    private _effect: Phaser.particles.core.ParticleEffect;
    private _effectResetTime: NodeJS.Timeout;
    private _buttonsBar: Phaser.Group;

    public create(): void {
        this._addEffect(effects[0]);
        this._buildButtons();
        this.game.input.enabled = true;

        this.game.input.mouseWheel.callback = () => this._scrollButtons();
        this.game.input.mouseWheel.start();
    }

    private _buildButtons(): void {
        this._buttonsBar = this.game.make.group(this.world);
        let buttons: Phaser.Group[] = [];

        effects.forEach((effect, index) => {
            const btn = this._buildButton(effect);
            buttons.push(btn);
            btn.position.set(30, 40 * (index + 1));
        });

        this._buttonsBar.addMultiple(buttons);
    }

    private _buildButton(effect): Phaser.Group {
        const button = this.game.add.group();

        const bg = this.game.make.graphics(0, 0);
        bg.beginFill(0x0000ff, 1);
        bg.drawRoundedRect(0, 0, 250, 30, 10);
        bg.endFill();

        bg.inputEnabled = true;
        bg.events.onInputUp.add(() => {
            this._removeEffect();
            this._addEffect(effect);
        });

        const text = this.game.make.text(0, 0, effect.name, {
            fill: '#ffffff',
            align: 'center',
            fontSize: 18,
        });
        button.addChild(bg);
        button.addChild(text);

        text.centerX = bg.centerX;
        text.centerY = bg.centerY;

        return button;
    }

    private _scrollButtons(): void {
        this._buttonsBar.forEach(function (item) {
            item.y += this.game.input.mouseWheel.delta * 10;
        }, this);
    }

    private _addEffect(effe): void {
        const effect = new effe(this.game);
        effect.start();
        effect.x = this.game.width / 2;
        effect.y = this.game.height / 2;
        this.game.world.addChild(effect);
        this._effect = effect;
        this._effectResetTime = setInterval(() => {
            this._effect.reset();
            this._effect.start();
            // @ts-ignore
        }, this._effect.duration);
    }

    private _removeEffect(): void {
        clearInterval(this._effectResetTime);
        this._effect.destroy();
        this._effect = null;
    }

    public update() {
        this._effect && this._effect.update();
    }
}

class Game extends Phaser.Game {
    public constructor() {
        super(innerWidth, innerHeight, Phaser.CANVAS, 'gameContainer');
        this.state.add('PreloadState', PreloadState, false);
        this.state.add('GameState', GameState, false);
        this.state.start('PreloadState');
    }
}

document.onreadystatechange = () => {
    console.warn(document.readyState);
    if (document.readyState === 'complete') {
        new Game();
    }
};
