/**
 * MIT License
 * Copyright (c) 2018 JCC Dex
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * @author https://github.com/GinMu
 */

import JcBase from "./base";
import JcConfig from "./config";
import JcExplorer from "./explorer";
import JcInfo from "./info";
import JcNodeRpc from "./node_rpc";
import SubscribeTask from "./subscribe";

export { JcBase, JcConfig, JcExplorer, JcInfo, JcNodeRpc, SubscribeTask };

export const Factory = <T>(C: new (...args) => T) => {
  let inst: T | null = null;
  /**
   * create singleton
   *
   * @param {*} args
   * @returns {T}
   */
  const init = (...args): T => {
    return inst || (inst = new C(...args));
  };

  /**
   * get singleton
   *
   * @returns {(T | null)}
   */
  const get = (): T | null => {
    return inst;
  };

  /**
   * destroy singleton
   *
   */
  const destroy = () => {
    inst = null;
  };

  return {
    destroy,
    init,
    get
  };
};

export const ConfigFactory = Factory<JcConfig>(JcConfig);
export const InfoFactory = Factory<JcInfo>(JcInfo);
export const ExplorerFactory = Factory<JcExplorer>(JcExplorer);
export const NodeRpcFactory = Factory<JcNodeRpc>(JcNodeRpc);
export const SubscribeFactory = Factory<SubscribeTask>(SubscribeTask);
