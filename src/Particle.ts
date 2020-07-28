namespace phaserparticles.core {
    export class Particle {
        public life: number;
        public currentLife: number;
        public xScale: number;
        public xScaleDiff: number;
        public yScale: number;
        public yScaleDiff: number;
        public rotation = 0;
        public rotationDiff: number;
        public velocity: number;
        public velocityDiff: number;
        public angle: number;
        public angleDiff: number;
        public angleCos: number;
        public angleSin: number;
        public transparency: number;
        public transparencyDiff: number;
        public wind: number;
        public windDiff: number;
        public gravity: number;
        public gravityDiff: number;
        public tint: number[];
        public color: number[];
        public frame: number;

        //

        public position = new Phaser.Point(0, 0);
        public positionOffset = new Phaser.Point(0, 0);
        public flip: { x: boolean; y: boolean };
        public scale = new Phaser.Point(0, 0);
        public texture: PIXI.Texture;
        private _sprite: Phaser.Sprite;
        private _game: Phaser.Game;

        public constructor(game: Phaser.Game, additive: boolean, sprite: Phaser.Sprite) {
            this._game = game;
            this._sprite = sprite;
            this._sprite.anchor.set(0.5);
            this._sprite.blendMode = additive ? Phaser.blendModes.ADD : Phaser.blendModes.NORMAL;
        }

        public get sprite(): Phaser.Sprite {
            return this._sprite;
        }

        public reset(): void {
            this.position.set(0, 0);
            this.scale.set(1, 1);
            this.texture = null;
        }

        public update(): void {
            this._sprite.texture = this.texture;
            const hex =
                this.color[0] * 255 * 0x010000 + this.color[1] * 255 * 0x000100 + this.color[2] * 255 * 0x000001;
            this._sprite.tint = hex;
            this._sprite.alpha = this.color[3];
            this.scale.copyTo(this._sprite.scale);
            this._sprite.alpha = 1;
            this.scale.set(1);
            this._sprite.position.x = this.position.x + this.positionOffset.x;
            this._sprite.position.y = this.position.y + this.positionOffset.y;
            this._sprite.angle = this.rotation;
        }
    }
}
