import Parser from './stream-parser';
import { InternalConnectionOptions } from '../connection';
import { FeatureExtAckToken } from './token';
declare function featureExtAckParser(parser: Parser, _options: InternalConnectionOptions, callback: (token: FeatureExtAckToken) => void): void;
export default featureExtAckParser;
