import { I18n } from 'react-i18nify';
import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: I18n.t('menu.security.name'),
    path: 'security',
    authority: [],
    icon: 'Security',
    hideInMenu: false,
    children: [
      {
        name: I18n.t('menu.security.children.userManagement'),
        path: 'user',
        authority: []
      }
    ]
  }
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
