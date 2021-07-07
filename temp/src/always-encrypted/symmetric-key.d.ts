/// <reference types="node" />
export declare class SymmetricKey {
    rootKey: Buffer;
    constructor(rootKey: Buffer);
    zeroOutKey(): void;
}
export default SymmetricKey;
