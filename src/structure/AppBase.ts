import { Menu, MenuItem, MenuItemConstructorOptions } from "electron";

export class AppBaseT {
  protected app_menu: Menu;
  constructor() {
    this.app_menu = new Menu();
  }

  addMenuItems(items: MenuItemConstructorOptions[]) {
    items.forEach((item) => {
      this.addMenuItem(item);
    });
  }

  addMenuItem(menuItem: MenuItemConstructorOptions): void {
    this.app_menu.append(new MenuItem(menuItem));
  }

  setAppMenu(): void {
    Menu.setApplicationMenu(this.app_menu);
  }
}
