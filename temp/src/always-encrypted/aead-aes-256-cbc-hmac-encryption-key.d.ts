/// <reference types="node" />
import SymmetricKey from './symmetric-key';
export declare const keySize = 256;
export declare const deriveKey: (rootKey: Buffer, salt: string) => Buffer;
export declare const generateKeySalt: (keyType: 'encryption' | 'MAC' | 'IV', algorithmName: string, keySize: number) => string;
export declare class AeadAes256CbcHmac256EncryptionKey extends SymmetricKey {
    private readonly algorithmName;
    private encryptionKeySaltFormat;
    private macKeySaltFormat;
    private ivKeySaltFormat;
    private encryptionKey;
    private macKey;
    private ivKey;
    constructor(rootKey: Buffer, algorithmName: string);
    getEncryptionKey(): Buffer;
    getMacKey(): Buffer;
    getIvKey(): Buffer;
}
