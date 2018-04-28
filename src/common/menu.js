import { isUrl } from '../utils/utils';
import menuList from './../common/menuList';

function formatter(data = menuList.menuData1, parentPath = '/', parentAuthority) {
  // if (data.length === 0) {
  //   data = menuList.menuData1;
  // }
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = menuData => formatter(menuData);
