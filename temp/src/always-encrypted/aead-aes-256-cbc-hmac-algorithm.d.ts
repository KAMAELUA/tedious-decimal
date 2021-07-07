/// <reference types="node" />
import { EncryptionAlgorithm, SQLServerEncryptionType } from './types';
import { AeadAes256CbcHmac256EncryptionKey } from './aead-aes-256-cbc-hmac-encryption-key';
export declare const algorithmName = "AEAD_AES_256_CBC_HMAC_SHA256";
export declare class AeadAes256CbcHmac256Algorithm implements EncryptionAlgorithm {
    private columnEncryptionkey;
    private isDeterministic;
    private keySizeInBytes;
    private version;
    private versionSize;
    private minimumCipherTextLengthInBytesNoAuthenticationTag;
    private minimumCipherTextLengthInBytesWithAuthenticationTag;
    constructor(columnEncryptionKey: AeadAes256CbcHmac256EncryptionKey, encryptionType: SQLServerEncryptionType);
    encryptData(plaintText: Buffer): Buffer;
    decryptData(cipherText: Buffer): Buffer;
    _prepareAuthenticationTag(iv: Buffer, cipherText: Buffer, offset: number, length: number): Buffer;
}
