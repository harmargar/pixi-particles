namespace phaserparticles.core {
    export class ParticleEffect extends Phaser.Group {
        private readonly _emitters: ParticleEmitter[];

        public constructor(game: Phaser.Game, config?: any) {
            super(game);
            this._emitters = [];
            Object.keys(config).forEach((e) => {
                const emitter = this.newEmitter(e, config[e]);
                this._emitters.push(emitter);
            });
        }

        public start(): void {
            for (let i = 0, n = this._emitters.length; i < n; i++) this._emitters[i].start();
        }

        /** Resets the effect so it can be started again like a new effect.
         * @param resetScaling Whether to restore the original size and motion parameters if they were scaled. Repeated scaling and
         *           resetting may introduce error. */
        public reset(): void {
            for (let i = 0, n = this._emitters.length; i < n; i++) this._emitters[i].reset();
        }

        public update(): void {
            for (let i = 0, n = this._emitters.length; i < n; i++) this._emitters[i].update(this.game.time.elapsedMS);
        }

        public allowCompletion(): void {
            for (let i = 0, n = this._emitters.length; i < n; i++) this._emitters[i].allowCompletion();
        }

        public isComplete(): boolean {
            for (let i = 0, n = this._emitters.length; i < n; i++) {
                const emitter = this._emitters[i];
                if (!emitter.isComplete()) return false;
            }
            return true;
        }

        public setDuration(duration: number): void {
            for (let i = 0, n = this._emitters.length; i < n; i++) {
                const emitter = this._emitters[i];
                emitter.continuous = false;
                emitter.duration = duration;
                emitter.durationTimer = 0;
            }
        }

        public getEmitters(): ParticleEmitter[] {
            return this._emitters;
        }

        /** Returns the emitter with the specified name, or null. */
        public findEmitter(name: string): ParticleEmitter {
            for (let i = 0, n = this._emitters.length; i < n; i++) {
                const emitter = this._emitters[i];
                if (emitter.name === name) return emitter;
            }
            return null;
        }

        /** Allocates all emitters particles. See {@link com.badlogic.gdx.graphics.g2d.ParticleEmitter#preAllocateParticles()} */
        public preAllocateParticles(): void {
            this._emitters.forEach((e) => e.preAllocateParticles());
        }

        /** Disposes the texture for each sprite for each ParticleEmitter. */
        public destroy(): void {
            for (let i = 0, n = this._emitters.length; i < n; i++) {
                const emitter = this._emitters[i];
                emitter.sprites.forEach((s) => s.destroy(true));
            }
            super.destroy();
        }

        protected newEmitter(name: string, emitterConfig: any): ParticleEmitter {
            return new ParticleEmitter(this, name, emitterConfig);
        }
    }
}
