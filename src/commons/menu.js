import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: 'Class Component',
    path: 'class-component',
    authority: [],
    icon: 'Code',
    hideInMenu: false,
    children: [
      {
        name: 'Class',
        path: 'count',
        authority: []
      },
      {
        name: 'Demo',
        path: 'demo',
        authority: []
      }
    ]
  },
  {
    name: 'Hooks',
    path: 'hooks',
    authority: [],
    icon: 'ThumbUpAlt',
    hideInMenu: false,
    children: [
      {
        name: 'Count',
        path: 'count',
        authority: []
      },
      {
        name: 'Optimization',
        path: 'optimization',
        authority: []
      },
      {
        name: 'Demo',
        path: 'demo',
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
