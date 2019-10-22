import { CURRENT } from './index';

/**
 * Common check permissions method
 * @param { Permission judgment type string |array | Promise | Function } authority
 * @param { Your permission description  type:string} currentAuthority
 * @param { Passing components } target
 * @param { no pass components } Exception
 */
const checkPermissions = (authority, currentAuthority, target) => {
  return target;
};

export { checkPermissions };

const check = (authority, target, Exception) => {
  return checkPermissions(authority, CURRENT, target, Exception);
};

export default check;
