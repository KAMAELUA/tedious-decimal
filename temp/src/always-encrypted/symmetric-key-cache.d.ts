import { EncryptionKeyInfo } from './types';
import SymmetricKey from './symmetric-key';
import { InternalConnectionOptions as ConnectionOptions } from '../connection';
export declare const getKey: (keyInfo: EncryptionKeyInfo, options: ConnectionOptions) => Promise<SymmetricKey>;
