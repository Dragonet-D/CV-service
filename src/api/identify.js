import tokenHelper from 'utils/tokenHelper';
import fetch from 'utils/request';
import getUrl from '../utils/urls/index';

const globalUrls = getUrl.global;

export async function logout(uuid, userId) {
  return fetch.post(globalUrls.logout, { auditUuid: uuid, loginUserId: userId });
}

export async function login(userName, password) {
  return fetch.post(globalUrls.login, {
    username: userName,
    password,
    codeCategory: 'IVH_VERSION_CODE',
    codeValue: 'VERSION'
  });
}

export async function loginAD(userName, password, adName) {
  return fetch.post(globalUrls.adlogin, {
    param: userName,
    password,
    adName,
    codeCategory: 'IVH_VERSION_CODE',
    codeValue: 'VERSION'
  });
}

export async function updateSessionApi() {
  return fetch.post(globalUrls.updateSession, {
    token: tokenHelper.get()
  });
}
