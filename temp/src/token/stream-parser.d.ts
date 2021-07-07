/// <reference types="node" />
import Debug from '../debug';
import { InternalConnectionOptions } from '../connection';
import JSBI from 'jsbi';
import { Token } from './token';
import { ColumnMetadata } from './colmetadata-token-parser';
declare class StreamBuffer {
    iterator: AsyncIterator<Buffer, any, undefined> | Iterator<Buffer, any, undefined>;
    buffer: Buffer;
    position: number;
    constructor(iterable: AsyncIterable<Buffer> | Iterable<Buffer>);
    waitForChunk(): Promise<void>;
}
declare class Parser {
    debug: Debug;
    colMetadata: ColumnMetadata[];
    options: InternalConnectionOptions;
    suspended: boolean;
    next?: () => void;
    streamBuffer: StreamBuffer;
    static parseTokens(iterable: AsyncIterable<Buffer> | Iterable<Buffer>, debug: Debug, options: InternalConnectionOptions, colMetadata?: ColumnMetadata[]): AsyncGenerator<Token, void, unknown>;
    constructor(streamBuffer: StreamBuffer, debug: Debug, options: InternalConnectionOptions);
    get buffer(): Buffer;
    get position(): number;
    set position(value: number);
    suspend(next: () => void): void;
    awaitData(length: number, callback: () => void): void;
    readInt8(callback: (data: number) => void): void;
    readUInt8(callback: (data: number) => void): void;
    readInt16LE(callback: (data: number) => void): void;
    readInt16BE(callback: (data: number) => void): void;
    readUInt16LE(callback: (data: number) => void): void;
    readUInt16BE(callback: (data: number) => void): void;
    readInt32LE(callback: (data: number) => void): void;
    readInt32BE(callback: (data: number) => void): void;
    readUInt32LE(callback: (data: number) => void): void;
    readUInt32BE(callback: (data: number) => void): void;
    readBigInt64LE(callback: (data: JSBI) => void): void;
    readInt64LE(callback: (data: number) => void): void;
    readInt64BE(callback: (data: number) => void): void;
    readBigUInt64LE(callback: (data: JSBI) => void): void;
    readUInt64LE(callback: (data: number) => void): void;
    readUInt64BE(callback: (data: number) => void): void;
    readFloatLE(callback: (data: number) => void): void;
    readFloatBE(callback: (data: number) => void): void;
    readDoubleLE(callback: (data: number) => void): void;
    readDoubleBE(callback: (data: number) => void): void;
    readUInt24LE(callback: (data: number) => void): void;
    readUInt40LE(callback: (data: number) => void): void;
    readUNumeric64LE(callback: (data: number) => void): void;
    readUNumeric96LE(callback: (data: number) => void): void;
    readUNumeric128LE(callback: (data: number) => void): void;
    readBuffer(length: number, callback: (data: Buffer) => void): void;
    readBVarChar(callback: (data: string) => void): void;
    readUsVarChar(callback: (data: string) => void): void;
    readBVarByte(callback: (data: Buffer) => void): void;
    readUsVarByte(callback: (data: Buffer) => void): void;
}
export default Parser;
