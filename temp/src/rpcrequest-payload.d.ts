/// <reference types="node" />
import { Parameter } from './data-type';
import { InternalConnectionOptions } from './connection';
declare class RpcRequestPayload implements Iterable<Buffer> {
    procedure: string | number;
    parameters: Parameter[];
    options: InternalConnectionOptions;
    txnDescriptor: Buffer;
    constructor(procedure: string | number, parameters: Parameter[], txnDescriptor: Buffer, options: InternalConnectionOptions);
    [Symbol.iterator](): Generator<Buffer, void, unknown>;
    generateData(): Generator<Buffer, void, unknown>;
    toString(indent?: string): string;
    generateParameterData(parameter: Parameter): Generator<Buffer, void, unknown>;
}
export default RpcRequestPayload;
