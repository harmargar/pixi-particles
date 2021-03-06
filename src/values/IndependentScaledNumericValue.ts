/// <reference path="./ScaledNumericValue.ts" />

namespace phaserparticles.values {
    export class IndependentScaledNumericValue extends ScaledNumericValue {
        public independent: boolean;

        public init(value: any): void {
            super.init(value);
            this.independent = value['independent'];
        }
    }
}
