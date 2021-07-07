/// <reference types="node" />
import { CryptoMetadata } from './types';
import { InternalConnectionOptions as ConnectionOptions } from '../connection';
export declare const validateAndGetEncryptionAlgorithmName: (cipherAlgorithmId: number, cipherAlgorithmName?: string | undefined) => string;
export declare const encryptWithKey: (plaintext: Buffer, md: CryptoMetadata, options: ConnectionOptions) => Promise<Buffer>;
export declare const decryptWithKey: (cipherText: Buffer, md: CryptoMetadata, options: ConnectionOptions) => Buffer;
export declare const decryptSymmetricKey: (md: CryptoMetadata, options: ConnectionOptions) => Promise<void>;
